import {Component, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {IContactPerson} from '@app/model/data/contact-person.model';
import {MatTable, MatTableDataSource} from '@angular/material/table';
import {Subscription} from 'rxjs';
import {MessageService} from '@app/services/message.service';

@Component({
  selector: 'app-contact-persons-list',
  templateUrl: './contact-persons-list.component.html',
  styleUrls: ['./contact-persons-list.component.scss']
})
export class ContactPersonsListComponent implements OnInit, OnDestroy {
  @Input() persons: IContactPerson[];
  @ViewChild(MatTable) cpTable!: MatTable<any>;

  subscriptions: Subscription[] = [];
  displayedColumns: string[] = ['deliveryFlag', 'name', 'type', 'address', 'phoneNumber', 'email'];
  dataSource = new MatTableDataSource<any>();
  showNewRow = false;

  constructor(private _messageSrv: MessageService) {
  }

  ngOnInit() {
    this.dataSource =
      new MatTableDataSource(this.persons);

    this.subscriptions.push(
      this._messageSrv.getShowContactPersonNewRowMsg$().subscribe((show: boolean) => {
        this.showContactPersonNewRow(show);
      }),

      this._messageSrv.getAddContactPersonMsg$().subscribe((cp: IContactPerson) => {
        if (cp) {
          const lastId = this.persons.length;
          cp.id = lastId + 1;
          this.addContactPerson(cp);
        }
      }),

      this._messageSrv.getRemoveAllContactPersonsMsg$().subscribe((remove: boolean) => {
          if (remove) {
              this.removeAllContactPersons();
          }
      }),

      this._messageSrv.getRemoveAllContactPersonsNonDeliveryMsg$().subscribe((remove: boolean) => {
        if (remove) {
          this.removeAllContactPersons(true);
        }
      }),


    );
  }

  showContactPersonNewRow(show: boolean) {
    this.showNewRow = show;
  }

  removeAllContactPersons(nonDeliveryOnly: boolean = false) {
    this.showNewRow = false;

    if (nonDeliveryOnly) {
       this.persons = this.persons.filter(p => p.deliveryFlag === true);
    }
    else {
      this.persons = [];
    }

    this.renderTable();
  }

  addContactPerson(cp: IContactPerson) {
    this.persons.push(cp);
    this.showNewRow = false;
    this.renderTable();
  }

  renderTable() {
    this.reIndexPersonElements();

    this.dataSource =
      new MatTableDataSource(this.persons);

    this.cpTable.renderRows();

    this._messageSrv.contactPersonsChangedAmount(this.persons);
  }

  reIndexPersonElements() {
    let index = 1;
    for (const person of this.persons) {
      person.id = index;
      index++;
    }
  }

  onDeliveryFlagChange(index: number, event: any) {
    this.persons[index].deliveryFlag = event.checked;
  }

  ngOnDestroy() {
    for (const sbs of this.subscriptions) {
      sbs.unsubscribe();
    }
  }
}
