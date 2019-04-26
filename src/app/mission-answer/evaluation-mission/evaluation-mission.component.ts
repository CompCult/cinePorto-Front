import { Component, OnInit, TemplateRef } from '@angular/core';


import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { MissionAnswer } from '../missionAnswer.model';

import { MissionAnswerService } from '../missionAnswer.service';





import{ NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../login/login.service';


@Component({
  selector: 'app-evaluation-mission',
  templateUrl: './evaluation-mission.component.html',
  styleUrls: ['./evaluation-mission.component.css']
})
export class EvaluationMissionComponent implements OnInit {

        title: string;
        closeBtnName: string;
        mensagem: string;
        missionAnswer: MissionAnswer;
        modify: boolean;
        onClose:any;
        password:string ="";

        constructor(public bsModalRef: BsModalRef,public loginService: LoginService, public missionAnswerService: MissionAnswerService, private router: Router, private modalService: BsModalService) {}

        create(missionAnswerForm){

          this.missionAnswerService.createMissionAnswer(this.missionAnswer).subscribe();
          this.router.navigate(['mission']);
          //função para enviar um objeto para o componete pai
          this.onClose(this.missionAnswer);
        }

        modifyUserUsuario(missionAnswer: MissionAnswer){
          console.log(this.missionAnswer);
          this.missionAnswerService.updateMissionAnswer(this.missionAnswer, missionAnswer._id).subscribe();
          //função para enviar um objeto para o componete pai
          this.onClose('');
        }

        delete(missionAnswer: MissionAnswer){

          console.log(this.missionAnswer);
          this.missionAnswerService.deleteMissionAnswer(this.missionAnswer, missionAnswer._id).subscribe();

          //função para enviar um objeto para o componete pai
          this.onClose('');
        }


        accept(missionAnswer: MissionAnswer){
          console.log(this.missionAnswer);
          missionAnswer.status = "Aprovado";
          this.missionAnswerService.updateMissionAnswer(this.missionAnswer, missionAnswer._id).subscribe();
          //função para enviar um objeto para o componete pai
          this.onClose('');
        }

        pedant(missionAnswer: MissionAnswer){
          console.log(this.missionAnswer);
          missionAnswer.status = "Pendente";
          this.missionAnswerService.updateMissionAnswer(this.missionAnswer, missionAnswer._id).subscribe();
          //função para enviar um objeto para o componete pai
          this.onClose('');
        }

        reject(missionAnswer: MissionAnswer){
          console.log(this.missionAnswer);
          missionAnswer.status = "Rejeitado";
          this.missionAnswerService.updateMissionAnswer(this.missionAnswer, missionAnswer._id).subscribe();
          //função para enviar um objeto para o componete pai
          this.onClose('');
        }

        toNumber(string) {
          return parseFloat(string);
        }




        modalRef: BsModalRef;

        openModal(template: TemplateRef<any>) {
          this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
        }

        showOptions():boolean{

          if(this.loginService.getUserStatus() == "gestor"){
            return true;
          }else if(this.missionAnswer._user == null){
            return false;
          }else if(this.loginService.getUserId() === this.missionAnswer._mission._user){
            return true;
          }else{
            return false;
          }

        }

        image :boolean =false;
        seeImage(){
          if(this.image){
            this.image =false;
          }else{
            this.image =true;
          }
        }

        video :boolean =false;
        seeVideo(){
          if(this.video){
            this.video =false;
          }else{
            this.video =true;
          }
        }

        audio :boolean =false;
        seeAudio(){
          if(this.audio){
            this.audio =false;
          }else{
            this.audio =true;
          }
        }

        text :boolean =false;
        seeText(){
          if(this.text){
            this.text =false;
          }else{
            this.text =true;
          }
        }




        ngOnInit() {
        }

      }
