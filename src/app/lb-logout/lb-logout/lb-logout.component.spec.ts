import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LbLogoutComponent } from './lb-logout.component';

describe('LbLogoutComponent', () => {
  let component: LbLogoutComponent;
  let fixture: ComponentFixture<LbLogoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LbLogoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LbLogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
