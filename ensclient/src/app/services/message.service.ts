import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private refreshMsgSubject = new BehaviorSubject<boolean>(false);
  refreshMsgObs$: Observable<boolean> = this.refreshMsgSubject.asObservable();

  constructor() { }

  refreshProcess(refresh: boolean = false) {
    this.refreshMsgSubject.next(refresh);
  }

  getRefreshMsgObs(): Observable<boolean> {
    return this.refreshMsgObs$;
  }

}
