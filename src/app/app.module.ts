import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MyNewComponentComponent } from './my-new-component/my-new-component.component';
import { MyIntroductionComponent } from './my-introduction/my-introduction.component';
import { MyExperienceComponent } from './my-experience/my-experience.component';
import { MyEducationSkillsComponent } from './my-education-skills/my-education-skills.component';
import { MyProjectsComponent } from './my-projects/my-projects.component';
import { MyHobbiesComponent } from './my-hobbies/my-hobbies.component';
import { MyContactComponent } from './my-contact/my-contact.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MyNewComponentComponent,
    MyIntroductionComponent,
    MyExperienceComponent,
    MyEducationSkillsComponent,
    MyProjectsComponent,
    MyHobbiesComponent,
    MyContactComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
