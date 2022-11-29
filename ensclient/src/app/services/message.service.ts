import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {IContactPerson} from '@app/model/data/contact-person.model';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private refreshProcessSubject = new BehaviorSubject<boolean>(false);
  refreshProcessMsg$: Observable<boolean> = this.refreshProcessSubject.asObservable();

  private checkSubmittedBySubject = new BehaviorSubject<number>(null);
  checkSubmittedByMsg$: Observable<number> = this.checkSubmittedBySubject.asObservable();

  private showContactPersonNewRowSubject = new BehaviorSubject<boolean>(false);
  showContactPersonNewRowMsg$: Observable<boolean> = this.showContactPersonNewRowSubject.asObservable();

  private addContactPersonSubject = new BehaviorSubject<IContactPerson>(null);
  addContactPersonMsg$: Observable<IContactPerson> = this.addContactPersonSubject.asObservable();

  private removeAllContactPersonsNonDeliverySubject = new BehaviorSubject<boolean>(false);
  removeAllContactPersonsNonDeliveryMsg$: Observable<boolean> = this.removeAllContactPersonsNonDeliverySubject.asObservable();

  private removeAllContactPersonsSubject = new BehaviorSubject<boolean>(false);
  removeAllContactPersonsMsg$: Observable<boolean> = this.removeAllContactPersonsSubject.asObservable();

  private contactPersonsChangedAmountSubject = new BehaviorSubject<IContactPerson[]>(null);
  contactPersonsChangedAmountMsg$: Observable<IContactPerson[]> = this.contactPersonsChangedAmountSubject.asObservable();

  constructor() { }

  // *** Refresh Process
  refreshProcess(refresh: boolean = false): void {
    this.refreshProcessSubject.next(refresh);
  }

  getRefreshProcessMsg$(): Observable<boolean> {
    return this.refreshProcessMsg$;
  }

  // *** Check Submitted By
  checkSubmittedBy(code: number) {
    this.checkSubmittedBySubject.next(code);
  }

  getCheckSubmittedByMsg$(): Observable<number> {
    return this.checkSubmittedByMsg$;
  }

  // *** Show Contact Person New Row
  showContactPersonNewRow(show: boolean = false): void {
    this.showContactPersonNewRowSubject.next(show);
  }

  getShowContactPersonNewRowMsg$(): Observable<boolean> {
    return this.showContactPersonNewRowMsg$;
  }

  // *** Add Contact Person
  addContactPerson(contactPerson: IContactPerson = null): void {
    this.addContactPersonSubject.next(contactPerson);
  }

  getAddContactPersonMsg$(): Observable<IContactPerson> {
    return this.addContactPersonMsg$;
  }

  // *** Remove all Contact Persons
  removeAllContactPersons(remove: boolean = false): void {
    this.removeAllContactPersonsSubject.next(remove);
  }

  getRemoveAllContactPersonsMsg$(): Observable<boolean> {
    return this.removeAllContactPersonsMsg$;
  }

  // *** Remove all Contact Persons with Non-Delivery status
  removeAllContactPersonsNonDelivery(remove: boolean = false): void {
    this.removeAllContactPersonsNonDeliverySubject.next(remove);
  }

  getRemoveAllContactPersonsNonDeliveryMsg$(): Observable<boolean> {
    return this.removeAllContactPersonsNonDeliveryMsg$;
  }

  // *** Contact Persons Changed
  contactPersonsChangedAmount(persons: IContactPerson[] = null) {
    this.contactPersonsChangedAmountSubject.next(persons);
  }

  getContactPersonsChangedAmountMsg$(): Observable<IContactPerson[]> {
    return this.contactPersonsChangedAmountMsg$;
  }


}
