import { Component, OnInit, NgModule } from '@angular/core';
import { GoogleChartsModule } from 'angular-google-charts';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../login/usuario';
import { AuthService } from '../login/auth.service';


@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.component.html',
  styleUrls: ['./pagina.component.css']
})
@NgModule({
  declarations: [PaginaComponent],
  imports: [GoogleChartsModule.forRoot(),],
  bootstrap: [PaginaComponent],
})


export class PaginaComponent implements OnInit {


  serverData: JSON;


  
  constructor(
    private http: HttpClient,
    private authService: AuthService
    ) { }
  
  alunos:any;
  grafico:JSON;
  autentica:any;
  tabelas:any;
  ngOnInit() {
    this.autentica = this.authService.usuarioEstaAutenticado();
    console.log(this.autentica)

    this.http.get('http://127.0.0.1:5002/'+this.autentica['ID_USUARIO']).subscribe(dados => { 
      console.log(dados)
      this.alunos = [dados as JSON];
    });

    this.http.get('http://127.0.0.1:5002/chart/'+this.autentica['ID_USUARIO']).subscribe(dados => { 
      console.log(dados)
      this.grafico = dados as JSON;
    });

    this.http.get('http://127.0.0.1:5002/eventos/'+this.autentica['ID_USUARIO']).subscribe(dados => { 
      console.log(dados)
      this.tabelas = [dados as JSON];
    });
  }
  // Doughnut
  public doughnutChartLabels:string[] = ['Horas de visitas tecnicas', 'Horas de Palestras', 'Horas empresa júnior','Horas de voluntariado','Outras Horas'];
  public colors = [{
    backgroundColor: ['rgba(0, 28, 92, 1)','rgba(0, 54, 179, 1)', 'rgba(0, 72, 240, 1)','rgba(85, 129, 231, 1)' ,'rgba(117, 159, 255, 1)'],
    fillColor: 'rgba(47, 132, 71, 0.8)',
    strokeColor: 'rgba(47, 132, 71, 0.8)',
    highlightFill: 'rgba(47, 132, 71, 0.8)',
    highlightStroke: 'rgba(47, 132, 71, 0.8)'
}];
  public doughnutChartData:number[] = [30, 5, 80,10,20];
  public doughnutchartDisplay = false;
  public doughnutChartType:string = 'doughnut';
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }


  public doughnutChartLabels2:string[] = ['Horas Totais', 'Horas Faltantes', 'Horas Pendentes'];
  public colors2 = [{
    backgroundColor: ['rgba(17, 168, 0, 1)','rgba(189, 0, 0, 1)', 'rgba(0, 72, 240, 1)'],
    fillColor: 'rgba(47, 132, 71, 0.8)',
    strokeColor: 'rgba(47, 132, 71, 0.8)',
    highlightFill: 'rgba(47, 132, 71, 0.8)',
    highlightStroke: 'rgba(47, 132, 71, 0.8)'
}];
  


  
  
  public doughnutChartData2:number[] = [1,180,5];
  public doughnutchartDisplay2 = false;
  public titleChart2 = [{display:true}];
  public doughnutChartType2:string = 'doughnut';
 
  // events
  public chartClicked2(e:any):void {
    console.log(e);
  }
 
  public chartHovered2(e:any):void {
    console.log(e);
  }



}

