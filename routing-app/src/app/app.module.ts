import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HeroModule } from './hero/heroes.module';
import { PageModule } from '../page/page.module';
import { CrisisModule } from './crisis/crisis.module';
import { HomeModule } from './home/home.module';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found.component';

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent ],
  imports: [BrowserModule, HeroModule, CrisisModule, HomeModule, PageModule, AppRoutingModule],
  // imports: [BrowserModule, AppRoutingModule],
  // 注意，AppRoutingModule是最后一个
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
    // Diagnostic only: inspect router configuration
    constructor(router: Router) {
      console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
    }
}

