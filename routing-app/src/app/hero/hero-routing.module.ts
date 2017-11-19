import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HeroDetailComponent  } from './hero-detail.component';

// // Success Routes of not lazy load
// const heroRoutes: Routes = [
//   { path: 'hero', component: HeroDetailComponent },
// ];

// Success lazy load
const heroRoutes: Routes = [
  { path: '', component: HeroDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(heroRoutes)],
  exports: [RouterModule],
})
export class HeroRoutingModule {}
