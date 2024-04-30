import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyEducationComponent } from './education/my-education/my-education.component';

const routes: Routes = [
  {   path: 'education', children :[
    { path: 'dashboard', component: MyEducationComponent}
]   },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
