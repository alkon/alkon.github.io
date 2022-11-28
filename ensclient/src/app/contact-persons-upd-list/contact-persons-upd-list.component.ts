import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-contact-persons-upd-list',
  templateUrl: './contact-persons-upd-list.component.html',
  styleUrls: ['./contact-persons-upd-list.component.scss']
})
export class ContactPersonsUpdListComponent implements OnInit {
  personToAdd: any = [{
    deliveryFlag: false,
    typeArr: [{
      code: 1,
      value: 'קק',
    },
      {
        code: 2,
        value: 'cc',
      },
    ],
    // type: {
    //   code: 1,
    //   value: '',
    // },
    name: '',
    phoneNumber: 0,
    email: '',
    address: ''
  }];

  tableFormGrp: FormGroup;

  //@ViewChild(MatTable) cpTable!: MatTable<any>;
  displayedColumns: string[] = ['deliveryFlag', 'name', 'type', 'address', 'phoneNumber', 'email', 'addButton'];

  dataSource = new MatTableDataSource<any>();

  constructor(private _tableFb: FormBuilder,
              private _rowFb: FormBuilder) {}

  ngOnInit() {
    this.tableFormGrp = this._tableFb.group({
      rowsFormControl: this._tableFb.array([])
    });

    this.tableFormGrp = this._rowFb.group({
      rowsArr: this._rowFb.array(this.personToAdd.map(
        (personToAdd: any) => this._rowFb.group({
          deliveryFlag: new FormControl(personToAdd.deliveryFlag),
          name: new FormControl(personToAdd.name, Validators.required),
          typeArr: new FormControl(personToAdd.typeArr, Validators.required),
          //type: new FormControl(personToAdd.type.value, Validators.required),
          phoneNumber: new FormControl(personToAdd.phoneNumber, Validators.required),
          address: new FormControl(personToAdd.address, Validators.required),
          email: new FormControl(personToAdd.email, Validators.email),
          //addButton: new FormControl(null),
        })
      ))
    });

    this.dataSource =
      new MatTableDataSource(this.rowsArr.controls);
  }

  get rowsArr(): FormArray {
    return this.tableFormGrp.get('rowsArr') as FormArray;
  }

  rowFormGrp(index: number = 0): FormGroup {
    return this.rowsArr.get(index + '') as FormGroup
  }

  typeArr(index: number = 0): any[] {
    const array: any[] = this.rowsArr.value(index).typeArr;
    return array;
  }

  typeArrFormControl(index: number = 0): FormControl {
    const fc: FormControl = this.rowFormGrp(index).controls['typeArr'].value;
    return fc;
  }

  onTypeChange(event: any, index: number = 0) {

  }

  addContactPerson() {
    //this.rowsArr.push(this.initEmptyRowForm());
    //this.rowsArr.insert(0, this.initEmptyRowForm());
    console.log('contactPerson: ', this.tableFormGrp.value);
  }

  // initEmptyRowForm(): FormGroup {
  //   return this._rowFb.group({
  //     deliveryFlag: new FormControl(null),
  //     name: new FormControl('', Validators.required),
  //     submittedBy: new FormControl('', Validators.required),
  //     phoneNumber: new FormControl('', Validators.required),
  //     address: new FormControl('', Validators.required),
  //     email: new FormControl('', Validators.required),
  //     editable: new FormControl(true),
  //   });
  // }

  // editable(index: number): boolean {
  //   const editable = this.rowsArr.value[index].editable;
  //   return editable;
  // }

  // fieldAppearance(index: number): string {
  //   const appearance = this.editable(index) ? 'fill' : 'none';
  //   return appearance;
  // }

  // setRowEditable(index: number, editable: boolean) {
  //   this.rowsArr.value[index].editable = editable;
  //   // this.rowsArr.at(0).get('editable').patchValue(true);
  // }

}
