import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LbPhoneComponent } from './lb-phone.component';

describe('LbPhoneComponent', () => {
  let component: LbPhoneComponent;
  let fixture: ComponentFixture<LbPhoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LbPhoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LbPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
