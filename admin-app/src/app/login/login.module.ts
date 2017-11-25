import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { LoginService } from './login.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    LoginRoutingModule,
  ],
  providers: [
    LoginService,
  ],
  exports: [
    // LoginService,
  ]
})
export class LoginModule { }
