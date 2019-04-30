import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LbAdminComponent } from './lb-admin.component';

describe('LbAdminComponent', () => {
  let component: LbAdminComponent;
  let fixture: ComponentFixture<LbAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LbAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LbAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
