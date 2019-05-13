import { Component, OnInit } from '@angular/core';
import { Mission } from '../missions/mission.model';
import { MissionService } from '../missions/mission.service';
import { QuizService } from '../quiz/quiz.service';
import { Quiz } from '../quiz/newQuiz.model';
import { StatisticService } from './statistic.service';

@Component({
  selector: 'app-statistcs',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

  // Lista de Missões
  missions: Mission[] = [];
  // Lista de Missões que será mostrado
  showMissions: Mission[] = [];
  // Contador de pagina da lista de missão
  showMissionsPage: number = 0;
  // Lista de Quizes
  quizzes: Quiz[] = [];
  // Lista de quizes que será mostrado
  showQuizzes: Quiz[] =[];
  // Contador da pagina de quizes
  showQuizzesPage:number = 0;
  // Nome do quiz/missão selecionado
  selectedName:string = "";
  // Flags
  selectMissionFlag:boolean = false;
  selectQuizFlag:boolean = true;

  quizz: Quiz;

  // Chart
  chartData:Array<any> = [
    {data: [0,0,0,0,0], label : 'Escolhas'},
  ];

  chartLabels:Array<any> = [];

  // Objeto de configuracao do charts
  chartOptions:any = {
    scaleShowVerticalLines: true,
    responsive: true
  };

  chartColors:Array<any> = [
    { // grey
      backgroundColor: 'rgba(34, 180, 27, 1)',
      borderColor: 'rgba(7, 246, 96, 1)',
      pointBackgroundColor: 'rgba(89, 254, 0, 1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];

  chartLegend:boolean = true;

  chartType:string = 'bar';

  constructor(private missionService: MissionService,
              private quizService: QuizService,
              private statisticService:StatisticService) { }

  // Ao iniciar mostrar a lista de quizes e o gráfico já preparado para as alternativas
  ngOnInit() {

    // Função que modifica os campos para adequar aos valores de um quiz
    this.selectQuiz();

    setTimeout(() => {
   
      this.quizService.getQuiz()
      .subscribe(quizzes => {
        this.quizzes = quizzes;
        this.showQuizzes = quizzes;
      });
    },1000);
  }


  

  // Avança à próxima pagina na lista de quizzes
  nextQuizzes(){
    this.showQuizzesPage++;
    this.showQuizzes = this.quizzes.slice(this.showQuizzesPage*5,this.showQuizzesPage*5 + 5);
  }

  // Volta uma Página na lista de missões
  backQuizzes(){
    this.showQuizzesPage--;
    this.showQuizzes = this.quizzes.slice(this.showQuizzesPage*5,this.showQuizzesPage*5 + 5);
  }

 

  // Seleciona o quiz
  selectQuiz(){
    //mudanca do dados do chart
    this.chartLabels = ['Alternativa A','Alternativa B','Alternativa C','Alternativa D','Alternativa E'];

    // Mudanca dos Flags
    this.selectMissionFlag = false;
    this.selectQuizFlag = true;
  }

  // Função para buscar os valores dos quizzes no servidor
  selectQuizStatistic(quiz:Quiz){
    this.quizz= quiz;
    this.statisticService.getStatisticQuizz(quiz._id).subscribe(response =>{
      console.log(response[0].data)
      this.chartData = [{data: response[0].data , label: 'Escolhas'}];
      // Nome do quiz selecionado
      this.selectedName = quiz.title;
    })
  }

}
