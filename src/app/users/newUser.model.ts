export class NewUser{
  public _id: number;
  public name: string;
  public email: string;
  public password: string;
  public type: string;

constructor(id: number, name: string, email: string, password: string,type:string){
  this._id = id;
  this.name = name;
  this.email = email;
  this.password = password;
  this.type = type;
}

}
