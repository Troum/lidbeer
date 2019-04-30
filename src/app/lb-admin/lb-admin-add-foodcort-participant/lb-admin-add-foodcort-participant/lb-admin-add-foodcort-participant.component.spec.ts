import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LbAdminAddFoodcortParticipantComponent } from './lb-admin-add-foodcort-participant.component';

describe('LbAdminAddFoodcortParticipantComponent', () => {
  let component: LbAdminAddFoodcortParticipantComponent;
  let fixture: ComponentFixture<LbAdminAddFoodcortParticipantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LbAdminAddFoodcortParticipantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LbAdminAddFoodcortParticipantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
