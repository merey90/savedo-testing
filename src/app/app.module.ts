import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { IssuesComponent } from './features/issues/issues.component';
import { IssueComponent } from './features/issues/issue/issue.component';


@NgModule({
  declarations: [
    AppComponent,
    IssuesComponent,
    IssueComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
