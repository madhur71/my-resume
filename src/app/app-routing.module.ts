import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyEducationComponent } from './education/my-education/my-education.component';
import { AboutComponent } from './education/about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectComponent } from './project/project.component';

const routes: Routes = [
  {   path: 'education', children :[
    { path: 'dashboard', component: MyEducationComponent},
    { path: 'About', component: AboutComponent},
    { path: 'skills', component: SkillsComponent},
    { path: 'project', component: ProjectComponent}
]   },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
