import { Component, OnInit } from '@angular/core';

import { Mission } from './mission.model';
import {MissionService} from './mission.service'

import { NewMissionComponent } from './new-mission/new-mission.component';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';


@Component({
  selector: 'app-missions',
  templateUrl: './missions.component.html',
  styleUrls: ['./missions.component.css']
})
export class MissionsComponent implements OnInit {

  missions: Mission[];
  myData:any;
  bsModalRef: BsModalRef;
  atualiza:boolean;

constructor(private modalService: BsModalService,
            private missionService: MissionService) {}



create() {
  const initialState = {
    title: 'Criar Nova Missão',
    mission: new Mission(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null),
    mensage: 'Missao criado com sucesso',
    modify: false,
    password: ""
  };
  this.bsModalRef = this.modalService.show(NewMissionComponent, {initialState});
  this.bsModalRef.content.closeBtnName = 'Fechar';

  // funcao que recebe valores do modal
  this.bsModalRef.content.onClose = (myData) => {
      this.updateList();
      this.bsModalRef.hide();
      this.myData = myData;
  };


}

option(mission: Mission) {
  const initialState = {
    title: 'Opções de Missões',
    mission: mission,
    mensage: 'Missoes criado com sucesso',
    modify: true,
    password: ""
  };
  this.bsModalRef = this.modalService.show(NewMissionComponent, {initialState});
  this.bsModalRef.content.closeBtnName = 'Fechar';

  // funcao que recebe valores do modal
  this.bsModalRef.content.onClose = (myData) => {
      this.updateList();
      this.bsModalRef.hide();
      this.myData = myData;
  };
}

updateList(){
  // delay para tempo de receber os valores do get
  setTimeout(() => {

  this.missionService.getMission()
  .subscribe(missions => this.missions = missions);

  },1000);

}

atualizaAutomatico(){
  if(this.atualiza){
   setTimeout(() => {
     this.updateList();
     this.atualizaAutomatico();
   },20000);
   }
}

ngOnInit() {
  this.updateList();
  this.atualiza = true;
  this.atualizaAutomatico();
}
ngOnDestroy() {
  this.atualiza = false;
}

}
