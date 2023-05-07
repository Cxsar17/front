import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TimeDateComponent } from './time-date/time-date.component';
import { FrontAppComponent } from './front-app/front-app.component';
import { AppRoutingModule} from "./app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import { SumAppComponent } from './sum-app/sum-app.component';

@NgModule({
  declarations: [
    AppComponent,
    TimeDateComponent,
    FrontAppComponent,
    SumAppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
