import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EventServiceService } from '../../../event-service.service';
import { EventNote } from '../../../models/event-note.model';

@Component({
  selector: 'app-event-note-edit',
  templateUrl: './event-note-edit.component.html',
  styleUrls: ['./event-note-edit.component.css'],
})
export class EventNoteEditComponent implements OnInit {
  @Input()
  eventId: string;


  note: EventNote;

  // editMode = false;
  constructor(private eventService: EventServiceService) {}

  ngOnInit() {
    // this.note = this.eventService.getNote(this.eventId, this.noteId);
    // this.eventService.excursionEventChanged.subscribe(events => {
    //   this.note = this.eventService.getNote(this.eventId, this.noteId);
    // });
  }

  // onChangeToUpdate() {
  //   this.editMode = true;
  // }

  onSubmit(form: NgForm) {
    const value = form.value;
    const eventDescription = value.description;
    this.eventService.addNote(this.eventId, eventDescription);
    form.reset();
  }
}
