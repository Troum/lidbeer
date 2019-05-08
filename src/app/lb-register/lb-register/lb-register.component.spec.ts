import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LbRegisterComponent } from './lb-register.component';

describe('LbRegisterComponent', () => {
  let component: LbRegisterComponent;
  let fixture: ComponentFixture<LbRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LbRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LbRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
