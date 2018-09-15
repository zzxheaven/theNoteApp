import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventListComponent } from './event-list/event-list.component';
import { EventEditComponent } from './event-list/event-edit/event-edit.component';
import { EventComponent } from './event-list/event/event.component';
import { EventNotesComponent } from './event-list/event-notes/event-notes.component';
import { EventNoteEditComponent } from './event-list/event-notes/event-note-edit/event-note-edit.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/event-list', pathMatch: 'full' },
  { path: 'event-list', component: EventListComponent },
  {
    path: 'event/:id',
    component: EventComponent,
    children: [
      { path: '', component: EventNotesComponent },
      { path: 'edit', component: EventEditComponent },
      { path: 'notes', component: EventNotesComponent, pathMatch: 'full' },
      { path: 'note-edit/:noteid', component: EventNoteEditComponent, pathMatch: 'full' },
    ],
  },
  { path: 'event/new', component: EventEditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
