import { Component, OnInit } from '@angular/core';
import { EventServiceService } from '../../event-service.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css'],
})
export class EventComponent implements OnInit {
  constructor(private eventService: EventServiceService, private route: ActivatedRoute, private router: Router) {}
  id: string;
  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
    });
  }

  onNotesClick() {
    this.router.navigate(['notes'], { relativeTo: this.route });
  }

  onEditClick() {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }
}
