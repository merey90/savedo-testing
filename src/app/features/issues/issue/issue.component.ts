import { Component, OnInit, Input } from '@angular/core';
import { Issue } from '../models/issue';

@Component({
  selector: 'app-issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.scss']
})
export class IssueComponent implements OnInit {
  @Input() issue: Issue;

  constructor() { }

  ngOnInit() {
  }

}
