import {Subscription} from 'rxjs';

export class Utils {
  static unsubscribeAll(subscriptionArr: Subscription[] = []) {
    for (const sbs of subscriptionArr) {
      sbs.unsubscribe();
    }
  }
}
