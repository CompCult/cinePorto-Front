import { Component, OnInit,TemplateRef } from '@angular/core';
import { AppointmentRequest } from './appointmentRequest.model';
import { AppointmentRequestService } from './AppointmentRequest.service';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-appointment-request',
  templateUrl: './appointment-request.component.html',
  styleUrls: ['./appointment-request.component.css']
})
export class AppointmentRequestComponent implements OnInit {

  appointmentsRequest: AppointmentRequest[];
  modalRef: BsModalRef;
  appointmentRequest:AppointmentRequest;
  id: number;
  atualiza:boolean;

  constructor(private modalService: BsModalService,private appointmentrequestService: AppointmentRequestService
              ,private loginService: LoginService) { }



  reject(appointmentRequest2: AppointmentRequest){
    this.appointmentRequest = appointmentRequest2;
    this.appointmentRequest.status ="Rejeitado";
    this.appointmentrequestService.update(this.appointmentRequest, appointmentRequest2._id).subscribe();
    this.refresh();
    this.modalRef.hide();

  }
  approve(appointmentRequest2: AppointmentRequest){
    this.appointmentRequest = appointmentRequest2;
    this.appointmentRequest.status ="Aprovado";
    this.appointmentrequestService.update(this.appointmentRequest, appointmentRequest2._id).subscribe();
    this.refresh();
    this.modalRef.hide();
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  refresh(){
    setTimeout(() => {

    this.appointmentrequestService.getAppointmentRequest()
    .subscribe(appointmentsRequest => this.appointmentsRequest = appointmentsRequest);
    },300);
  }

  showOptions(appointment:AppointmentRequest):boolean{
    if(this.loginService.getUserStatus() === "gestor"){
      return true;
    }else if(this.loginService.getUserId() === appointment._appointment._user){
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
    this.id = this.loginService.getUserId();
    this.atualiza = true;
    this.atualizaAutomatico();
  }

  ngOnDestroy() {
    this.atualiza = false;
  }

}
