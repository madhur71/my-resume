import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyEducationComponent } from './my-education/my-education.component';

const routes: Routes = [
  {   path: 'education',   component: MyEducationComponent   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EducationRoutingModule { }
 