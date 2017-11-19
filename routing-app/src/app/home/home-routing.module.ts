import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';

// // Success Routes of not lazy load
// const homeRoutes: Routes = [
//   { path: 'home', component: HomeComponent },
// ];

// lazy load
const homeRoutes: Routes = [
  { path: '', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forChild(homeRoutes)],
  exports: [RouterModule],

})
export class HomeRoutingModule {}
