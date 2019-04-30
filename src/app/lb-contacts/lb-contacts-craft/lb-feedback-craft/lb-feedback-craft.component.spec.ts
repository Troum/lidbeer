import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LbFeedbackCraftComponent } from './lb-feedback-craft.component';

describe('LbFeedbackCraftComponent', () => {
  let component: LbFeedbackCraftComponent;
  let fixture: ComponentFixture<LbFeedbackCraftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LbFeedbackCraftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LbFeedbackCraftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
