import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrumBoardComponent } from './scrum-board/scrum-board.component';
import { DragDropModule } from '@angular/cdk/drag-drop'


@NgModule({
  declarations: [
    ScrumBoardComponent
  ],
  imports: [
    CommonModule,
    DragDropModule
  ]
})
export class BoardsModule { }
