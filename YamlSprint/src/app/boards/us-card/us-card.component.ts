import { Component, Input } from '@angular/core';
import { UserStory } from '../us-form/user-story';

@Component({
  selector: 'app-us-card',
  templateUrl: './us-card.component.html',
  styleUrls: ['./us-card.component.scss']
})
export class UsCardComponent {
  @Input()
  userStory!: UserStory;  



}
