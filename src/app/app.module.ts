import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EducationRoutingModule } from './education/education-routing.module';
import { EducationModule } from './education/education.module';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EducationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
