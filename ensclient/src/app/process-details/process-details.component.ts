import {Component, Input, OnDestroy, OnInit} from '@angular/core';

import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Observable, Subscription} from 'rxjs';
import {IProcess} from '@app/model/data/process.model';
import {IProcessDetails} from '@app/model/domain/process-details.model';
import {MessageService} from '@app/services/message.service';
import {DdListsContentService, IListItem} from '@app/services/dd-lists-content.service';
import {distinctUntilChanged} from 'rxjs/operators';
import {FormRegisterService} from '@app/services/form-register.service';
import {Utils} from '@app/util/utils';

@Component({
  selector: 'app-process-details',
  templateUrl: './process-details.component.html',
  styleUrls: ['./process-details.component.scss']
})
export class ProcessDetailsComponent implements OnInit, OnDestroy {
  @Input() process: IProcess;
  processDetailsObs$: Observable<IProcessDetails>;

  processDetails: IProcessDetails;

  commonDetailsFormGrp: FormGroup;
  claimDetailsFormGrp: FormGroup;

  subscriptions: Subscription[] = [];

  identityTypeValue: string = 'commonDetailsFormGrp';

  COMMON_FORM_NAME = 'commonDetailsFormGrp';
  FORM_NAME = 'claimDetailsFormGrp';

  constructor(
    private _fb: FormBuilder, private _httpClient: HttpClient,
    private _messageSrv: MessageService,
    private _ddListsContentSrv: DdListsContentService,
    private _formRegisterSrv: FormRegisterService) {
  }

  ngOnInit(): void {
    this.createForms();
    this.populateDetails();

    this.subscriptions.push(
      this._messageSrv.getRefreshProcessMsg$().subscribe((msg: boolean) => {
        if (msg) {
          this.claimDetailsFormGrp.reset();
          this.injuryTypeControl.disable();
        }
      }),

      this.claimDetailsFormGrp.statusChanges.pipe(
        distinctUntilChanged()).subscribe((status) => {
          this._messageSrv.changeFormStatus([this.getFormGrp(), this.FORM_NAME]);
          //console.log(`the new status is ${status}`);
      }),

      this._messageSrv.getPrintFormsMsg$().subscribe((print: boolean) => {
         if (print) {
           console.log('Data of ' + this.COMMON_FORM_NAME, this.getCommonDetailsFormGrp().value);
           console.log('Data of ' + this.FORM_NAME, this.getFormGrp().value);
         }
      }),
    );
  }

  createForms() {
    this.commonDetailsFormGrp = this._fb.group({
      nameControl: [
        {value: this.process?.insured?.firstName + ' ' +
            this.process?.insured?.lastName,
          disabled: true}],
      ageControl: [{value: this.process?.insured?.age, disabled: true}],
      idControl: [{value: this.process?.insured?.identity, disabled: true}],
      addressControl: [
        {value: this.process?.insured?.address?.streetName + ' ' +
            this.process?.insured?.address?.cityName,
          disabled: true}],
    });

    this.claimDetailsFormGrp = this._fb.group({
      superClaimControl: [null, Validators.required],
      claimDateControl: [null, Validators.required],
      claimCauseControl: [null, Validators.required],
      injuryTypeControl: [{value: null, disabled: true}/*, Validators.required*/],
      submittedByControl: [null, Validators.required],
      submissionMethodControl: [null/*, Validators.required*/],
    });

    // *** Register Form
    this._formRegisterSrv.registerForm(this.FORM_NAME);
  }

  populateDetails() {
    this._httpClient.get<IProcessDetails>('assets/mocks/process-details.json').subscribe(
      (details: IProcessDetails) => {
               this.processDetails = details;

               // *** Store data for appropriate drop-down lists
               this._ddListsContentSrv.submittedByDdList = details.submittedByDdList;
               //this._ddListsContentSrv.identityTypeDdList = details.identityTypeDdList;

               const typeCode = this.process.insured.identityType;
               const item: IListItem = details.identityTypesDdList.find(type => type.code === typeCode);
               if (item) {
                 this.identityTypeValue = item.value;
               }
         }
    );
  }

  get injuryTypeControl(): FormControl {
    return this.claimDetailsFormGrp.controls.injuryTypeControl as FormControl;
  }

  onClaimCauseChange() {
    this.injuryTypeControl.enable();
  }

  onSubmittedByChange(event: any) {
      const code = event.value;
      this._messageSrv.checkSubmittedBy(code);
  }

  private getCommonDetailsFormGrp(): FormGroup {
    return this.commonDetailsFormGrp;
  }

  private getFormGrp(): FormGroup {
    return this.claimDetailsFormGrp;
  }

  ngOnDestroy() {
    Utils.unsubscribeAll(this.subscriptions);
  }

}
