import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {HomeRoutingModule} from '@app/home/home-routing.module';
import {AngularMaterialModule} from '@app/material.module';
import {ProcessDetailsComponent} from '@app/process-details/process-details.component';
import {ContactPersonsComponent} from '@app/contact-persons/contact-persons.component';
import {ContactPersonsListComponent} from '@app/contact-persons-list/contact-persons-list.component';
import {SharedModule} from '@app/shared/shared.module';
import {ContactPersonsUpdListComponent} from '@app/contact-persons-upd-list/contact-persons-upd-list.component';

@NgModule({
  declarations: [
    ProcessDetailsComponent,
    ContactPersonsComponent,
    ContactPersonsListComponent,
    ContactPersonsUpdListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HomeRoutingModule,
    AngularMaterialModule,
    SharedModule
  ],
  exports:[
    ProcessDetailsComponent,
    ContactPersonsComponent,
    ContactPersonsListComponent,
    ContactPersonsUpdListComponent,
    ReactiveFormsModule,
    AngularMaterialModule
  ],
})
export class HomeModule { }
