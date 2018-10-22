import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { LandingPageRouting } from "./landing-page/landing-page.routing";
import { LandingPageModule } from "./landing-page/landing-page.module";
import { NgModule, LOCALE_ID } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    BrowserModule,
    LandingPageRouting,
    LandingPageModule,
    RouterModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [ 
    { provide: LOCALE_ID, useValue: 'en-US' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }