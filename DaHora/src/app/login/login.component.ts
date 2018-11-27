import { Component, OnInit } from '@angular/core';
import { Usuario } from './usuario';
import { AuthService } from '../login/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  usuario: Usuario = new Usuario();

  constructor(private authService: AuthService) { }


  verificaSenha:boolean = false;

  ngOnInit() {

  }

  ngOnSubmit()
  {
    this.authService.SenhaOuLoginIncorretos.subscribe(
      mostrar => this.verificaSenha = mostrar,
    );
  }

  fazerLogin(){
    //console.log(this.usuario)
    this.authService.fazerLogin(this.usuario);
  }
}

