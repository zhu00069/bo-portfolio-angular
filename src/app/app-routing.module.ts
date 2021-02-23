import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from  './header/header.component';
import { FooterComponent } from  './footer/footer.component';
import { MyIntroductionComponent } from  './my-introduction/my-introduction.component';
import { MyEducationSkillsComponent } from  './my-education-skills/my-education-skills.component';
import { MyExperienceComponent } from  './my-experience/my-experience.component';
import { MyProjectsComponent } from  './my-projects/my-projects.component';
import { MyHobbiesComponent } from  './my-hobbies/my-hobbies.component';
import { MyContactComponent } from  './my-contact/my-contact.component';

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
{
  path: 'MyContact',
  component: MyContactComponent
},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
