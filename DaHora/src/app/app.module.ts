import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { PaginaComponent } from './pagina/pagina.component';
import { RouterModule } from '@angular/router';
import {ROUTES} from './app.routes';
import { EventosComponent } from './eventos/eventos.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { HeaderLoginComponent } from './header-login/header-login.component';
import { FooterLoginComponent } from './footer-login/footer-login.component';
import { PerfilComponent } from './perfil/perfil.component';





@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    PaginaComponent,
    EventosComponent,

    LandingComponent,
    LoginComponent,
    HeaderLoginComponent,
    FooterLoginComponent,
    PerfilComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
