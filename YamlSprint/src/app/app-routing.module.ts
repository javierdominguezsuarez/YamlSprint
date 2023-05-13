import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './core/about/about.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { PricingComponent } from './landing/pricing/pricing.component';
import { FeaturesComponent } from './landing/features/features.component';
import { AboutUsComponent } from './landing/about-us/about-us.component';
import { ScrumBoardComponent } from './boards/scrum-board/scrum-board.component';

const routes: Routes = [
  { path: '', component : AboutComponent },
  { path: 'login', component : LoginComponent },
  { path: 'register', component : RegisterComponent },
  { path: 'pricing', component: PricingComponent },
  { path: 'features', component: FeaturesComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'demo', component: ScrumBoardComponent },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
