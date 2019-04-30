import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LbAdminAddGameParticipantComponent } from './lb-admin-add-game-participant.component';

describe('LbAdminAddGameParticipantComponent', () => {
  let component: LbAdminAddGameParticipantComponent;
  let fixture: ComponentFixture<LbAdminAddGameParticipantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LbAdminAddGameParticipantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LbAdminAddGameParticipantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
