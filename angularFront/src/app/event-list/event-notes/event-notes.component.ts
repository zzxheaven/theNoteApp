import { Component, OnInit } from '@angular/core';
import { EventServiceService } from '../../event-service.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ExcursionEvent } from '../../models/excursion-event.model';
import { EventNote } from '../../models/event-note.model';

@Component({
  selector: 'app-event-notes',
  templateUrl: './event-notes.component.html',
  styleUrls: ['./event-notes.component.css'],
})
export class EventNotesComponent implements OnInit {
  constructor(private eventService: EventServiceService, private route: ActivatedRoute, private router: Router) {}
  id: string;
  excursionEvent: ExcursionEvent;
  ngOnInit() {
    this.route.parent.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.excursionEvent = this.eventService.getExcursionEventById(this.id);
    });
  }

  defaultstr(note: EventNote) {
    if (note.description.length < 20) {
      return note.description;
    } else {
      return note.description.substr(0, 20) + '...';
    }
  }
}
