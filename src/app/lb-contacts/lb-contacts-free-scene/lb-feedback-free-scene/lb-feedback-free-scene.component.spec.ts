import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LbFeedbackFreeSceneComponent } from './lb-feedback-free-scene.component';

describe('LbFeedbackFreeSceneComponent', () => {
  let component: LbFeedbackFreeSceneComponent;
  let fixture: ComponentFixture<LbFeedbackFreeSceneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LbFeedbackFreeSceneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LbFeedbackFreeSceneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
