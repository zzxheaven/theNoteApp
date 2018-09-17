import { Injectable } from '@angular/core';
import { ExcursionEvent } from './models/excursion-event.model';
import { EventNote } from './models/event-note.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EventServiceService {
  excursionEventChanged = new Subject<ExcursionEvent[]>();
  excursionEvents: ExcursionEvent[] = [
    new ExcursionEvent(this.guid(), 'Company Lunch', new Date(), 'Dedham office', [
      new EventNote(this.guid(), 'Company Lunch', new Date()),
      new EventNote(this.guid(), 'Everyone Come', new Date()),
    ]),
    new ExcursionEvent(this.guid(), 'Excursion White Mountain', new Date(), 'White Mountain', [
      new EventNote(this.guid(), 'White Mountain', new Date()),
      new EventNote(this.guid(), 'Need at least 3 people', new Date()),
    ]),
  ];

  constructor() {}

  getExcursionEventById(id: string) {
    return this.excursionEvents.find(e => e.id === id);
  }

  getExcursionEvents() {
    return this.excursionEvents.slice();
  }

  addExcursionEvent(e: ExcursionEvent) {
    this.excursionEvents.push(e);
    this.excursionEventChanged.next(this.getExcursionEvents());
  }

  updateExcursionEvent(e: ExcursionEvent) {
    const existEvent = this.getExcursionEventById(e.id);
    existEvent.eventDateTime = e.eventDateTime;
    existEvent.location = e.location;
    existEvent.subject = e.subject;
    this.excursionEventChanged.next(this.getExcursionEvents());
  }

  deleteExcursionEventById(id: string) {
    this.excursionEvents.splice(this.excursionEvents.findIndex(e => e.id === id), 1);
  }

  addNote(eventId: string, description: string) {
    const e = this.getExcursionEventById(eventId);
    e.eventNotes.push(new EventNote('100', description, new Date()));
    this.excursionEventChanged.next(this.getExcursionEvents());
  }

  getNote(eventId: string, noteId: string) {
    const excursionEvent = this.getExcursionEventById(eventId);
    return excursionEvent.eventNotes.find(e => e.id === noteId);
  }

  updateNote(eventId: string, noteId: string, description: string) {
    const note = this.getNote(eventId, noteId);
    note.description = description;
    note.createdAt = new Date();
    this.excursionEventChanged.next(this.getExcursionEvents());
  }

  guid() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
  }
}
