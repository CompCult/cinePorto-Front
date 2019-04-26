import { Component, OnInit } from '@angular/core';


import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { QuizAnswer } from '../quizAnswer.model';

import { QuizAnswerService } from '../quizAnswer.service';


import{ NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../login/login.service';

@Component({
  selector: 'app-evaluation-quiz',
  templateUrl: './evaluation-quiz.component.html',
  styleUrls: ['./evaluation-quiz.component.css']
})
export class EvaluationQuizComponent implements OnInit {


      title = "Resposta Quizzes";
      closeBtnName: string;
      mensagem: string;
      quizAnswer: QuizAnswer;

      onClose:any;


      constructor(public bsModalRef: BsModalRef, public loginService: LoginService,public quizAnswerService: QuizAnswerService, private router: Router) {}


      accept(quizAnswer: QuizAnswer){
        console.log(this.quizAnswer);
        this.quizAnswer.approved = true;
        this.quizAnswerService.updateQuiz_answers(this.quizAnswer, quizAnswer._id).subscribe();
        //função para enviar um objeto para o componete pai
        this.onClose('');
      }

      reject(quizAnswer: QuizAnswer){

        console.log(this.quizAnswer);
        this.quizAnswer.approved=false;
        this.quizAnswerService.updateQuiz_answers(this.quizAnswer, quizAnswer._id).subscribe();
        //função para enviar um objeto para o componete pai
        this.onClose('');
      }

      pedant(quizAnswer: QuizAnswer){
        console.log(this.quizAnswer);

        this.quizAnswerService.updateQuiz_answers(this.quizAnswer, quizAnswer._id).subscribe();
        //função para enviar um objeto para o componete pai
        this.onClose('');
      }


      delete(quizAnswer: QuizAnswer){

        console.log(this.quizAnswer);
        this.quizAnswerService.deleteQuiz_answers(this.quizAnswer, quizAnswer._id).subscribe();

        //função para enviar um objeto para o componete pai
        this.onClose('');
      }


      approvedd = "";


      ngOnInit() {
        if(this.quizAnswer.approved){
          this.approvedd = "Aprovado"
        }else{
          this.approvedd = "Reprovado"
        }


      }

      showOptions():boolean{

        if(this.loginService.getUserStatus() == "gestor"){
          return true;
        }else if(this.quizAnswer._quiz._user == null){
          return false;
        }else if(this.loginService.getUserId() === this.quizAnswer._quiz._user){
          return true;
        }else{
          return false;
        }

      }

      showOptions2():boolean{
        return this.showOptions() && !(this.quizAnswer.approved);
      }



    }
