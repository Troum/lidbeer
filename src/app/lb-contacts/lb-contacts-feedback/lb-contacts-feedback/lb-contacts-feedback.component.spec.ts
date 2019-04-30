import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LbContactsFeedbackComponent } from './lb-contacts-feedback.component';

describe('LbContactsFeedbackComponent', () => {
  let component: LbContactsFeedbackComponent;
  let fixture: ComponentFixture<LbContactsFeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LbContactsFeedbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LbContactsFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
