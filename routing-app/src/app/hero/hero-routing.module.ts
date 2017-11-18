import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HeroDetailComponent  } from './hero-detail.component';

// Success Routes of not lazy load
const heroRoutes: Routes = [
  { path: 'hero', component: HeroDetailComponent },
];

// { path:'home', loadChildren:'app/home/home.module#HomeModule' }

@NgModule({
  imports: [RouterModule.forChild(heroRoutes)],
  exports: [RouterModule],
})
export class HeroRoutingModule {}
