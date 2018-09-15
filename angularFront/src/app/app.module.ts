import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule }   from '@angular/forms';
// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { EventListComponent } from './event-list/event-list.component';
import { EventNotesComponent } from './event-list/event-notes/event-notes.component';
import { EventNoteEditComponent } from './event-list/event-notes/event-note-edit/event-note-edit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EventEditComponent } from './event-list/event-edit/event-edit.component';

import {
  MatButtonModule,
  MatCheckboxModule,
  MatButtonToggleModule,
  MatBadgeModule,
  MatCardModule,
  MatFormFieldModule,
  MatExpansionModule,
  MatListModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatInputModule
} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { EventComponent } from './event-list/event/event.component';

@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    EventNotesComponent,
    EventNoteEditComponent,
    EventEditComponent,
    EventComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // NgbModule,
    MatCardModule,
    MatExpansionModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatBadgeModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
