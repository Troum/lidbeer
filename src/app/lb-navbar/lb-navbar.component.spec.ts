import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LbNavbarComponent } from './lb-navbar.component';

describe('LbNavbarComponent', () => {
  let component: LbNavbarComponent;
  let fixture: ComponentFixture<LbNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LbNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LbNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
