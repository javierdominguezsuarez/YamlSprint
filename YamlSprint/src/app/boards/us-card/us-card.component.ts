import { Component, Input } from '@angular/core';
import { UserStory } from '../us-form/user-story';
import { UsViewComponent } from '../us-view/us-view.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-us-card',
  templateUrl: './us-card.component.html',
  styleUrls: ['./us-card.component.scss']
})
export class UsCardComponent {
  @Input()
  userStory!: UserStory;  

  constructor(private dialog: MatDialog) { }
  

  openUsView(us : UserStory ){
    const dialogRef = this.dialog.open(UsViewComponent)
    dialogRef.componentInstance.us= us
  }

}
