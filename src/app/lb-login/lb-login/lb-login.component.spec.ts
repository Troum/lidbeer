import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LbLoginComponent } from './lb-login.component';

describe('LbLoginComponent', () => {
  let component: LbLoginComponent;
  let fixture: ComponentFixture<LbLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LbLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LbLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
