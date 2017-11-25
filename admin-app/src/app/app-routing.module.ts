import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  // {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', loadChildren: 'app/login/login.module#LoginModule'},
  {path: 'home', loadChildren: 'app/home/home.module#HomeModule'},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: '**', redirectTo: '/login', },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
