import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
import { CrisisRoutingModule } from './crisis-routing.module';

import { CrisisListComponent } from './crisis/crisis-list.component';

@NgModule({
  declarations: [CrisisListComponent ],
  imports: [BrowserModule, CrisisRoutingModule ],
})
export class CrisisModule {}
