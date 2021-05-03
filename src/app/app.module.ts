import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlumnosComponent } from './alumnos/alumnos/alumnos.component';
import { CrearGruposComponent } from './crearGrupos/crear-grupos/crear-grupos.component';
import { GruposComponent } from './grupos/grupos/grupos.component';

@NgModule({
  declarations: [
    AppComponent,
    AlumnosComponent,
    CrearGruposComponent,
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
