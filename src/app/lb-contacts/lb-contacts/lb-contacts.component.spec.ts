import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LbContactsComponent } from './lb-contacts.component';

describe('LbContactsComponent', () => {
  let component: LbContactsComponent;
  let fixture: ComponentFixture<LbContactsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LbContactsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LbContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
