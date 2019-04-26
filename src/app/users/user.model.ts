export class User{
  public _id: number;
  public name: string;
  public picture: string;
  public email: string;
  public birth: string;
  public password: string;
  public sex: string;
  public points: string;
  public phone: string;
  public street: string;
  public zipcode: string;
  public number: number;
  public complement: string;
  public neighborhood: string;
  public city: string;
  public state: string;
  public sec_points: string;
  public banned_until: string;
  public created_at: string;
  public type: string;
  public institution: string;
  public request_limit: string;


  constructor(id: number, name: string,picture: string, email: string, password: string, birth: string,
              sex: string, points: string, phone: string, street: string, complement: string, number: number,
              neighborhood: string, city: string, state: string, zipcode: string,  sec_points: string,
              banned_until: string,created_at: string, type: string, institution: string, request_limit: string) {
    this._id = id;
    this.name = name;
    this.picture = picture;
    this.email = email;
    this.password = password;
    this.birth = birth;
    this.sex = sex;
    this.points = points;
    this.phone = phone;
    this.street = street;
    this.complement = complement;
    this.number = number;
    this.neighborhood = neighborhood;
    this.city = city;
    this.state = state;
    this.zipcode = zipcode;
    this.sec_points = sec_points;
    this.banned_until = banned_until;
    this.created_at = created_at;
    this.type = type;
    this.institution = institution;
    this.request_limit = request_limit;
  };
}
