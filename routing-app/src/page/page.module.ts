// import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
import { PageRoutingModule } from './page-routing.module';

import { PageComponent } from './page.component';
import { ContentComponent } from './content/content.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [PageComponent, ContentComponent, LoginComponent ],
  // imports: [BrowserModule, PageRoutingModule ],
  imports: [PageRoutingModule ],
})
export class PageModule {}
