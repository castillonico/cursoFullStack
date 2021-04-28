import { Component, EventEmitter, OnInit, Output } from '@angular/core'; 
import { alumnado } from "src/assets/bbddAlumnos";

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})
export class ListaAlumnosComponent implements OnInit {

  alumnos = alumnado; 
  alumnosSeleccionados; 
  @Output() agregarAGrupo = new EventEmitter(); 


  seleccionado (posicion) { 
    this.alumnosSeleccionados.push(this.alumnos[posicion]); 
    console.log(this.alumnosSeleccionados); 
  } 
  
  constructor() { }

  ngOnInit(): void {
  }

}
