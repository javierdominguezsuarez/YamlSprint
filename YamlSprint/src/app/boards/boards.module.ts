import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrumBoardComponent } from './scrum-board/scrum-board.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { UsFormComponent } from './us-form/us-form.component'
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    ScrumBoardComponent,
    UsFormComponent
  ],
  imports: [
    CommonModule,
    DragDropModule,
    ReactiveFormsModule,
    MatDialogModule
  ]
})
export class BoardsModule { }
