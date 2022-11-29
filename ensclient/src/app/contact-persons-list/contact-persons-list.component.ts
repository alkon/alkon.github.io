import {Component, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {IContactPerson} from '@app/model/data/contact-person.model';
import {MatTable, MatTableDataSource} from '@angular/material/table';
import {Subscription} from "rxjs";
import {MessageService} from "@app/services/message.service";

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

  constructor(private _messageSrv: MessageService) {}

  ngOnInit() {
    this.dataSource =
       new MatTableDataSource(this.persons);

    this.subscriptions.push(
       this._messageSrv.getShowContactPersonNewRowMsg$().subscribe( show => {
           this.showContactPersonNewRow(show);
       })
    );
  }

  renderTable() {
    this.cpTable.renderRows();
  }

  showContactPersonNewRow(show) {
    this.showNewRow = show;
  }

  //addContactPerson() {
    //this.rowsArr.push(this.initEmptyRowForm());
    //this.rowsArr.insert(0, this.initEmptyRowForm());
    //this.renderTable();
    //this.showNewRow = true;

 // }

  ngOnDestroy() {
    for (const sbs of this.subscriptions) {
      sbs.unsubscribe();
    }
  }
}
