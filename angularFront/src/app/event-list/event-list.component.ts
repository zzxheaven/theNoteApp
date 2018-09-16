import { Component, OnInit, OnDestroy } from '@angular/core';
import { ExcursionEvent } from '../models/excursion-event.model';
import { EventServiceService } from '../event-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css'],
})
export class EventListComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  excursionEvents: ExcursionEvent[];
  constructor(private eventService: EventServiceService) {}

  ngOnInit() {
    this.excursionEvents = this.eventService.getExcursionEvents();
    this.subscription = this.eventService.excursionEventChanged.subscribe(excursionEvents => {
      this.excursionEvents = excursionEvents;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
