import { Component, OnInit } from '@angular/core';
import { AuthService } from '../login/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
    ) { }

  autentic:any;
  ngOnInit() 
  {
    this.autentic = this.authService.usuarioEstaAutenticado()
  }
  PerfilAluno()
  {
    this.router.navigate(['perfil/'+this.autentic['ID_USUARIO']]);
  }
  homeAluno()
  {
    this.router.navigate(["home/"+this.autentic['ID_USUARIO']])
  }
  eventosAluno()
  {
    this.router.navigate(["eventos/"+this.autentic['ID_USUARIO']])
  }
  logout()
  {
    this.authService.fazerLogout()
    this.router.navigate(["/"]) 
  }
}
