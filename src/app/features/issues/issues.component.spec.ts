import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssuesComponent } from './issues.component';
import { IssueComponent } from './issue/issue.component';
import { IssuesListService } from './services/issues-list.service';
import { HttpModule } from '@angular/http';
import { IssuesListFakeService } from './services/issues-list-fake.service';

describe('IssuesComponent', () => {
  let component: IssuesComponent;
  let fixture: ComponentFixture<IssuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule
      ],
      declarations: [ 
        IssuesComponent,
        IssueComponent
      ],
      providers:[
        { provide: IssuesListService, useClass: IssuesListFakeService }
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should provide list of issues', () => {
    let fixture = TestBed.createComponent(IssuesComponent);
    fixture.detectChanges();
    expect(fixture.componentInstance.issues.length).toBeGreaterThan(0);
  });
});
