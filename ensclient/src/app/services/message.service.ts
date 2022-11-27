import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {IContactPerson} from '@app/model/data/contact-person.model';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private refreshProcessSubject = new BehaviorSubject<boolean>(false);
  refreshProcessMsg$: Observable<boolean> = this.refreshProcessSubject.asObservable();

  private addContactPersonSubject = new BehaviorSubject<IContactPerson>(null);
  addContactPersonMsg$: Observable<IContactPerson> = this.addContactPersonSubject.asObservable();

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

  // *** Add Contact Person
  addContactPerson(contactPerson: IContactPerson): void {
    this.addContactPersonSubject.next(contactPerson);
  }

  getAddContactPersonMsg$(): Observable<IContactPerson> {
    return this.addContactPersonMsg$;
  }

  // *** Check Submitted By
  checkSubmittedBy(code: number) {
    this.checkSubmittedBySubject.next(code);
  }

  getCheckSubmittedByMsg$(): Observable<number> {
    return this.checkSubmittedByMsg$;
  }

}
