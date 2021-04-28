import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.component.html',
  styleUrls: ['./grupos.component.css']
})
export class GruposComponent implements OnInit {
  losGrupos = [];
  @Input () grupo: {nombre, alumnos }; 

  quitarGrupo () { 

  }; 
  mostrarGrupo () {

  }; 
  constructor() { }; 

  ngOnInit(): void {
  }; 

}
