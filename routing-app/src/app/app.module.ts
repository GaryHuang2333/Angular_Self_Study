import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HomeModule, RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
