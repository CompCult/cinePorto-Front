import { Component, OnInit } from '@angular/core';

import { MissionProposed } from './mission-proposed.model';
import { MissionProposedService } from './mission-proposed.service'

@Component({
  selector: 'app-mission-proposed',
  templateUrl: './mission-proposed.component.html',
  styleUrls: ['./mission-proposed.component.css']
})

export class MissionProposedComponent implements OnInit {
 
  missions: MissionProposed[];
  myData:any;
  atualiza:boolean;

constructor(private missionProposedService: MissionProposedService) {}

updateList(){
  // delay para tempo de receber os valores do get
  setTimeout(() => {
    this.missionProposedService.getMission()
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