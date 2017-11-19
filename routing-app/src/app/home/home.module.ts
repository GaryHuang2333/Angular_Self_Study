import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './home/home.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  // imports: [BrowserModule, HomeRoutingModule],
  imports: [HomeRoutingModule],
  declarations: [HomeComponent],
})
export class HomeModule {}
