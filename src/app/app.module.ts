import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MyIntroductionComponent } from './my-introduction/my-introduction.component';
import { MyExperienceComponent } from './my-experience/my-experience.component';
import { MyEducationSkillsComponent } from './my-education-skills/my-education-skills.component';
import { MyProjectsComponent } from './my-projects/my-projects.component';
import { MyHobbiesComponent } from './my-hobbies/my-hobbies.component';


@NgModule({
  declarations: [
    AppComponent,
    MyIntroductionComponent,
    MyExperienceComponent,
    MyEducationSkillsComponent,
    MyProjectsComponent,
    MyHobbiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
