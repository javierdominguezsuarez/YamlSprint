import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material/dialog';
import { UsFormComponent } from '../us-form/us-form.component';
import { UserStory } from '../us-form/user-story';
@Component({
  selector: 'app-scrum-board',
  templateUrl: './scrum-board.component.html',
  styleUrls: ['./scrum-board.component.scss']
})
export class ScrumBoardComponent {
  todo: UserStory[] = [
    {
      id: 'US001',
      name: 'User registration',
      description: 'As a new user, I want to register on the website so that I can access all its features.',
      subtasks: [
        'Create registration form',
        'Implement back-end validation',
        'Store user information in the database'
      ],
      acceptanceCriteria: [
        'User can successfully register',
        'User receives confirmation email'
      ],
      owner: 'Product Owner',
      estimation: '3'
    },
    {
      id: 'US002',
      name: 'User login',
      description: 'As a registered user, I want to login to the website so that I can access my account.',
      subtasks: [
        'Create login form',
        'Implement back-end validation'
      ],
      acceptanceCriteria: [
        'User can successfully login',
        'User is redirected to their dashboard'
      ],
      owner: 'Product Owner',
      estimation: '2'
    }]

  progress: UserStory[] = [
    {
      id: 'US003',
      name: 'User profile',
      description: 'As a user, I want to edit my profile information so that it is up-to-date.',
      subtasks: [
        'Create profile page',
        'Implement edit functionality',
        'Store updated user information in the database'
      ],
      acceptanceCriteria: [
        'User can successfully edit their profile information',
        'Updated information is saved to the database'
      ],
      owner: 'Product Owner',
      estimation: '5'
    }
  ]

  done: UserStory[] = [{
    id: 'US004',
    name: 'Search functionality',
    description: 'As a user, I want to search for specific content on the website.',
    subtasks: [
      'Implement search bar',
      'Implement search functionality',
      'Display search results'
    ],
    acceptanceCriteria: [
      'User can enter search terms in the search bar',
      'Relevant search results are displayed'
    ],
    owner: 'Product Owner',
    estimation: '8'
  },
  {
    id: 'US005',
    name: 'Add to cart',
    description: 'As a user, I want to add items to my cart so that I can purchase them.',
    subtasks: [
      'Create shopping cart',
      'Implement add to cart functionality',
      'Store cart information in the database'
    ],
    acceptanceCriteria: [
      'User can successfully add items to their cart',
      'Cart information is saved to the database'
    ],
    owner: 'Product Owner',
    estimation: '3'
  },
  {
    id: 'US006',
    name: 'Checkout',
    description: 'As a user, I want to checkout and purchase the items in my cart.',
    subtasks: [
      'Create checkout page',
      'Implement payment processing',
      'Update inventory levels'
    ],
    acceptanceCriteria: [
      'User can successfully complete checkout process',
      'Payment is processed correctly',
      'Inventory levels are updated'
    ],
    owner: 'Product Owner',
    estimation: '8'
  }]










  constructor(private dialog: MatDialog) { }

  drop(event: CdkDragDrop<UserStory[]>) {
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
  openUsForm(board: string) {
    const dialogRef = this.dialog.open(UsFormComponent);

    dialogRef.componentInstance.addEvent.subscribe((us: UserStory) => {
      console.log('The dialog was closed');
      console.log('UserStory object:', us);
      if (us) {
        if (board === "first") {
          this.todo.push(us)
        }
        if (board === "second") {
          this.progress.push(us)
        }
        if (board === "third") {
          this.done.push(us)
        }
      }
      dialogRef.close();
    })


  }
}
