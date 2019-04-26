export class MissionAnswer {

  public _id: number;
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
  public _mission:{
    _id: number;
    name: string;
    description: string;
    points:number;  // valência em pontos dessa missão
    secret_code:string; // código de atalho que o usuário insere no app e acessa a missão diretamente (gerado automaticamente pela API)
    is_ :boolean; // a missão deve ser mostrada na lista de missões?
    is_grupal:boolean; // a missão deve ser respondida em nome de um grupo?
    single_answer: boolean; //a missão deve ser respondida apenas uma vez?
    has_image:boolean; // usuário precisa enviar imagem?
    has_audio: boolean ;
    has_video:boolean;
    has_text: boolean;
    has_geolocation: boolean;
    end_message: string; // mensagem a ser exibida pro usuário após ele enviar resposta da missão
    start_time: string; //data de início da missão
    end_time:string; // data de fim da missão
    created_at: string;
    _user:number;
  };
  public _group: number;
  public status: string;// válida/inválida/pendente
  public image: string; //link da imagem
  public audio: string;  // link do áudio
  public video: string;
  public text_msg: string; //(renomear de text para text_msg)
  public location_lat: string; //latitutde do gps
  public location_lng: string; //longitude do gps
  public created_at: string;


  constructor(_id:number ,_group :number , status: string , image: string, audio: string, video: string,
    text_msg: string, location_lat: string, location_lng: string, created_at: string){

      this._id = _id;

      this._group =_group;
      this.status =status;
      this.image =image;
      this.audio =audio;
      this.video =video;
      this.text_msg =text_msg;
      this.location_lat =location_lat;
      this.location_lng =location_lng;
      this.created_at =created_at;


    }


  }
