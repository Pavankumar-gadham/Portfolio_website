import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ExperienceComponent } from './components/experience/experience.component';

const routes: Routes = [
  { 'path': '', component: HomeComponent },
  { 'path': 'about', component: AboutComponent },
  { 'path': 'contact', component: ContactComponent },
  { 'path': 'projects', component: ProjectsComponent },
  { 'path': 'skills', component: SkillsComponent },
  { 'path': 'experience', component: ExperienceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
