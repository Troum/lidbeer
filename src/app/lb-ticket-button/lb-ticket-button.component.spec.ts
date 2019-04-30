import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LbTicketButtonComponent } from './lb-ticket-button.component';

describe('LbTicketButtonComponent', () => {
  let component: LbTicketButtonComponent;
  let fixture: ComponentFixture<LbTicketButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LbTicketButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LbTicketButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
