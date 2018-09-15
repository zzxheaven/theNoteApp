import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ExcursionEvent } from '../../models/excursion-event.model';
import { EventServiceService } from '../../event-service.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-event-edit',
  templateUrl: './event-edit.component.html',
  styleUrls: ['./event-edit.component.css'],
})
export class EventEditComponent implements OnInit, OnDestroy {
  @ViewChild('f')
  eventForm: NgForm;
  editMode = true;
  id: string;
  excursionEvent: ExcursionEvent;
  constructor(private route: ActivatedRoute, private eventService: EventServiceService) {}

  ngOnInit() {
    this.route.parent.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.editMode = params['id'] != null;
      if (this.editMode) {
        this.excursionEvent = this.eventService.getExcursionEventById(this.id);
      } else {
        this.excursionEvent = new ExcursionEvent('', '', new Date(), '', []);
      }
    });
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const excursionEvent = new ExcursionEvent(value.id, value.subject, value.eventDateTime, value.location, []);

    if (this.editMode) {
      this.eventService.updateExcursionEvent(excursionEvent);
    } else {
      this.eventService.addExcursionEvent(excursionEvent);
    }
    this.editMode = false;
    form.reset();
  }

  onClear() {
    this.eventForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.eventForm.reset();
    this.editMode = false;
    this.eventService.deleteExcursionEventById(this.excursionEvent.id);
  }

  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }
}
