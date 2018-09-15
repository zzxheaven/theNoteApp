import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventNotesComponent } from './event-notes.component';

describe('EventNotesComponent', () => {
  let component: EventNotesComponent;
  let fixture: ComponentFixture<EventNotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventNotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
