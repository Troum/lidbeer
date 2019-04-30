import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LbAdminAddFreeSceneComponent } from './lb-admin-add-free-scene.component';

describe('LbAdminAddFreeSceneComponent', () => {
  let component: LbAdminAddFreeSceneComponent;
  let fixture: ComponentFixture<LbAdminAddFreeSceneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LbAdminAddFreeSceneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LbAdminAddFreeSceneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
