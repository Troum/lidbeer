import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LbAdminAddCraftParticipantComponent } from './lb-admin-add-craft-participant.component';

describe('LbAdminAddCraftParticipantComponent', () => {
  let component: LbAdminAddCraftParticipantComponent;
  let fixture: ComponentFixture<LbAdminAddCraftParticipantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LbAdminAddCraftParticipantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LbAdminAddCraftParticipantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
