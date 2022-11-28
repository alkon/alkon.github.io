import {Component, Input, OnDestroy, OnInit} from '@angular/core';

import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Observable, Subscription} from 'rxjs';
import {IProcess} from '@app/model/data/process.model';
import {IProcessDetails} from '@app/model/domain/process-details.model';
import {MessageService} from '@app/services/message.service';

@Component({
  selector: 'app-process-details',
  templateUrl: './process-details.component.html',
  styleUrls: ['./process-details.component.scss']
})
export class ProcessDetailsComponent implements OnInit, OnDestroy {
  @Input() process: IProcess;
  processDetailsObs$: Observable<IProcessDetails>;

  claimDetailsFormGrp: FormGroup;
  subscriptions: Subscription[] = [];

  constructor(
    private _fb: FormBuilder, private _httpClient: HttpClient,
    private _messageSrv: MessageService) {
  }

  ngOnInit(): void {
    this.createForm();
    this.populateDetails();

    this.subscriptions.push(
      this._messageSrv.getRefreshProcessMsg$().subscribe((msg: boolean) => {
        if (msg) {
          this.claimDetailsFormGrp.reset();
          this.injuryTypeControl.disable();
        }
      })
    );
  }

  createForm() {
    this.claimDetailsFormGrp = this._fb.group({
      superClaimControl: [null, Validators.required],
      claimDateControl: [null, Validators.required],
      claimCauseControl: [null, Validators.required],
      injuryTypeControl: [{value: null, disabled: true}, Validators.required],
      submittedByControl: [null, Validators.required],
      submissionMethodControl: [null, Validators.required],
    });
  }

  populateDetails() {
    this.processDetailsObs$ = this._httpClient.get<IProcessDetails>('assets/mocks/process-details.json');
  }

  // get claimCauseControl(): FormControl {
  //   return this.claimDetailsFormGrp.controls.claimCauseControl as FormControl;
  // }
  //
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

  ngOnDestroy() {
    for (const sbs of this.subscriptions) {
      sbs.unsubscribe();
    }
  }

}
