import {NgModule} from '@angular/core';
import {AppRoutingModule} from '@app/app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppComponent} from '@app/app.component';
import {HomeComponent} from '@app/home/home.component';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {HomeModule} from '@app/home/home.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
