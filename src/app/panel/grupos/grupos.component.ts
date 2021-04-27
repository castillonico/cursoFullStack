import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.component.html',
  styleUrls: ['./grupos.component.css']
})
export class GruposComponent implements OnInit {

  losGrupos = []; 
  grupo: {
    nombre: string, 
    cantidadAlumnos, 
  }; 

  quitarGrupo () { 

  }; 
  mostrarGrupo () {

  }; 
  constructor() { }; 

  ngOnInit(): void {
  }; 

}
