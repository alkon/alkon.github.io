import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {IContactPerson} from '@app/model/data/contact-person.model';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MatTable, MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-contact-persons-list',
  templateUrl: './contact-persons-list.component.html',
  styleUrls: ['./contact-persons-list.component.scss']
})
export class ContactPersonsListComponent implements OnInit {
  @Input() persons: IContactPerson[];
  tableFormGrp: FormGroup;

  @ViewChild(MatTable) cpTable!: MatTable<any>;

  displayedColumns: string[] = ['name', 'address', 'phoneNumber', 'addButton'];
  dataSource = new MatTableDataSource<any>();

  constructor(private _tableFb: FormBuilder, private _rowFb: FormBuilder) {}

  ngOnInit() {
    this.tableFormGrp = this._tableFb.group({
       rowsFormControl: this._tableFb.array([])
    });

    this.tableFormGrp = this._rowFb.group({
       rowsArr: this._rowFb.array(this.persons.map(
          (person: IContactPerson) => this._rowFb.group({
            name: new FormControl(person.name),
            phoneNumber: new FormControl(person.phoneNumber),
            address: new FormControl(person.address),
            editable: new FormControl(false),
          })
      ))
    });

    this.dataSource =
      new MatTableDataSource(this.rowsArr.controls);
  }

  get rowsArr(): FormArray {
    return this.tableFormGrp.get('rowsArr') as FormArray;
  }

  renderTable() {
    this.cpTable.renderRows();
  }

  addContactPerson() {
    //this.rowsArr.push(this.initEmptyRowForm());
    this.rowsArr.insert(0, this.initEmptyRowForm());
    this.renderTable();
  }

  initEmptyRowForm(): FormGroup {
    return this._rowFb.group({
      name: new FormControl(''),
      phoneNumber: new FormControl(''),
      address: new FormControl(''),
      editable: new FormControl(true),
    });
  }

  editable(index: number): boolean {
    const editable = this.rowsArr.value[index].editable;
    return editable;
  }

  fieldAppearance(index: number): string {
    const appearance = this.editable(index) ? 'fill' : 'none';
    return appearance;
  }

  setRowEditable(index: number, editable: boolean) {
    this.rowsArr.value[index].editable = editable;
    // this.rowsArr.at(0).get('editable').patchValue(true);
  }

}
