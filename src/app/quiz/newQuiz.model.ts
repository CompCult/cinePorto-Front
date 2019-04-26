export class Quiz {

  public _id: number;
  public title: string;
  public description: string;
  public points: number;
  public is_public: boolean;
  public single_answer: boolean;
  public alternative_a: string;
  public alternative_b: string;
  public alternative_c: string;
  public alternative_d: string;
  public alternative_e: string;
  public correct_answer: string;
  public start_time: string;
  public end_time: string;
  public _user:number;
  public secret_code:string;

  constructor(_id:number ,title: string, description: string, points: number, is_public: boolean, single_answer: boolean, alternative_a: string, alternative_b: string,
     alternative_c: string, alternative_d: string, alternative_e: string, correct_answer: string, start_time: string, end_time: string){

       this._id = _id;
       this.title= title;
       this.description = description;
       this.points =points;
       this.is_public =is_public;
       this.single_answer=single_answer;
       this.alternative_a =alternative_a;
       this.alternative_b =alternative_b;
       this.alternative_c =alternative_c;
       this.alternative_d =alternative_d;
       this.alternative_e =alternative_e;
       this.correct_answer = correct_answer;
       this.start_time = start_time;
       this.end_time = end_time;

    }


}
