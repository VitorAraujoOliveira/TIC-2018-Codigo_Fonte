import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../login/auth.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private authService: AuthService,
  ) { }

  alunos:any;
  curso:any;
  ngOnInit() {
    var user = this.authService.usuarioEstaAutenticado()
    this.http.get('http://dev2.unifacef.com.br:8000/api/matriculadoGrad/'+user.ID_USUARIO).subscribe(dados => { 

      this.alunos = dados as JSON;
  })


  this.http.get('http://127.0.0.1:5002/perfil/'+user.ID_USUARIO).subscribe(dados => { 
    this.curso = [dados as JSON];
  })
  console.log(this.curso)
}
}
