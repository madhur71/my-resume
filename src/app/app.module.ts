import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EducationRoutingModule } from './education/education-routing.module';
import { EducationModule } from './education/education.module';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    MatSlideToggleModule,
    BrowserModule,
    AppRoutingModule,
    EducationModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
