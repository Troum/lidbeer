import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LbAboutComponent } from './lb-about.component';

describe('LbAboutComponent', () => {
  let component: LbAboutComponent;
  let fixture: ComponentFixture<LbAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LbAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LbAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
