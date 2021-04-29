import { Component, EventEmitter, Output } from '@angular/core'; 
import { alumnado } from "src/assets/bbddAlumnos";

@Component({
  selector: 'app-lista-alumnos', 
  templateUrl: './lista-alumnos.component.html', 
  styleUrls: ['./lista-alumnos.component.css'] 
}) 
export class ListaAlumnosComponent { 

  alumnos = alumnado; 
  arregloAuxiliar = ["uno","dos","tres","cuatro","cinco","seis","siete"]; 
  arregloParaImprimir: [string]; 
  alumnosSeleccionados: [{"id"?:number,"first_name"?:string,"last_name"?:string,"email"?:string,"avatar"?:string}]; 
  
  @Output() agregarAGrupo = new EventEmitter(); 

  seleccionado (posicion) { 
    console.log(this.alumnos[posicion]); 
    this.alumnosSeleccionados.push(this.alumnos[posicion]); 
    console.log(this.alumnosSeleccionados); 
  } 
  

}
