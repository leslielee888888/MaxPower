import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MaxpowerContactComponent } from './maxpower-contact.component';


describe('MaxpowerContactComponent', () => {
  let component: MaxpowerContactComponent;
  let fixture: ComponentFixture<MaxpowerContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaxpowerContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaxpowerContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
