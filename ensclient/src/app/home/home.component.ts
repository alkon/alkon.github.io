import {Component, OnDestroy, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subscription} from 'rxjs';
import {IProcess} from '@app/model/data/process.model';
import {MessageService} from '@app/services/message.service';
import {ConfirmDialogService} from '@app/shared/confirm-dialog/confirm-dialog.service';
import {FormGroup} from '@angular/forms';
import {FormRegisterService} from '@app/services/form-register.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  processObs$: Observable<IProcess>;
  subscriptions : Subscription[] = [];
  formStatusMap: Map<string, string> = new Map();

  existNonValidForm: boolean = true;

  constructor(private _httpClient: HttpClient,
              private _messageSrv: MessageService,
              private _dialogSrv: ConfirmDialogService,
              private _formRegisterSrv: FormRegisterService) {
  }

  ngOnInit(): void {
    this.processObs$ = this._httpClient.get<IProcess>('assets/mocks/ens-process.json');

    this.subscriptions.push(
      this._messageSrv.getFormStatusChangedMsg$().subscribe((formData: [FormGroup, string]) => {
        const form = formData[0];
        if (form) {
          const formName: string = formData[1];
          this.formStatusMap.set(formName, form.status.toUpperCase());

          const registeredFormsAmount = this._formRegisterSrv.getRegisteredFormNames().length;
          const allFormsVisible =
            this.formStatusMap.size === registeredFormsAmount;

          if (allFormsVisible) {
            const ff = Array.from(this.formStatusMap.values());
            const nonValid = ff.find(val => val !== 'VALID');
            this.existNonValidForm = nonValid ? true : false;
          }
        }
      })
    );
  }

  refreshProcess() {
    this._messageSrv.refreshProcess(true);
  }

  continueProcess() {
    this._messageSrv.printForms(true);
  }

  ngOnDestroy() {
    for (const sbs of this.subscriptions) {
      sbs.unsubscribe();
    }
  }

}
