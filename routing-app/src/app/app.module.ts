import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// import { HomeModule } from './home/home.module';
import { CrisisListComponent } from './crisis-list.component';
import {HeroDetailComponent  } from './hero-detail.component';
import { PageNotFoundComponent } from './page-not-found.component';



@NgModule({
  // declarations: [AppComponent],
  // imports: [BrowserModule, HomeModule, RouterModule],
  declarations: [AppComponent, CrisisListComponent, HeroDetailComponent, PageNotFoundComponent ],
  imports: [BrowserModule, AppRoutingModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
