import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MiscComponent } from './misc.component';

const MiscRoutes: Routes = [
  {path: '', component : MiscComponent, pathMatch: 'full'},
];

@NgModule({
  declarations: [
    MiscComponent,
  ],
  imports: [
    RouterModule.forChild(MiscRoutes),
  ],
  providers: [],
})
export class MiscModule { }
