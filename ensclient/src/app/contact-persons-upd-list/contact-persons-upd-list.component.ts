import {Component, OnDestroy, OnInit} from '@angular/core';
import {AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MatTableDataSource} from '@angular/material/table';
import {MessageService} from '@app/services/message.service';
import {DdListsContentService, IListItem} from '@app/services/dd-lists-content.service';
import {FormRegisterService} from '@app/services/form-register.service';
import {distinctUntilChanged} from 'rxjs/operators';
import {Subscription} from 'rxjs';
import {IContactPerson} from '@app/model/data/contact-person.model';
import {Utils} from '@app/util/utils';

@Component({
  selector: 'app-contact-persons-upd-list',
  templateUrl: './contact-persons-upd-list.component.html',
  styleUrls: ['./contact-persons-upd-list.component.scss']
})
export class ContactPersonsUpdListComponent implements OnInit, OnDestroy {
  personToEditArr: any = [{
    deliveryFlag: false,
    typeArr: [],
    name: '',
    phoneNumber: null,
    email: '',
    address: ''
  }];

  personToAdd: IContactPerson;

  tableFormGrp: FormGroup;
  submittedDdList: IListItem[];

  displayedColumns: string[] =
    ['deliveryFlag', 'name', 'type', 'address', 'phoneNumber', 'email',
      'addButton', 'removeButton'];

  dataSource = new MatTableDataSource<any>();

  FORM_NAME = 'tableFormGrp';
  HEBREW_PATTERN = '^[\u0590-\u05FF ]+$';
  NUMBER_PATTERN_OLD = '\\-?\\d*\\.?\\d{1,2}';
  NUMBER_PATTERN = '^((\\+91-?)|0)?[0-9]{10}$';

   subscriptions: Subscription[] = [];

  constructor(private _tableFb: FormBuilder,
              private _rowFb: FormBuilder,
              private _messageSrv: MessageService,
              private _ddListsContentSrv: DdListsContentService,
              private _formRegisterSrv: FormRegisterService) {}

  ngOnInit() {
    this.submittedDdList = this._ddListsContentSrv.submittedByDdList;
    this.personToEditArr[0].typeArr = this.submittedDdList;

    this.createForm();

    this.dataSource =
      new MatTableDataSource(this.rowsArr.controls);

    this.tableFormGrp.statusChanges.pipe(
      distinctUntilChanged()).subscribe(() => {
      this._messageSrv.changeFormStatus([this.getFormGrp(), this.FORM_NAME]);
    });

    this.subscriptions.push(
      this._messageSrv.getRefreshProcessMsg$().subscribe((msg: boolean) => {
        if (msg) {
          this.getFormGrp().reset();
        }
      }),

      this._messageSrv.getPrintFormsMsg$().subscribe((print: boolean) => {
        if (print) {
          console.log('Data of ' + this.FORM_NAME, this.getFormGrp().value);
        }
      }),
    )
  }

  createForm() {
    this.tableFormGrp = this._tableFb.group({
      rowsFormControl: this._tableFb.array([])
    });

    this.tableFormGrp = this._rowFb.group({
      rowsArr: this._rowFb.array(this.personToEditArr.map(
        (personToEdit: any) => this._rowFb.group({
          deliveryFlag: new FormControl(personToEdit.deliveryFlag),
          name: new FormControl(personToEdit.name,
            [Validators.required, Validators.pattern(this.HEBREW_PATTERN)]),
          type: new FormControl(personToEdit.typeArr, Validators.required),
          phoneNumber: new FormControl(personToEdit.phoneNumber,
            [Validators.required, Validators.pattern(this.NUMBER_PATTERN),
              //Validators.minLength(10),
              //Validators.maxLength(10)
            ]),
          address: new FormControl(personToEdit.address),
          email: new FormControl(personToEdit.email, [Validators.email]),
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

  getPersonToEdit(): any {
    const cp: any = this.tableFormGrp.value.rowsArr[0];
    return cp;
  }

  addContactPerson() {
    if (this.tableFormGrp.valid) {
      const typeCodeChosen = this.getPersonToEdit().type;
      const typeObj = this.submittedDdList.find( t => t.code === typeCodeChosen);
      this.personToAdd = {...this.getPersonToEdit(), type: typeObj};

      this._messageSrv.addContactPerson(this.personToAdd);
    }
  }

  removeContactPersonNewRow() {
    this._messageSrv.showContactPersonNewRow(false);
  }

  private getFormGrp(): FormGroup {
    return this.tableFormGrp;
  }

  public controlValid(controlName: string, index: number) {
    const formGrp: FormGroup = this.rowsArr.controls[index] as FormGroup;
    const valid = formGrp.controls[controlName + ''].status === 'VALID';
    return valid;
  }

  controlStyle(controlName: string, index: number) {
     const style = this.controlValid(controlName, index) ? {color: 'black'} : {color: 'red'};
     return style;
  }

  public formValid() {
    return this.tableFormGrp.valid;
  }

  ngOnDestroy() {
    Utils.unsubscribeAll(this.subscriptions);
  }
}
