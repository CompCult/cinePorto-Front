import { Component, OnInit } from '@angular/core';

import { NewUser } from './newUser.model';

import { User } from './user.model';
import { UserService } from './user.service';
import { NewUsersComponent } from './new-users/new-users.component';

import { SearchService } from '../search/search.service'
import { Search } from '../search/search.model'

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {


  pesquisaButton ="Pesquisar por";
  pesquisaPAram ="name";
  atualiza:boolean;

  searcher = new Search();


  users: User[];
  usersTemp:User[];
  myData:any;
  bsModalRef: BsModalRef;

  constructor(private modalService: BsModalService, private usuarioService: UserService, private searchService: SearchService) {}

  create() {
    const initialState = {
      title: 'Criar Usuário',
      user: new NewUser(null,null,null,null),
      mensage: 'Usuário criado com sucesso',
      modify: false,
      password: ""
    };
    this.bsModalRef = this.modalService.show(NewUsersComponent, {initialState});
    this.bsModalRef.content.closeBtnName = 'Fechar';

    // funcao que recebe valores do modal
    this.bsModalRef.content.onClose = (myData) => {
    this.atualizaLista();
    this.bsModalRef.hide();
    this.myData = myData;
  };


}

option(user: User) {
  const initialState = {
    title: 'Opções de Usuário',
    user: user,
    mensage: 'Usuário criado com sucesso',
    modify: true,
    password: ""
  };
  this.bsModalRef = this.modalService.show(NewUsersComponent, {initialState});
  this.bsModalRef.content.closeBtnName = 'Fechar';

  // funcao que recebe valores do modal
  this.bsModalRef.content.onClose = (myData) => {
  this.atualizaLista();
  this.bsModalRef.hide();
  this.myData = myData;
};
}

change(tipo: String){
  if(tipo == "name"){
    this.pesquisaButton ="nome";
    this.pesquisaPAram ="name";
  }else if( tipo == "email"){
    this.pesquisaPAram = "email";
    this.pesquisaButton= "email";
  }else{
    this.pesquisaPAram = "_id";
    this.pesquisaButton = "ID";
  }
}

atualizaLista(){
  // delay para tempo de receber os valores do get
  setTimeout(() => {
  this.usuarioService.getUsuarios()
  .subscribe(users => {
    this.users = users,
    this.usersTemp = users})
},300);

}

atualizaAutomatico(){
  if(this.atualiza){
    setTimeout(() => {
      console.log("atualizou!");
      this.atualizaLista();
      this.atualizaAutomatico();
    },20000);
  }
}

search(searchForm){
  // delay para tempo de receber os valores do get
  setTimeout(() => {

  this.searchService.search(this.pesquisaPAram, this.searcher.elementoPesquisa, "users")
  .subscribe(users => this.users = users);

},300);
}

updateFilterName(event) {
    this.users = this.usersTemp; // restaura a lista original;
    const val = event.target.value.toLowerCase();
    // pesquisa na lista
    const temp = this.users.filter(function(d) {
      return d.name.toLowerCase().indexOf(val) !== -1 || !val;
    });
    // atualiza a lista
    this.users = temp;
}

updateFilterEmail(event) {
    this.users = this.usersTemp; // restaura a lista original;
    const val = event.target.value.toLowerCase();
    // pesquisa na lista
    const temp = this.users.filter(function(d) {
      return d.email.toLowerCase().indexOf(val) !== -1 || !val;
    });
    // atualiza a lista
    this.users = temp;
}

ngOnInit() {
  this.atualiza = true;
  this.atualizaLista();
  this.atualizaAutomatico();
}

ngOnDestroy() {
  this.atualiza = false;
}

}
