import { Component, OnInit } from '@angular/core';

import { MissionProposed } from './mission-proposed.model';
import { MissionProposedService } from './mission-proposed.service'
import {propostass} from './mission-proposed.model'


@Component({
  selector: 'app-mission-proposed',
  templateUrl: './mission-proposed.component.html',
  styleUrls: ['./mission-proposed.component.css']
})


export class MissionProposedComponent implements OnInit {
 
  missions: MissionProposed[];
  text: any[];
  myData:any;
  atualiza:boolean;
  // missão selecionado
  selectedName:string = "";
  propostas: Array<propostass> = [];

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

selectMission(mission: MissionProposed){
  console.log(mission)

   // delay para tempo de receber os valores do get
  setTimeout(() => {
    this.missionProposedService.getPostsMission(mission._id).subscribe(response =>{
      console.log(response)
      // Nome da mission selecionado
      this.selectedName = mission.name;
      //resposta do servidor
      this.text = response;
      this.proposta()

    })},1000);
    
}

proposta(){
  for (let i of this.text){
    setTimeout(() => {
      this.missionProposedService.getNameUser(i._user).subscribe(response =>{
      
        let pro:propostass= {
          name: response[0].name,
          text:i.text_msg
        }
        console.log(pro)
        
        this.propostas.push(pro)
        console.log(this.propostas)
  
      })},1000);
      

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