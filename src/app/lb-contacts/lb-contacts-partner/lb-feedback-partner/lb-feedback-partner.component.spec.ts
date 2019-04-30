import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LbFeedbackPartnerComponent } from './lb-feedback-partner.component';

describe('LbFeedbackPartnerComponent', () => {
  let component: LbFeedbackPartnerComponent;
  let fixture: ComponentFixture<LbFeedbackPartnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LbFeedbackPartnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LbFeedbackPartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
