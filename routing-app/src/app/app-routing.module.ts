import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found.component';
import { PageModule } from '../page/page.module';
// // Success Routes of not lazy load
// const appRoutes: Routes = [
//   { path: '', redirectTo: 'hero', pathMatch: 'full'},
//   { path: 'xxx', component: PageNotFoundComponent }
// ];

// // Success lazy load
// const appRoutes: Routes = [
//   { path: '', redirectTo: 'hero', pathMatch: 'full'},
//   { path: 'hero', loadChildren: './hero/heroes.module#HeroModule' },
//   { path: 'crisis', loadChildren: 'app/crisis/crisis.module#CrisisModule' },
//   { path: 'home', loadChildren: 'app/home/home.module#HomeModule' },
//   { path: 'page', loadChildren: '../page/page.module#PageModule' },
//   { path: 'xxx', component: PageNotFoundComponent },
// ];

// Mix loading
const appRoutes: Routes = [
  // { path: '', redirectTo: 'hero', pathMatch: 'full'},
  { path: 'hero', loadChildren: './hero/heroes.module#HeroModule' },
  { path: 'crisis', loadChildren: 'app/crisis/crisis.module#CrisisModule' },
  { path: 'home', loadChildren: 'app/home/home.module#HomeModule' },
  // { path: 'page', component: PageModule  },
  { path: 'page', loadChildren: '../page/page.module#PageModule' },
  { path: 'xxx', component: PageNotFoundComponent },
];

@NgModule ({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
