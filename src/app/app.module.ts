import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';

import { routing } from './app.routing';

import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { NewUsersComponent } from './users/new-users/new-users.component';
import { PanelComponent } from './panel/panel.component';
import { UserService } from './users/user.service'
import { LoginService } from './login/login.service'
import { QuizService } from './quiz/quiz.service'
import { MissionService } from './missions/mission.service'
import { MissionAnswerService } from './mission-answer/missionAnswer.service'
import { QuizAnswerService } from './quiz-answer/quizAnswer.service'
import { AppointmentRequestService } from './appointment-request/AppointmentRequest.service';
import { SearchService } from './search/search.service';
import { AuthGuard } from './login/auth.guard';
import { QuizComponent } from './quiz/quiz.component';
import { NewQuizComponent } from './quiz/new-quiz/new-quiz.component';
import { QuizAnswerComponent } from './quiz-answer/quiz-answer.component';
import { EvaluationQuizComponent } from './quiz-answer/evaluation-quiz/evaluation-quiz.component';
import { MissionsComponent } from './missions/missions.component';
import { NewMissionComponent } from './missions/new-mission/new-mission.component';
import { MissionAnswerComponent } from './mission-answer/mission-answer.component';
import { EvaluationMissionComponent } from './mission-answer/evaluation-mission/evaluation-mission.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { AppointmentService } from './appointments/appointment.service';
import { NewAppointmentsComponent } from './appointments/new-appointments/new-appointments.component';
import { AppointmentRequestComponent } from './appointment-request/appointment-request.component';
import { InitialPageComponent } from './initial-page/initial-page.component';
import { AlertModule } from 'ngx-bootstrap/alert';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsersComponent,
    NewUsersComponent,
    PanelComponent,
    QuizComponent,
    NewQuizComponent,
    QuizAnswerComponent,
    EvaluationQuizComponent,
    MissionsComponent,
    NewMissionComponent,
    MissionAnswerComponent,
    EvaluationMissionComponent,
    AppointmentsComponent,
    NewAppointmentsComponent,
    AppointmentRequestComponent,
    InitialPageComponent

  ],
  imports: [
    NgbModule.forRoot(),
    BsDropdownModule.forRoot(),
    BrowserModule,
    FormsModule,
    routing,
    BsDatepickerModule.forRoot(),
    ModalModule.forRoot(),
    HttpModule,
    AlertModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBb4zfxXZMu-1Mt-J8XdcsydsCyEkXcyX0'
    })
  ],
  providers: [
    UserService,
    LoginService,
    QuizService,
    QuizAnswerService,
    AuthGuard,
    AppointmentService,
    AppointmentRequestService,
    MissionService,
    MissionAnswerService,
    SearchService,


  ],
  entryComponents:[
    NewUsersComponent,
    NewQuizComponent,
    EvaluationQuizComponent,
    NewAppointmentsComponent,
    EvaluationMissionComponent,
    NewMissionComponent,

  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
