import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaxpowerDashboardComponent } from './maxpower-dashboard.component';

describe('MaxpowerDashboardComponent', () => {
  let component: MaxpowerDashboardComponent;
  let fixture: ComponentFixture<MaxpowerDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaxpowerDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaxpowerDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
