import { Component } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent { 
  listaPrevia; 
  manejoAlumnos; 

  guardarGrupo (elGrupo) { 
    this.manejoAlumnos = elGrupo; 
  } 
  sumarAlumnosALista (lista) { 
    this.listaPrevia.push(lista); 
  } 

}
