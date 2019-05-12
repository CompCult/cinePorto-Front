export class MissionProposed {

  public _id: number;
  public name: string;
  public description: string;
  public points:number;  // valência em pontos dessa missão
  public secret_code:string; // código de atalho que o usuário insere no app e acessa a missão diretamente (gerado automaticamente pela API)
  public is_public:boolean; // a missão deve ser mostrada na lista de missões?
  public is_grupal:boolean; // a missão deve ser respondida em nome de um grupo?
  public single_answer: boolean; //a missão deve ser respondida apenas uma vez?
  public has_image:boolean; // usuário precisa enviar imagem?
  public has_audio: boolean ;
  public has_video:boolean;
  public has_text: boolean;
  public has_geolocation: boolean;
  public end_message: string; // mensagem a ser exibida pro usuário após ele enviar resposta da missão
  public start_time: string; //data de início da missão
  public end_time:string; // data de fim da missão
  public created_at: string;
  public _user:number;


  constructor(_id:number , name: string, description: string, points: number, secret_code: string,
      is_public: boolean, is_grupal: boolean, single_answer: boolean, has_image: boolean, has_audio: boolean, has_video: boolean,
      has_text: boolean, has_geolocation: boolean, end_message: string , start_time: string, end_time: string, created_at: string){

       this._id = _id;
       this.name= name;
       this.description = description;
       this.points =points;
       this.secret_code =secret_code;
       this.is_public =is_public;
       this.is_grupal =is_grupal;
       this.single_answer =single_answer;
       this.has_image =has_image;
       this.has_audio =has_audio;
       this.has_video =has_video;
       this.has_text =has_text;
       this.has_geolocation =has_geolocation;
       this.end_message =end_message;
       this.created_at =created_at;
       this.single_answer=single_answer;
       this.start_time = start_time;
       this.end_time = end_time;

    }


}
