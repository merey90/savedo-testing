import { Injectable } from '@angular/core';
import { Issue } from '../models/issue';
import { Observable } from 'rxjs/Observable';
import ISSUESMOCK from './issues.mock';

import 'rxjs/add/observable/of';

@Injectable()
export class IssuesListFakeService {
  
  constructor() { }

  getIssues(queryParams: Object): Observable<Issue[]> {
    let params = "";
    Object.keys(queryParams).map((query, index) => {
      if (index === 0) params += `?${query}=${queryParams[query]}`;
      else params += `&${query}=${queryParams[query]}`;
    });
    return Observable.of(Object.assign(ISSUESMOCK));
  }
}
