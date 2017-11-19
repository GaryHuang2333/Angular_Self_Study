import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageComponent  } from './page.component';

// // Success Routes of not lazy load
// const pageRoutes: Routes = [
//   { path: 'page', component: PageComponent },
// ];

// lazy load
const pageRoutes: Routes = [
  { path: '', component: PageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(pageRoutes)],
  exports: [RouterModule],
})
export class PageRoutingModule {}
