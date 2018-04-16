import { TestBed, inject } from '@angular/core/testing';

import { IssuesListFakeService } from './issues-list-fake.service';

describe('IssuesListFakeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IssuesListFakeService]
    });
  });

  it('should be created', inject([IssuesListFakeService], (service: IssuesListFakeService) => {
    expect(service).toBeTruthy();
  }));
});
