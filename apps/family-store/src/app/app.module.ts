import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideRouter, RouterModule } from '@angular/router';
import { userRoutes } from '@family-store/user';
import { MainNavComponent } from './main-nav/main-nav.component';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule, BrowserAnimationsModule, RouterModule, MainNavComponent],
  providers: [provideRouter(userRoutes)],
  bootstrap: [AppComponent],
})
export class AppModule {}
