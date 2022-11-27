import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IProcess} from '@app/model/data/process.model';
import {MessageService} from '@app/services/message.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  processObs$: Observable<IProcess>;

  constructor(private _httpClient: HttpClient, private _messageSrv: MessageService) {
  }

  ngOnInit(): void {
    this.processObs$ = this._httpClient.get<IProcess>('assets/mocks/ens-process.json');
  }

  refreshProcess() {
    this._messageSrv.refreshProcess(true);
  }

}
