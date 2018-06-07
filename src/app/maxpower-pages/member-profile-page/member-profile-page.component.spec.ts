import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberProfilePageComponent } from './member-profile-page.component';

describe('MemberProfilePageComponent', () => {
  let component: MemberProfilePageComponent;
  let fixture: ComponentFixture<MemberProfilePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberProfilePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberProfilePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
