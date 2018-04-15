import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Issue } from '../models/issue';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

@Injectable()
export class IssuesListService {
  protected path: string = 'https://api.github.com/repos/angular/angular.js/issues';

  constructor(private http: Http) { }

  getIssues(queryParams: Object): Observable<Issue[]> {
    let params = "?";
    Object.keys(queryParams).map((query, index) => {
      if (index === 0) params += `${query}=${queryParams[query]}`;
      else params += `&${query}=${queryParams[query]}`;
    });
    return this.http.get(this.path)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    if (res.status < 200 || res.status >= 300) {
      throw new Error('Bad response status: ' + res.status);
    }
    const body = res.json();
    return body || {};
  }

  private handleError(error: any): Observable<any> {
    const errMsg = 'Server error'; // get Error message from error
    return Observable.throw(errMsg);
  }
}
