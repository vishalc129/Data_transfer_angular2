import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

import { DataService } from './data.service';
import {UsersService } from './users.service';


import { NewsComponent } from './news/news.component';
import { CareersComponent } from './careers/careers.component';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    DashboardComponent,
    NewsComponent,
    CareersComponent,
    OneComponent,
    TwoComponent
  ],
  imports: [
    FormsModule, BrowserModule, HttpClientModule, AppRoutingModule
  ],
  providers: [DataService,UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
