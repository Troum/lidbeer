import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LbFeedbackGameComponent } from './lb-feedback-game.component';

describe('LbFeedbackGameComponent', () => {
  let component: LbFeedbackGameComponent;
  let fixture: ComponentFixture<LbFeedbackGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LbFeedbackGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LbFeedbackGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
