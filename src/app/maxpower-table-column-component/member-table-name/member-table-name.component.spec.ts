import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberTableNameComponent } from './member-table-name.component';

describe('MemberTableNameComponent', () => {
  let component: MemberTableNameComponent;
  let fixture: ComponentFixture<MemberTableNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberTableNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberTableNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
