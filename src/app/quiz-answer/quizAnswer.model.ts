export class QuizAnswer {

  public _id: number;
  public _quiz:{
    _id: number,
    title: string,
    description: string;
    points: number;
    is_public: boolean;
    single_answer: boolean;
    alternative_a: string;
    alternative_b: string;
    alternative_c: string;
    alternative_d: string;
    alternative_e: string;
    correct_answer: string;
    start_time: string;
    end_time: string;
    _user:number;
  };
  public _user:{
    _id: number;
    name: string;
    picture: string;
    email: string;
    birth: string;
    password: string;
    sex: string;
    points: string;
    phone: string;
    street: string;
    zipcode: string;
    number: number;
    complement: string;
    neighborhood: string;
    city: string;
    state: string;
    sec_points: string;
    banned_until: string;
    created_at: string;
    type: string;
    institution: string;
    request_limit: string;
  }
  public answer: string;
  public approved: boolean;
  public created_at: string;


  constructor(_id:number ,_user:number, _quiz:number, answer:string, created_at:string, approved:boolean){

       this._id = _id;
      this.answer = answer;
      this.created_at= created_at;
      this.approved= approved;

    }


}
