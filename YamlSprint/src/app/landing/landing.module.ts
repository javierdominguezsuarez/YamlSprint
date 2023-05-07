import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PricingComponent } from './pricing/pricing.component';
import { FeaturesComponent } from './features/features.component';
import { AboutUsComponent } from './about-us/about-us.component';



@NgModule({
  declarations: [
    PricingComponent,
    FeaturesComponent,
    AboutUsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LandingModule { }
