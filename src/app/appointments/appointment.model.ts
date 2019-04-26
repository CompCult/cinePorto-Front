export class Appointment{
  public _id: number;
  public _user: number;
  public name: string;
  public description: string;
  public place: string;
  public type: string;
  public start_date: string;
  public end_date: string;

  constructor(_id: number,_user: number,name: string,description: string,place: string,
    type: string,start_date: string,end_date: string){
    this._id = _id;
    this._user = _user;
    this.name = name;
    this.description = description;
    this.place = place;
    this.type = type;
    this.start_date = start_date;
    this.end_date = end_date;
  };


}
