import { EventNote } from './event-note.model';

export class ExcursionEvent {
  constructor(
    public id: string,
    public subject: string,
    public eventDateTime: Date,
    public location: string,
    public eventNotes: EventNote[]
  ) {}
}
