import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaxpowerEarningsComponent } from './maxpower-earnings.component';

describe('MaxpowerEarningsComponent', () => {
  let component: MaxpowerEarningsComponent;
  let fixture: ComponentFixture<MaxpowerEarningsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaxpowerEarningsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaxpowerEarningsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
