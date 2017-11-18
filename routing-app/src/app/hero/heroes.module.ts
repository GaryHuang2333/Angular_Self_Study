import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
import { HeroRoutingModule } from './hero-routing.module';

import { HeroDetailComponent } from './hero-detail.component';

@NgModule({
  declarations: [HeroDetailComponent ],
  imports: [BrowserModule, HeroRoutingModule ],
})
export class HeroModule {}
