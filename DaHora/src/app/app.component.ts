import { Component } from '@angular/core';
import { AuthService } from './login/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'daHora';
  constructor(
    private authService: AuthService,
    private router: Router,
    ) { }


  mostrarMenu: boolean = false;
  mostraInicio: boolean = true;
  ngOnInit()
  {
    this.authService.mostrarMenuEmitter.subscribe(
      mostrar => this.mostrarMenu = mostrar,
    );
    this.authService.mostrarMenuLogin.subscribe(
      mostrar => this.mostraInicio = mostrar,
    );

    var autenticar = this.authService.usuarioEstaAutenticado();
    if(autenticar.AUTENTICADO == false)
    {
      this.router.navigate(['login']);
    }
    else
    {
      this.router.navigate(['home',autenticar.ID_USUARIO]);
    }

  }

  
}
