import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HouseComponent } from './home/house.component';
import { GardenComponent} from './home/garden.component';
import { OfficeComponent } from './home/office.component';
// // Success Routes of not lazy load
// const homeRoutes: Routes = [
//   { path: 'home', component: HomeComponent },
// ];

// lazy load
const homeRoutes: Routes = [
  { path: '', component: HomeComponent,
    // children: [
    //   { path: ''},
    //   { path: 'offfice', component: OfficeComponent},

    // ]
  },
  // { path: 'house', component: HouseComponent},
  // { path: 'office', component: OfficeComponent},
  // { path: 'garden', component: GardenComponent},
];

@NgModule({
  imports: [RouterModule.forChild(homeRoutes)],
  exports: [RouterModule],

})
export class HomeRoutingModule {}
