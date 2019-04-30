import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LbFooterComponent } from './lb-footer.component';

describe('LbFooterComponent', () => {
  let component: LbFooterComponent;
  let fixture: ComponentFixture<LbFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LbFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LbFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
