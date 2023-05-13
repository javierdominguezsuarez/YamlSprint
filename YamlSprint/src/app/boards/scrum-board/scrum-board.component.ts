import { Component } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material/dialog';
import { UsFormComponent } from '../us-form/us-form.component';
@Component({
  selector: 'app-scrum-board',
  templateUrl: './scrum-board.component.html',
  styleUrls: ['./scrum-board.component.scss']
})
export class ScrumBoardComponent {
  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];
  progress = ['Brush teeth']
  done = ['Get up', 'Take a shower', 'Check e-mail', 'Walk dog'];

  constructor(private dialog: MatDialog) { }
  
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
  openUsForm() {
    const dialogRef = this.dialog.open(UsFormComponent);
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
