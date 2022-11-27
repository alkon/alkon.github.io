import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {IContactPerson} from '@app/model/data/contact-person.model';
import {MessageService} from '@app/services/message.service';
import {Subscription} from 'rxjs';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact-persons',
  templateUrl: './contact-persons.component.html',
  styleUrls: ['./contact-persons.component.scss']
})
export class ContactPersonsComponent implements OnInit, OnDestroy {
  @Input() persons: IContactPerson[];
  subscriptions: Subscription[] = [];

  constructor(private _messageSrv: MessageService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {

    this.subscriptions.push(
      this._messageSrv.getCheckSubmittedByMsg$().subscribe((code: number) => {
        const nonExistedCodeArr = this.persons.filter(p => code !== null && p.type.code !== code);
        if (nonExistedCodeArr.length > 0) {
          const content = 'חייב להיות איש קשר מאותו סוג';
          const action = 'סגור';
          // this._snackBar.open(content, action, {
          //   duration: 2000,
          //   verticalPosition: "top", // bottom
          //   horizontalPosition: "center"
          // });
        }
    }));
  }

  addContactPerson() {
    //this._messageSrv.addContactPerson()
  }

  ngOnDestroy() {
    for (const sbs of this.subscriptions) {
      sbs.unsubscribe();
    }
  }

}
