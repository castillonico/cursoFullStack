import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-crear-grupo',
  templateUrl: './crear-grupo.component.html',
  styleUrls: ['./crear-grupo.component.css']
})
export class CrearGrupoComponent implements OnInit {

  @Input () listaParaGrupo = []; 
  @Output () elListado = new EventEmitter(); 
  listaDeGrupo = []; 
  
  agregarAlumno () {
    console.log(this.listaParaGrupo); 
    this.listaDeGrupo.push(this.listaParaGrupo); 
  }; 
  quitarAlumno () { 
  }; 

  limpiarGrupo () { 
  }; 
  
  guardarGrupo () { 
    this.elListado.emit(this.listaDeGrupo); 
  }; 
  
  constructor() { }

  ngOnInit(): void {
  }

}
