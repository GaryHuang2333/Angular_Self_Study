import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import {HomeModule} from './home/home.module';
import { CrisisListComponent } from './crisis-list.component';
import {HeroDetailComponent  } from './hero-detail.component';
import { PageNotFoundComponent } from './page-not-found.component';


// const appRoutes: Routes = [
//   {path: 'home', loadChildren: 'app/home/home.module#HomeModule'},
// ];

// Success Routes of not lazy load
const appRoutes: Routes = [
  { path: 'crisis-center', component: CrisisListComponent },
  { path: 'hero',      component: HeroDetailComponent },
  { path: '', redirectTo: '/hero', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent }
];

// { path:'home', loadChildren:'app/home/home.module#HomeModule' }

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
