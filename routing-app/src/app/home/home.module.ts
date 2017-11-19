import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { HouseComponent } from './home/house.component';
import { GardenComponent} from './home/garden.component';
import { OfficeComponent } from './home/office.component';

@NgModule({
  // imports: [BrowserModule, HomeRoutingModule],
  imports: [HomeRoutingModule],
  declarations: [HomeComponent, GardenComponent, OfficeComponent],
  // declarations: [HomeComponent],
})
export class HomeModule {}
