import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventNoteEditComponent } from './event-note-edit.component';

describe('EventNoteEditComponent', () => {
  let component: EventNoteEditComponent;
  let fixture: ComponentFixture<EventNoteEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventNoteEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventNoteEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
