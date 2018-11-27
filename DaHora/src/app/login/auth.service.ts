import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private usuarioAutenticado = {
    AUTENTICADO:false,
    ID_USUARIO:'0',
  };

  mostrarMenuEmitter = new EventEmitter<boolean>();
  mostrarMenuLogin = new EventEmitter<boolean>();
  SenhaOuLoginIncorretos = new EventEmitter<boolean>();

  constructor(
    private router: Router,
    private http: HttpClient,
    ) { }


  login:any;
  fazerLogin(usuario: Usuario){

    this.http.get('http://127.0.0.1:5002/login/'+usuario.usuario+'.'+usuario.senha).subscribe(data => {
      this.login = data as JSON;
      console.log(this.login);
    })


    if (this.login == true) 
    {
      this.usuarioAutenticado.AUTENTICADO = true;
      this.usuarioAutenticado.ID_USUARIO = usuario.usuario;

      this.mostrarMenuEmitter.emit(true);
      this.mostrarMenuLogin.emit(false);

      this.router.navigate(['home',usuario.usuario]);

    } 
    else if(this.login == false)
    {
      this.router.navigate(['login']);

      this.usuarioAutenticado.AUTENTICADO = false;
      this.usuarioAutenticado.ID_USUARIO = '0';
      
      this.mostrarMenuLogin.emit(true);
      this.mostrarMenuEmitter.emit(false);
      this.SenhaOuLoginIncorretos.emit(true);
      
    }
  }

  usuarioEstaAutenticado()
  {
    return this.usuarioAutenticado;
  }
  fazerLogout()
  {
    this.usuarioAutenticado.ID_USUARIO = '0';
    this.usuarioAutenticado.AUTENTICADO = false;
    this.mostrarMenuEmitter.emit(false);
    this.mostrarMenuLogin.emit(true);
    return this.usuarioAutenticado
  }
}


