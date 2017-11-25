import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
// import { AccordionModule, TabViewModule } from 'primeng/primeng';
// import { MenuItem } from 'primeng/primeng';

import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';

import { HttpModule } from '@angular/http';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    // CommonModule,
    // TabViewModule,
    // HomeModule,
    // LoginModule,
    // AppRoutingModule,
    LoginModule,
    HomeModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
