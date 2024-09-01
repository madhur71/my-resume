import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EducationRoutingModule } from './education-routing.module';
import { MyEducationComponent } from './my-education/my-education.component';
import { MatTableModule } from '@angular/material/table';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    MyEducationComponent,
    AboutComponent
  ],
  imports: [
    MatTableModule,
    CommonModule,
    EducationRoutingModule
  ]
})
export class EducationModule { }
