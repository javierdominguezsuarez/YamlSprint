import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrumBoardComponent } from './scrum-board/scrum-board.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { UsFormComponent } from './us-form/us-form.component'
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { UsCardComponent } from './us-card/us-card.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [
    ScrumBoardComponent,
    UsFormComponent,
    UsCardComponent
  ],
  imports: [
    CommonModule,
    DragDropModule,
    ReactiveFormsModule,
    MatDialogModule,
    CoreModule
  ]
})
export class BoardsModule { }
