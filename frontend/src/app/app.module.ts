import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ApiService } from './api.service';
import { ProfileComponent } from './profile/profile.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { QuestionComponent } from './question/question.component';
import { AdminregisterComponent } from './adminregister/adminregister.component';
import { AnswerComponent } from './answer/answer.component';
import { QuestionsnotapprovedComponent } from './questionsnotapproved/questionsnotapproved.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { AnswersnotapprovedComponent } from './answersnotapproved/answersnotapproved.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    HomeComponent,
    ProfileComponent,
    AdminloginComponent,
    QuestionComponent,
    AdminregisterComponent,
    AnswerComponent,
    QuestionsnotapprovedComponent,
    SearchComponent,
    AnswersnotapprovedComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ToastrModule.forRoot(), 
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
