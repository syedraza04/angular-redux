import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import {ResumeComponent} from "./core/resume/resume.component";
import {WorkComponent} from "./core/work/work.component";
import {ContactComponent} from "./core/contact/contact.component";
import {LandingPageComponent} from "./core/landing-page/landing-page.component";

const appRoutes: Routes = [
  { path:'', component: LandingPageComponent},
  { path: 'home',    component: HomeComponent },
  { path: 'resume',  component: ResumeComponent },
  { path: 'work',    component: WorkComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
