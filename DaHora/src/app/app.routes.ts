import {Routes} from '@angular/router'
import { PaginaComponent } from './pagina/pagina.component';
import { EventosComponent } from './eventos/eventos.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { PerfilComponent } from './perfil/perfil.component';



export const
 ROUTES: Routes = [
   {path: '', component: LandingComponent},

   {path: 'eventos/:id_aluno', component: EventosComponent},
   {path: 'login', component: LoginComponent},
   {path: 'home/:id_aluno', component: PaginaComponent},
   {path: 'perfil/:id_aluno', component: PerfilComponent}
 ]
