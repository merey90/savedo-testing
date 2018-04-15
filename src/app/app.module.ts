import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { IssuesComponent } from './features/issues/issues.component';
import { IssueComponent } from './features/issues/issue/issue.component';

import { IssuesListService } from './features/issues/services/issues-list.service';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    IssuesComponent,
    IssueComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    IssuesListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
