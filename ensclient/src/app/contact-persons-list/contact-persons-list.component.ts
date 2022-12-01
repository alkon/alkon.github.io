import {Component, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {IContactPerson} from '@app/model/data/contact-person.model';
import {MatTable, MatTableDataSource} from '@angular/material/table';
import {Subscription} from 'rxjs';
import {MessageService} from '@app/services/message.service';
import {Utils} from '@app/util/utils';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {PhonePipe} from '@app/shared/pipes/phone.pipe';

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

  FORM_NAME = 'readOnlyTblFormGrp';
  readOnlyTblFormGrp: FormGroup;

  constructor(private _messageSrv: MessageService,
              private _tableFb: FormBuilder, private _rowFb: FormBuilder,
              private _phonePipe: PhonePipe) { }

  ngOnInit() {
    this.createForm();

    this.dataSource =
      new MatTableDataSource(this.rowsArr.controls);

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

      this._messageSrv.getPrintFormsMsg$().subscribe((print: boolean) => {
        if (print) {
          console.log('Data of ' + this.FORM_NAME, this.getFormGrp().value);
        }
      }),

    );
  }

  get rowsArr(): FormArray {
    return this.readOnlyTblFormGrp.get('rowsArr') as FormArray;
  }

  createForm() {
    this.readOnlyTblFormGrp = this._tableFb.group({
      rowsFormControl: this._tableFb.array([])
    });

    this.readOnlyTblFormGrp = this._rowFb.group({
      rowsArr: this._rowFb.array(this.persons.map(
        (person: any) => this.createContactPersonFormGrp(person)
      ))
    });
  }

  showContactPersonNewRow(show: boolean) {
    this.showNewRow = show;
  }

  removeAllContactPersons(nonDeliveryOnly: boolean = false) {
    this.showNewRow = false;

    if (nonDeliveryOnly) {
       this.persons = this.persons.filter(p => p.deliveryFlag === true);
      this.rowsArr.controls =
        this.rowsArr.controls.filter((formGrp: FormGroup) => formGrp.get('deliveryFlag').value === true);
    }
    else {
      this.persons = [];
      this.rowsArr.controls = [];
    }

    // remove appropriate FormGroup
    this.showNewRow = false;
    this.renderTable();
  }

  addContactPerson(cp: IContactPerson) {
    this.persons.push(cp);

    const cpGrpToAdd = this.createContactPersonFormGrp(cp);
    this.rowsArr.controls.push(cpGrpToAdd);

    this.showNewRow = false;
    this.renderTable();
  }

  createContactPersonFormGrp(cp: IContactPerson): FormGroup {
    const cpGrp: FormGroup = this._rowFb.group({
      deliveryFlag: new FormControl(cp.deliveryFlag),
      name: new FormControl(cp.name),
      type: new FormControl(cp.type.value),
      phoneNumber: new FormControl(this._phonePipe.transform(cp.phoneNumber)),
      address: new FormControl(cp.address),
      email: new FormControl(cp.email),
    });

    return cpGrp;
  }

  renderTable() {
    this.reIndexPersonElements();

    this.dataSource =
       new MatTableDataSource(this.rowsArr.controls);

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

  getFormGrp() {
    return this.readOnlyTblFormGrp;
  }

  // onDeliveryFlagChange(index: number, event: any) {
  //   this.persons[index].deliveryFlag = event.checked;
  // }

  ngOnDestroy() {
    Utils.unsubscribeAll(this.subscriptions);
  }
}
