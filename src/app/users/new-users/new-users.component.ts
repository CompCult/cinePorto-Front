import { Component, OnInit } from '@angular/core';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { User } from '../user.model';

import { UserService } from '../user.service';


import{ NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-users',
  templateUrl: './new-users.component.html',
  styleUrls: ['./new-users.component.css']
})
export class NewUsersComponent implements OnInit {

  title: string;
  closeBtnName: string;
  mensagem: string;
  user: User;
  modify: boolean;
  onClose:any;
  password:string ="";
  modifyPassword:boolean = false;

  constructor(public bsModalRef: BsModalRef, public userService: UserService,private router: Router) {}

  checking = false;
  checkType(){
    if(this.user.type == "estudante" || this.user.type == "professor"){
      this.checking= true;
    }else{
      this.checking =false;
    }
  }

  create(userForm){
    if(this.password != ""){
      this.user.password= this.password;
    }

    delete this.user.picture;
    delete this.user._id;
    console.log(this.user)
    this.userService.createUser(this.user).subscribe();
    this.router.navigate(['users']);
    //função para enviar um objeto para o componete pai
    this.onClose(this.user);
  }

  modifyUserUsuario(user: User){
    if(!this.modifyPassword){
      delete this.user.password;
    }else{
      this.user.password= this.password;
    }

    delete this.user.picture;

    this.userService.updateUser(this.user, user._id).subscribe();
    //função para enviar um objeto para o componete pai
    this.onClose('');
  }

  setPasswordModify(){
    if(this.modifyPassword){
      this.modifyPassword =false;
    }else{
      this.modifyPassword =true;
    }
  //  delete this.user.password;
  }

  getImageUser():String{
    if(this.user.picture == null){
      return '../assets/img/default_User8.png';
    }else{
      return this.user.picture;
    }
  }

  ngOnInit() {


  }



}
