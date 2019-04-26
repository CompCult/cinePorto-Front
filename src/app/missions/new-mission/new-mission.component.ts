import { Component, OnInit } from '@angular/core';


import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Mission } from '../mission.model';

import { MissionService } from '../mission.service';

import { LoginService } from '../../login/login.service';



import { User } from '../../users/user.model';


import{ NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-new-mission',
  templateUrl: './new-mission.component.html',
  styleUrls: ['./new-mission.component.css']
})
export class NewMissionComponent implements OnInit {


      title: string;
      closeBtnName: string;
      mensagem: string;
      mission: Mission;
      modify: boolean;
      onClose:any;
      password:string ="";
      id:number;

      constructor(public bsModalRef: BsModalRef, public missionService: MissionService, private router: Router, public loginService: LoginService) {}

      create(missionForm){
        //let user: User = new User(null,"null",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null);
        this.mission._user = this.loginService.getUserId();
        console.log(this.mission._user)
        this.modifyBoolean();
        this.missionService.createMissions(this.mission).subscribe();

        //função para enviar um objeto para o componete pai
        this.onClose(this.mission);
      }

      modifymission(mission: Mission){
        this.modifyBoolean();
        console.log(this.mission);
        console.log(mission);
        this.missionService.updateMissions(mission, mission._id).subscribe();
        //função para enviar um objeto para o componete pai
        this.onClose('');
      }

      delete(mission: Mission){
        this.modifyBoolean();
        console.log(this.mission);
        this.missionService.deleteMissions(this.mission, mission._id).subscribe();

        //função para enviar um objeto para o componete pai
        this.onClose('');
      }




      isPublic:string = "false";
      isGrupal:string= "false";
      single= "false";
      text:string= "false";
      image= "false";
      video= "false";
      audio= "false";
      geolocation= "false";



      ngOnInit() {
        this.isPublicF();
        this.isGroupF();
        this.isSingle();
        this.imageF();
        this.videoF();
        this.audioF();
        this.geolocationF();
        this.textF();



      }

      isPublicF(){
        if (this.mission.is_public == true){
        this.isPublic="true";
        }else{
        this.isPublic="false";
        }
      }

      isGroupF(){
        if (this.mission.is_grupal == true){
        this.isGrupal="true";
        }else{
        this.isGrupal="false";
        }
      }

      isSingle(){
        if (this.mission.single_answer == true){
        this.single="true";
        }else{
        this.single="false";
        }
      }

      imageF(){
        if (this.mission.has_image == true){
        this.image="true";
        }else{
        this.image="false";
        }
      }

      videoF(){
        if (this.mission.has_video == true){
        this.video="true";
        }else{
        this.video="false";
        }
      }

      audioF(){
        if (this.mission.has_audio == true){
        this.audio="true";
        }else{
        this.audio="false";
        }
      }


      geolocationF(){
        if (this.mission.has_geolocation == true){
        this.geolocation="true";
        }else{
        this.geolocation="false";
        }
      }

      textF(){
        if (this.mission.has_text == true){
        this.text="true";
        }
        if (this.mission.has_text == false){
        this.text="false";
        }
      }


      modifyBoolean(){
        if (this.text == "true"){
        this.mission.has_text = true;
        }
        if (this.text == "false"){
        this.mission.has_text = false;
        }

        if (this.geolocation == "true"){
        this.mission.has_geolocation = true;
        }else{
        this.mission.has_geolocation = false;
        }

        if (this.audio == "true"){
        this.mission.has_audio = true;
        }else{
        this.mission.has_audio = false;
        }

        if (this.video == "true"){
        this.mission.has_video = true;
        }else{
        this.mission.has_video = false;
        }

        if (this.image == "true"){
        this.mission.has_image = true;
        }else{
        this.mission.has_image = false;
        }

        if (this.single == "true"){
        this.mission.single_answer = true;
        }else{
        this.mission.single_answer = false;
        }

        if (this.isGrupal == "true"){
        this.mission.is_grupal = true;
        }else{
        this.mission.is_grupal = false;
        }

        if (this.isPublic == "true"){
        this.mission.is_public = true;
        }else{
        this.mission.is_public = false;
        }
      }

      showOptions():boolean{

        if(this.loginService.getUserStatus() == "gestor"){
          return true && this.modify;
        }else if(this.mission._id == null){
          return false;
        }else if(this.loginService.getUserId() === this.mission._user){
          return true;
        }else{
          return false;
        }

      }

    }
