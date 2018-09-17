import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ExcursionEvent } from '../../models/excursion-event.model';
import { EventServiceService } from '../../event-service.service';
import { NgForm } from '@angular/forms';
import { EventNote } from '../../models/event-note.model';

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
  myDate = new Date();
  constructor(private route: ActivatedRoute, private router: Router, private eventService: EventServiceService) {}

  ngOnInit() {
    this.route.parent.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.editMode = params['id'] != null;
      if (this.editMode) {
        this.excursionEvent = this.eventService.getExcursionEventById(this.id);
      } else {
        this.id = this.eventService.guid();
        this.excursionEvent = new ExcursionEvent(this.id, '', new Date(), '', []);
      }
    });
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const excursionEvent = new ExcursionEvent(this.id, value.subject, value.eventDateTime, value.location, []);

    if (this.editMode) {
      this.eventService.updateExcursionEvent(excursionEvent);
      this.router.navigate(['/event', this.id, 'notes']);
    } else {
      this.eventService.addExcursionEvent(excursionEvent);
      this.router.navigate(['/']);
    }
    // this.editMode = false;
    // form.reset();
  }

  onClear() {
    this.eventForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.eventForm.reset();
    this.editMode = false;
    this.eventService.deleteExcursionEventById(this.excursionEvent.id);
    this.router.navigate(['/']);
  }

  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }
}
