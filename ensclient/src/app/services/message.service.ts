import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private refreshProcessSubject = new BehaviorSubject<boolean>(false);
  refreshProcessMsg$: Observable<boolean> = this.refreshProcessSubject.asObservable();

  private showContactPersonNewRowSubject = new BehaviorSubject<boolean>(false);
  showContactPersonNewRowMsg$: Observable<boolean> = this.showContactPersonNewRowSubject.asObservable();

  private checkSubmittedBySubject = new BehaviorSubject<number>(null);
  checkSubmittedByMsg$: Observable<number> = this.checkSubmittedBySubject.asObservable();

  constructor() { }

  // *** Refresh Process
  refreshProcess(refresh: boolean = false): void {
    this.refreshProcessSubject.next(refresh);
  }

  getRefreshProcessMsg$(): Observable<boolean> {
    return this.refreshProcessMsg$;
  }

  // *** Show Contact Person New Row
  showContactPersonNewRow(show: boolean = false): void {
    this.showContactPersonNewRowSubject.next(show);
  }

  getShowContactPersonNewRowMsg$(): Observable<boolean> {
    return this.showContactPersonNewRowMsg$;
  }

  // *** Check Submitted By
  checkSubmittedBy(code: number) {
    this.checkSubmittedBySubject.next(code);
  }

  getCheckSubmittedByMsg$(): Observable<number> {
    return this.checkSubmittedByMsg$;
  }

}
