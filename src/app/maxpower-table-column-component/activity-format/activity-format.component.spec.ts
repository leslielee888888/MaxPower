import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityFormatComponent } from './activity-format.component';

describe('ActivityFormatComponent', () => {
  let component: ActivityFormatComponent;
  let fixture: ComponentFixture<ActivityFormatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityFormatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityFormatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
