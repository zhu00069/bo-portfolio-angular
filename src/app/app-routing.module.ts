import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyIntroductionComponent } from  './my-introduction/my-introduction.component';
import { MyEducationSkillsComponent } from  './my-education-skills/my-education-skills.component';
import { MyExperienceComponent } from  './my-experience/my-experience.component';
import { MyProjectsComponent } from  './my-projects/my-projects.component';
import { MyHobbiesComponent } from  './my-hobbies/my-hobbies.component';

const routes: Routes = [
  {
    path: 'MyIntroduction',
    component: MyIntroductionComponent
  },
{
  path: 'MyEducationSkills',
  component: MyEducationSkillsComponent
},
{
  path: 'MyExperience',
  component: MyExperienceComponent
},
{
  path: 'MyProjects',
  component: MyProjectsComponent
},
{
  path: 'MyHobbies',
  component: MyHobbiesComponent
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
