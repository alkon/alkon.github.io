import {Component, Input, OnDestroy, OnInit} from '@angular/core';

import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
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

  constructor(private _fb: FormBuilder, private _httpClient: HttpClient, private _messageSrv: MessageService) {
  }

  ngOnInit(): void {
    this.createForm();
    this.populateDetails();

    this._messageSrv.getRefreshMsgObs().subscribe((msg: boolean) => {
      if (msg) {
        this.claimDetailsFormGrp.reset();
        this.claimCauseControl.disable();
      }
    })
  }

  createForm() {
    this.claimDetailsFormGrp = this._fb.group({
      superClaimControl: [null],
      claimDateControl: [null],
      claimCauseControl: [{value: null, disabled: true}],
    });
  }

  populateDetails() {
    this.processDetailsObs$ = this._httpClient.get<IProcessDetails>('assets/mocks/process-details.json');
  }

  get claimCauseControl(): FormControl {
    return this.claimDetailsFormGrp.controls.claimCauseControl as FormControl;
  }

  onSuperClaimChange() {
    this.claimCauseControl.enable();
  }

  ngOnDestroy() {
  }

}
