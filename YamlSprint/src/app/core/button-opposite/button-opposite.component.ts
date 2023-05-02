import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-opposite',
  templateUrl: './button-opposite.component.html',
  styleUrls: ['./button-opposite.component.scss']
})
export class ButtonOppositeComponent {
  @Input() word: string | undefined
}
