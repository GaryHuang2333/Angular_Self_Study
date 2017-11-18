import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found.component';

// Success Routes of not lazy load
const appRoutes: Routes = [
  { path: '', redirectTo: '/hero', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent }
];

// { path:'home', loadChildren:'app/home/home.module#HomeModule' }

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
