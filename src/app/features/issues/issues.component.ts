import { Component, OnInit } from '@angular/core';
import { Issue } from './models/issue';
import { IssuesListService } from './services/issues-list.service';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.scss']
})
export class IssuesComponent implements OnInit {
  issues: Issue[] = [];

  constructor(
    private issuesListService: IssuesListService
  ) { }

  ngOnInit() {
    this.getIssues();
  }

  getIssues(): void {
    this.issuesListService.getIssues({state:"open"})
      .subscribe(issues => this.issues = issues);
  }

}
