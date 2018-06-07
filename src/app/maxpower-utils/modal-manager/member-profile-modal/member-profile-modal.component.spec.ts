import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberProfileModalComponent } from './member-profile-modal.component';

describe('MemberProfileModalComponent', () => {
  let component: MemberProfileModalComponent;
  let fixture: ComponentFixture<MemberProfileModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberProfileModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberProfileModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
