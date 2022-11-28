import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {IContactPerson} from '@app/model/data/contact-person.model';
import {MessageService} from '@app/services/message.service';
import {Subscription} from 'rxjs';
import {MatDialog} from '@angular/material/dialog';
import {ConfirmDialogService} from '@app/shared/confirm-dialog/confirm-dialog.service';


@Component({
  selector: 'app-contact-persons',
  templateUrl: './contact-persons.component.html',
  styleUrls: ['./contact-persons.component.scss']
})
export class ContactPersonsComponent implements OnInit, OnDestroy {
  @Input() persons: IContactPerson[];
  subscriptions: Subscription[] = [];

  constructor(private _messageSrv: MessageService, private _dialogSrv: ConfirmDialogService) { }

  ngOnInit(): void {

    this.subscriptions.push(
      this._messageSrv.getCheckSubmittedByMsg$().subscribe((code: number) => {
        const existedCodeArr =
          this.persons.filter((p: IContactPerson) => p.type.code === code);

        if (code !== null && existedCodeArr.length === 0) {
          const options = {
            title: 'הודעה',
            message: 'חייב להיות איש קשר מאותו סוג',
            cancelText: null,
            confirmText: 'אישור'
          };

          this._dialogSrv.open(options);
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
