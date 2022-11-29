import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MatTableDataSource} from '@angular/material/table';
import {MessageService} from '@app/services/message.service';
import {DdListsContentService, IListItem} from '@app/services/dd-lists-content.service';
import {FormRegisterService} from '@app/services/form-register.service';
import {distinctUntilChanged} from 'rxjs/operators';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-contact-persons-upd-list',
  templateUrl: './contact-persons-upd-list.component.html',
  styleUrls: ['./contact-persons-upd-list.component.scss']
})
export class ContactPersonsUpdListComponent implements OnInit, OnDestroy {
  personToAdd: any = [{
    deliveryFlag: false,
    typeArr: [],
    name: '',
    phoneNumber: null,
    email: '',
    address: ''
  }];

  tableFormGrp: FormGroup;
  submittedDdList: IListItem[];

  displayedColumns: string[] =
    ['deliveryFlag', 'name', 'type', 'address', 'phoneNumber', 'email',
      'addButton', 'removeButton'];

  dataSource = new MatTableDataSource<any>();

  FORM_NAME = 'tableFrmGrp';
  HEBREW_PATTERN = '^[\u0590-\u05FF]+$';

  subscriptions: Subscription[] = [];

  constructor(private _tableFb: FormBuilder,
              private _rowFb: FormBuilder,
              private _messageSrv: MessageService,
              private _ddListsContentSrv: DdListsContentService,
              private _formRegisterSrv: FormRegisterService) {}

  ngOnInit() {
    this.submittedDdList = this._ddListsContentSrv.submittedByDdList;
    this.personToAdd[0].typeArr = this.submittedDdList;

    this.createForm();

    this.dataSource =
      new MatTableDataSource(this.rowsArr.controls);

    this.tableFormGrp.statusChanges.pipe(
      distinctUntilChanged()).subscribe(() => {
      this._messageSrv.changeFormStatus([this.tableFormGrp, 'tableFormGrp']);
    });
  }

  createForm() {
    this.tableFormGrp = this._tableFb.group({
      rowsFormControl: this._tableFb.array([])
    });

    this.tableFormGrp = this._rowFb.group({
      rowsArr: this._rowFb.array(this.personToAdd.map(
        (personToAdd: any) => this._rowFb.group({
          deliveryFlag: new FormControl(personToAdd.deliveryFlag),
          name: new FormControl(personToAdd.name,
            [Validators.required, Validators.pattern(this.HEBREW_PATTERN)]),
          type: new FormControl(personToAdd.typeArr, /*Validators.required*/),
          phoneNumber: new FormControl(personToAdd.phoneNumber,
            [Validators.required, Validators.minLength(10),
              Validators.maxLength(10)]),
          address: new FormControl(personToAdd.address),
          email: new FormControl(personToAdd.email, [Validators.email]),
          //addButton: new FormControl(null),
        })
      ))
    });

    // *** Register Form
    this._formRegisterSrv.registerForm(this.FORM_NAME);
  }

  get rowsArr(): FormArray {
    return this.tableFormGrp.get('rowsArr') as FormArray;
  }

  typeArr(index: number = 0): any[] {
    const array: any[] = this.rowsArr.value(index).type;
    return array;
  }

  onTypeChange(event: any) {
      const typeCode = event.value;
      let cpToAdd = this.getContactPersonToAdd();
      const typeObj = cpToAdd.type.find( t => t.code === typeCode);
      cpToAdd.type = typeObj;
      //console.log('Updated cp: ' + this.getContactPersonToAdd())
  }

  getContactPersonToAdd(): any {
    const cp: any = this.tableFormGrp.value.rowsArr[0];
    return cp;
  }

  addContactPerson() {
    if (this.tableFormGrp.valid) {
      const cp = this.getContactPersonToAdd();
      // *** TODO: remove later, after TYPE fix and set to REQUESTED field
      if (cp.type.length) {
        cp.type = {code: 0, value: 'לא נבחר'}
      }
      //

      this._messageSrv.addContactPerson(cp);
    }

    console.log('contactPerson: ', this.tableFormGrp.value);
  }

  removeContactPersonNewRow() {
    this._messageSrv.showContactPersonNewRow(false);
  }

  ngOnDestroy() {
    for (const sbs of this.subscriptions) {
      sbs.unsubscribe();
    }
  }
}
