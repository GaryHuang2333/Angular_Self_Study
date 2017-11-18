import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrisisListComponent  } from './crisis/crisis-list.component';

// // Success Routes of not lazy load
// const crisisRoutes: Routes = [
//   { path: 'crisis-center', component: CrisisListComponent },
// ];

// lazy load
const crisisRoutes: Routes = [
  { path: '', component: CrisisListComponent },
];

// { path:'home', loadChildren:'app/home/home.module#HomeModule' }

@NgModule({
  imports: [RouterModule.forChild(crisisRoutes)],
  exports: [RouterModule],
})
export class CrisisRoutingModule {}
