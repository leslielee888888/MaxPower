import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusFormatComponent } from './status-format.component';

describe('StatusFormatComponent', () => {
  let component: StatusFormatComponent;
  let fixture: ComponentFixture<StatusFormatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusFormatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusFormatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
