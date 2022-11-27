import {Component, Input, OnInit} from '@angular/core';
import {IContactPerson} from '@app/model/data/contact-person.model';

@Component({
  selector: 'app-contact-persons',
  templateUrl: './contact-persons.component.html',
  styleUrls: ['./contact-persons.component.scss']
})
export class ContactPersonsComponent implements OnInit {
  @Input() persons: IContactPerson[];

  constructor() { }

  ngOnInit(): void {
  }

}
