import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueComponent } from './issue.component';

import ISSUESMOCK from './../services/issues.mock';
import { Issue } from '../models/issue';
import * as moment from 'moment';

describe('IssueComponent', () => {
  let component: IssueComponent;
  let fixture: ComponentFixture<IssueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueComponent);
    component = fixture.componentInstance;
    component.issue = Object.assign(ISSUESMOCK[0]);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should set proper stylings for issue labels', ()=>{
    const color = '000000';
    const stylings = component.getLabelStylings(color);
    expect(stylings.color === '#fff').toBeTruthy();
  })

  it('Should set proper text for created date', ()=>{
    
    let final = true,
        date,
        result;

    date = moment().subtract(2, 'minutes').toDate();
    result = component.dateInfo(date);
    if(result !== '2 minutes ago') final = false;
    
    date = moment().subtract(2, 'hours').toDate();
    result = component.dateInfo(date);
    if(result !== `2 hours ago`) final = false;
    
    date = moment().subtract(2, 'days').toDate();
    result = component.dateInfo(date);
    if(result !== `2 days ago`) final = false;
    
    date = moment().subtract(2, 'months').toDate();
    result = component.dateInfo(date);
    if(result !== `on ${moment(date).format("MMM D")}`) final = false;
    
    date = moment().subtract(2, 'years').toDate();
    result = component.dateInfo(date);
    if(result !== `on ${moment(date).format("MMM D, YYYY")}`) final = false;
    
    expect(final).toBeTruthy();
  })
});
