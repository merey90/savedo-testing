import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { IssuesComponent } from './features/issues/issues.component';
import { IssueComponent } from './features/issues/issue/issue.component';
import { IssuesListService } from './features/issues/services/issues-list.service';
import { HttpModule } from '@angular/http';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule
      ],
      declarations: [
        AppComponent,
        IssuesComponent,
        IssueComponent
      ],
      providers:[
        IssuesListService
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
