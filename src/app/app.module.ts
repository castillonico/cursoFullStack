import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './public/login/login.component';
import { HomeComponent } from './public/home/home.component';
import { PaginaErrorComponent } from './public/pagina-error/pagina-error.component';
import { Pagina1Component } from './intranet/pagina1/pagina1.component';
import { Pagina2Component } from './intranet/pagina2/pagina2.component';
import { Pagina3Component } from './intranet/pagina3/pagina3.component';
import { HeaderComponent } from './public/header/header.component';
import { FooterComponent } from './public/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    PaginaErrorComponent,
    Pagina1Component,
    Pagina2Component,
    Pagina3Component,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
