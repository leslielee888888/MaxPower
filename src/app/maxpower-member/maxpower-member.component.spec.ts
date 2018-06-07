import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaxpowerMemberComponent } from './maxpower-member.component';

describe('MaxpowerMemberComponent', () => {
  let component: MaxpowerMemberComponent;
  let fixture: ComponentFixture<MaxpowerMemberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaxpowerMemberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaxpowerMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
