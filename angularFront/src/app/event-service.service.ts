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
    new ExcursionEvent('1', 'Company Lunch', new Date(), 'Dedham office', [
      new EventNote('1', 'Company Lunch'),
      new EventNote('2', 'Everyone Come'),
    ]),
    new ExcursionEvent('2', 'Excursion White Mountain', new Date(), 'White Mountain', [
      new EventNote('3', 'White Mountain'),
      new EventNote('4', 'Need at least 3 people'),
    ]),
  ];

  constructor() {}

  getExcursionEventById(id: string) {
    return this.excursionEvents.find(e => e.id === id);
  }

  getExcursionEvents() {
    return this.excursionEvents;
  }

  addExcursionEvent(e: ExcursionEvent) {
    this.excursionEvents.push(e);
    this.excursionEventChanged.next(this.excursionEvents);
  }

  updateExcursionEvent(e: ExcursionEvent) {
    const existEvent = this.getExcursionEventById(e.id);
    existEvent.eventDateTime = e.eventDateTime;
    existEvent.location = e.location;
    existEvent.subject = e.subject;
    this.excursionEventChanged.next(this.excursionEvents);
  }

  deleteExcursionEventById(id: string) {
    this.excursionEvents.splice(this.excursionEvents.findIndex(e => e.id === id), 1);
  }

  addNote(eventId: string, description: string) {
    const e = this.getExcursionEventById(eventId);
    e.eventNotes.push(new EventNote('100', description));
  }
}
