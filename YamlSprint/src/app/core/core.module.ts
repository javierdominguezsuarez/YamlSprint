import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { ButtonComponent } from './button/button.component';
import { AboutComponent } from './about/about.component';
import { ButtonOppositeComponent } from './button-opposite/button-opposite.component';
import { RouterModule } from '@angular/router';
import { NavHorizontalComponent } from './nav-horizontal/nav-horizontal.component';



@NgModule({
  declarations: [
    NavComponent,
    ButtonComponent,
    AboutComponent,
    ButtonOppositeComponent,
    NavHorizontalComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavComponent,
    ButtonComponent,
    AboutComponent,
    ButtonOppositeComponent,
    NavHorizontalComponent
  ]
})
export class CoreModule { }
