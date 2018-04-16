import { 
  TestBed,
  inject,
  fakeAsync, 
  tick} from '@angular/core/testing';

import { IssuesListService } from './issues-list.service';
import { 
  HttpModule,
  ResponseOptions,
  BaseRequestOptions,
  Response,
  Http,
  XHRBackend } from '@angular/http';

import { MockBackend } from '@angular/http/testing';

import ISSUESMOCK from './issues.mock';
import { Issue } from '../models/issue';

describe('IssuesListService', () => {
  let mockBackend: MockBackend;
  let issuesService: IssuesListService;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule
      ],
      providers: [
        IssuesListService,
        MockBackend,
        BaseRequestOptions,
        {
          provide: Http,
          deps: [MockBackend, BaseRequestOptions],
          useFactory:
            (backend: XHRBackend, defaultOptions: BaseRequestOptions) => {
              return new Http(backend, defaultOptions);
            }
        }
      ]
    });
    mockBackend = TestBed.get(MockBackend);
    issuesService = TestBed.get(IssuesListService);
  });

  it('should be created', inject([IssuesListService], (service: IssuesListService) => {
    expect(service).toBeTruthy();
  }));

  it('getIssues should return issues list', fakeAsync(() => {
  
    mockBackend.connections.subscribe(connection => { 
      connection.mockRespond(new Response(<ResponseOptions>{ 
        body: JSON.stringify(ISSUESMOCK)
      }));
    });

    let issues = [];
    issuesService.getIssues({}).subscribe(result => issues = result); 
    tick();

    expect(issues.length).toBeDefined();
    expect(issues.length).toEqual(30);
    expect(issues[0].number).toEqual(16528);
  }));

});
