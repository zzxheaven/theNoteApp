import { Component, OnInit } from '@angular/core';
import { ExcursionEvent } from '../models/excursion-event.model';
import { EventServiceService } from '../event-service.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css'],
})
export class EventListComponent implements OnInit {
  excursionEvents: ExcursionEvent[];
  constructor(private eventService: EventServiceService) {}

  ngOnInit() {
    this.excursionEvents = this.eventService.getExcursionEvents();

  }
}
