import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { ButtonComponent } from './button/button.component';
import { AboutComponent } from './about/about.component';
import { ButtonOppositeComponent } from './button-opposite/button-opposite.component';



@NgModule({
  declarations: [
    NavComponent,
    ButtonComponent,
    AboutComponent,
    ButtonOppositeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavComponent
  ]
})
export class CoreModule { }
