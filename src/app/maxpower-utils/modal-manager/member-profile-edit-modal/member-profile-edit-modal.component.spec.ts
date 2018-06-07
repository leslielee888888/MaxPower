import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberProfileEditModalComponent } from './member-profile-edit-modal.component';

describe('MemberProfileEditModalComponent', () => {
  let component: MemberProfileEditModalComponent;
  let fixture: ComponentFixture<MemberProfileEditModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberProfileEditModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberProfileEditModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
