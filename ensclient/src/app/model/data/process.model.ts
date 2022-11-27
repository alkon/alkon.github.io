import {ISuperClaim} from '@app/model/data/super-claim.model';
import {IInsured} from '@app/model/data/insured.model';
import {IContactPerson} from '@app/model/data/contact-person.model';

export interface IProcess {
  superClaim: ISuperClaim;
  insured: IInsured;
  contactPersons: IContactPerson[];
}
