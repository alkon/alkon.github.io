import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PhonePipe} from '@app/shared/pipes/phone.pipe';
import {ConfirmDialogComponent} from './confirm-dialog/confirm-dialog.component';

@NgModule({
  declarations: [ConfirmDialogComponent],
  imports: [CommonModule],
  providers: [PhonePipe],
  exports: [ConfirmDialogComponent]
})
export class SharedModule { }
