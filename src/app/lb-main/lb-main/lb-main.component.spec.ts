import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LbMainComponent } from './lb-main.component';

describe('LbMainComponent', () => {
  let component: LbMainComponent;
  let fixture: ComponentFixture<LbMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LbMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LbMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
