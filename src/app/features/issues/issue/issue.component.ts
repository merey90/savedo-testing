import { Component, OnInit, Input } from '@angular/core';
import { Issue } from '../models/issue';
import * as moment from 'moment';

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

  getLabelStylings(color:string): {'background-color': string; 'color': string} {
    const textColor = parseInt(color, 16) > Number.parseInt('ffffff', 16)/10 ? '000': 'fff';
    return {'background-color': `#${color}`, 'color':`#${textColor}`};
  }

  dateInfo(date: Date): string {
    const created = moment(date);
    const minutes = moment().diff(created, 'minutes');
    const hours = moment().diff(created, 'hours');
    const days = moment().diff(created, 'days');
    const years = moment().diff(created, 'years');
    let result = `${minutes} minutes ago`;
    
    if (years > 0) {
      result = `on ${created.format("MMM D, YYYY")}`;
    } else if ( days > 31 ) {
      result = `on ${created.format("MMM D")}`;
    } else if( hours > 23 ) {
      result = `${days} days ago`;
    } else if( minutes > 59 ) {
      result = `${hours} hours ago`;
    }
    return result;
  }
}
