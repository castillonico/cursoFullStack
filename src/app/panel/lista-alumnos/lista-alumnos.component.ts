import { Component, OnInit } from '@angular/core'; 
import { alumnado } from "src/assets/bbddAlumnos";

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})
export class ListaAlumnosComponent implements OnInit {

  alumnos = alumnado; 
  alumnosSeleccionados; 



  seleccionado (posicion) { 
    this.alumnosSeleccionados.push(this.alumnos[posicion]); 
    
    console.log(this.alumnosSeleccionados); 
  } 
  constructor() { }

  ngOnInit(): void {
  }

}
