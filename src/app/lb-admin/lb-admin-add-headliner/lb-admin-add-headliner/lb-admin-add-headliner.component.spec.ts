import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LbAdminAddHeadlinerComponent } from './lb-admin-add-headliner.component';

describe('LbAdminAddHeadlinerComponent', () => {
  let component: LbAdminAddHeadlinerComponent;
  let fixture: ComponentFixture<LbAdminAddHeadlinerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LbAdminAddHeadlinerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LbAdminAddHeadlinerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
