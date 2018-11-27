import { Component, OnInit } from '@angular/core';
import { Atividade } from './atividades';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})

export class EventosComponent implements OnInit {
  selectfile = null;

  constructor(private http: HttpClient){}
  atividade: Atividade = new Atividade;
  
  onFileChanged(event) {
    this.selectfile = event.target.files[0]
    console.log(event.target.files[0])
    console.log(event);
  }
  onUpload() {
    const fd = new FormData();
    fd.append('image', this.selectfile, this.selectfile.name)
    this.http.post('http://127.0.0.1:5002/insere/'+this.atividade.nome_ativ+'.'+this.atividade.local+'.'+ this.atividade.data +'.'+ this.atividade.categoria +'.'+ this.atividade.fornecido +'.'+ this.atividade.ds_evento+'.'+ this.selectfile,fd)
      .subscribe(res =>{
        console.log(res);
      });
  }
 
  

  ngOnInit() {
    
  }
  inserirAtividade()
  {
    console.log(this.atividade);
  }


  
}
