import { Injectable } from '@angular/core';

export interface IListItem {
   code: number;
   value: string;
}

@Injectable({
  providedIn: 'root'
})
export class DdListsContentService {
  constructor() { }

  submittedByDdList: IListItem[];
  //identityTypeDdList: IListItem[];
}
