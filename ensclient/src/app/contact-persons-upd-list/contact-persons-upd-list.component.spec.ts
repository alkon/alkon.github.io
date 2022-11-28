import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactPersonsUpdListComponent } from './contact-persons-upd-list.component';

describe('ContactPersonsUpdListComponent', () => {
  let component: ContactPersonsUpdListComponent;
  let fixture: ComponentFixture<ContactPersonsUpdListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactPersonsUpdListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactPersonsUpdListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
