import {Component, OnDestroy, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subscription} from 'rxjs';
import {IProcess} from '@app/model/data/process.model';
import {MessageService} from '@app/services/message.service';
import {ConfirmDialogService} from '@app/shared/confirm-dialog/confirm-dialog.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FormRegisterService} from '@app/services/form-register.service';
import {Utils} from '@app/util/utils';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  processObs$: Observable<IProcess>;
  process: IProcess;

  subscriptions : Subscription[] = [];
  formStatusMap: Map<string, string> = new Map();

  existNonValidForm: boolean = true;

  homeFormGrp: FormGroup;
  FORM_NAME = 'homeFormGrp';

  constructor(private _httpClient: HttpClient,
              private _messageSrv: MessageService,
              private _dialogSrv: ConfirmDialogService,
              private _formRegisterSrv: FormRegisterService,
              private _fb: FormBuilder) {
  }

  ngOnInit(): void {
    //this.processObs$ = this._httpClient.get<IProcess>('assets/mocks/ens-process.json');

    this.subscriptions.push(
      this._httpClient.get<IProcess>('assets/mocks/ens-process.json').subscribe((process: IProcess) => {
        this.process = process;
        this.createForm(process);
      }),

      this._messageSrv.getPrintFormsMsg$().subscribe((print: boolean) => {
        if (print) {
          console.log('Data of ' + this.FORM_NAME, this.getFormGrp().value);
        }
      }),

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

  createForm(process: IProcess) {
    this.homeFormGrp = this._fb.group({
      superClaimNumberControl: [{value: process?.superClaim?.superClaimNumber, disabled: true}],
      superClaimStatusControl: [{value: process?.superClaim?.superClaimStatus?.value, disabled: true}],
    });

    // *** Important! Don't Register Form to check if valid. It's always valid.
    //this._formRegisterSrv.registerForm(this.FORM_NAME);
  }

  getFormGrp() {
    return this.homeFormGrp;
  }

  refreshProcess() {
    this._messageSrv.refreshProcess(true);
  }

  continueProcess() {
    this._messageSrv.printForms(true);
  }

  ngOnDestroy() {
    Utils.unsubscribeAll(this.subscriptions);
  }

}
