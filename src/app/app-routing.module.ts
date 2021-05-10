import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 

import { Pagina1Component } from './intranet/pagina1/pagina1.component';
import { Pagina2Component } from './intranet/pagina2/pagina2.component';
import { Pagina3Component } from './intranet/pagina3/pagina3.component';
import { HomeComponent } from './public/home/home.component';
import { LoginComponent } from './public/login/login.component';
import { PaginaErrorComponent } from './public/pagina-error/pagina-error.component';

const routes: Routes = [
  { path: '**', component: PaginaErrorComponent }, 
  { path: 'home', component: HomeComponent }, 
  { path: 'login', component: LoginComponent }, 
  { path: 'pagina1', component: Pagina1Component }, 
  { path: 'pagina2', component: Pagina2Component }, 
  { path: 'pagina3', component: Pagina3Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
