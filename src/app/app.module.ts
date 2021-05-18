import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PanelComponent } from './panel/panel.component';
import { ListaAlumnosComponent } from './panel/lista-alumnos/lista-alumnos.component';
import { CrearGrupoComponent } from './panel/crear-grupo/crear-grupo.component';
import { GruposComponent } from './panel/grupos/grupos.component';

@NgModule({
  declarations: [
    AppComponent,
    PanelComponent,
    ListaAlumnosComponent,
    CrearGrupoComponent,
    GruposComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
