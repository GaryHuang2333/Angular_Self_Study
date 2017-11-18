import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeModule} from './home/home.module';

const appRoutes: Routes = [
  {path: 'home', loadChildren: 'app/home/home.module#HomeModule'},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
