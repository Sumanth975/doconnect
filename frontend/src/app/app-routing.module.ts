import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminregisterComponent } from './adminregister/adminregister.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

import { ProfileComponent } from './profile/profile.component';
import { QuestionComponent } from './question/question.component';
import { RegisterComponent } from './register/register.component';
import { AnswerComponent } from './answer/answer.component';
import { QuestionsnotapprovedComponent } from './questionsnotapproved/questionsnotapproved.component';
import { AnswersnotapprovedComponent } from './answersnotapproved/answersnotapproved.component';

const routes: Routes = [
  {path:'', component:HomeComponent,pathMatch:'full'},
  {path:'dashboard',component:DashboardComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'profile',component:ProfileComponent},
  {path:'adminlogin',component:AdminloginComponent},
  {path:'adminregister',component:AdminregisterComponent},
  {path:'question',component:QuestionComponent},
  {path:'answer',component:AnswerComponent},
  {path:'questionsnotapproved',component:QuestionsnotapprovedComponent},
  {path:'answersnotapproved',component:AnswersnotapprovedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
