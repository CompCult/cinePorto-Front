import { Component, OnInit,TemplateRef } from '@angular/core';
import { Appointment } from './appointment.model';
import { AppointmentService } from './appointment.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { NewAppointmentsComponent } from './new-appointments/new-appointments.component';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {

  appointments: Appointment[];
  bsModalRef: BsModalRef;
  myData:any;
  modalRef: BsModalRef;
  atualiza:boolean;

  constructor(private modalService: BsModalService,private loginService: LoginService,
              private appointmentService: AppointmentService) { }

  create() {

    this.bsModalRef = this.modalService.show(NewAppointmentsComponent);
    this.bsModalRef.content.closeBtnName = 'fechar';

    // funcao que recebe valores do modal
    this.bsModalRef.content.onClose = (myData) => {
      this.refresh();
      this.bsModalRef.hide();
      this.myData = myData;
    };
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  delete(appointment:Appointment){
    this.appointmentService.delete(appointment, appointment._id).subscribe();
    this.refresh();
    this.modalRef.hide();
  }

  save(appointment:Appointment){
    this.appointmentService.save(appointment, appointment._id).subscribe();
    this.refresh();
    this.modalRef.hide();
  }

  refresh(){
    setTimeout(() => {

    this.appointmentService.getAppointment()
    .subscribe(appointment => this.appointments = appointment);
    },300);
  }

  showOptions(appointment:Appointment):boolean{
    if(this.loginService.getUserStatus() === "gestor"){
      return true;
    }else if(this.loginService.getUserId() === appointment._user){
      return true;
    }else{
      return false;
    }

  }

  atualizaAutomatico(){
    if(this.atualiza){
     setTimeout(() => {
       this.refresh();
       this.atualizaAutomatico();
     },20000);
     }
  }

  ngOnInit() {
      this.refresh();
      this.atualiza = true;
      this.atualizaAutomatico();
  }

  ngOnDestroy() {
    this.atualiza = false;
  }

}
