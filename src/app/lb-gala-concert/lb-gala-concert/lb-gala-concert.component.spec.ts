import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LbGalaConcertComponent } from './lb-gala-concert.component';

describe('LbGalaConcertComponent', () => {
  let component: LbGalaConcertComponent;
  let fixture: ComponentFixture<LbGalaConcertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LbGalaConcertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LbGalaConcertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
