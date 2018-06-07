import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DealActivitiesComponent } from './deal-activities.component';

describe('DealActivitiesComponent', () => {
  let component: DealActivitiesComponent;
  let fixture: ComponentFixture<DealActivitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DealActivitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DealActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
