import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';

const homeRoutes: Routes = [
  { path: 'home', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(homeRoutes)],
  exports: [RouterModule],

})
export class HomeRoutingModule {}
