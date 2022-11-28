import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {IContactPerson} from '@app/model/data/contact-person.model';
import {MatTable, MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-contact-persons-list',
  templateUrl: './contact-persons-list.component.html',
  styleUrls: ['./contact-persons-list.component.scss']
})
export class ContactPersonsListComponent implements OnInit {
  @Input() persons: IContactPerson[];

  @ViewChild(MatTable) cpTable!: MatTable<any>;

  displayedColumns: string[] = ['deliveryFlag', 'name', 'type', 'address', 'phoneNumber', 'email'];
  dataSource = new MatTableDataSource<any>();

  constructor() {}

  ngOnInit() {
    this.dataSource =
       new MatTableDataSource(this.persons);
  }

  renderTable() {
    this.cpTable.renderRows();
  }

  addContactPerson() {
    //this.rowsArr.push(this.initEmptyRowForm());
    //this.rowsArr.insert(0, this.initEmptyRowForm());
    this.renderTable();
  }

}
