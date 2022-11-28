import {NgModule} from '@angular/core';
import {AppRoutingModule} from '@app/app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppComponent} from '@app/app.component';
import {HomeComponent} from '@app/home/home.component';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {HomeModule} from '@app/home/home.module';
//import {ConfirmDialogComponent} from '@app/shared/confirm-dialog/confirm-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    //ConfirmDialogComponent
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    HomeModule
  ],
  providers: [],
  //entryComponents: [ConfirmDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
