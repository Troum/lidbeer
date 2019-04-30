import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LbAdminSidenavComponent } from './lb-admin-sidenav.component';

describe('LbAdminSidenavComponent', () => {
  let component: LbAdminSidenavComponent;
  let fixture: ComponentFixture<LbAdminSidenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LbAdminSidenavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LbAdminSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
