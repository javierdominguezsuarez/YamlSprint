import { Component, Input } from '@angular/core';
import { UserStory } from '../us-form/user-story';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-us-view',
  templateUrl: './us-view.component.html',
  styleUrls: ['./us-view.component.scss']
})
export class UsViewComponent {

  @Input() us: UserStory | undefined

  constructor(public dialogRef: MatDialogRef<UsViewComponent>){}
  
  closeDialog(){
    this.dialogRef.close()
  }

}
