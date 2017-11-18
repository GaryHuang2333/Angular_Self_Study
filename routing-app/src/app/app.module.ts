import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// import { HomeModule } from './home/home.module';
import { CrisisListComponent } from './crisis-list.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { HeroModule } from './hero/heroes.module';


@NgModule({
  // declarations: [AppComponent],
  // imports: [BrowserModule, HomeModule, RouterModule],
  declarations: [AppComponent, CrisisListComponent, PageNotFoundComponent ],
  imports: [BrowserModule, HeroModule, AppRoutingModule],
  // 注意，AppRoutingModule是最后一个
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
