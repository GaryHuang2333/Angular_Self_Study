// import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
import { PageRoutingModule } from './page-routing.module';

import { PageComponent } from './page.component';

@NgModule({
  declarations: [PageComponent ],
  // imports: [BrowserModule, PageRoutingModule ],
  imports: [PageRoutingModule ],
})
export class PageModule {}
