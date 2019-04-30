import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LbFeedbackFoodcortComponent } from './lb-feedback-foodcort.component';

describe('LbFeedbackFoodcortComponent', () => {
  let component: LbFeedbackFoodcortComponent;
  let fixture: ComponentFixture<LbFeedbackFoodcortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LbFeedbackFoodcortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LbFeedbackFoodcortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
