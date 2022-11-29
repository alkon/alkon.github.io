import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormRegisterService {

  constructor() { }

  private formNames: string[] = [];

  registerForm(formName: string) {
    this.formNames.push(formName);
  }

  getRegisteredFormNames() : string[] {
    return this.formNames;
  }
}
