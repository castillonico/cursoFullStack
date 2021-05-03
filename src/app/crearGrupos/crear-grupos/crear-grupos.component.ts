import { Component, OnInit } from '@angular/core';
import { ManejoAlumnosService } from 'src/app/manejo-alumnos.service';

@Component({
  selector: 'app-crear-grupos',
  templateUrl: './crear-grupos.component.html',
  styleUrls: ['./crear-grupos.component.css']
})
export class CrearGruposComponent implements OnInit {

  vistaPreviaGrupo = []; 
  
  quitarAlumno (index) { 
    console.log("vamos a eliminar de la lista a: ", this.manejoAlumnosService.alumnosSeleccionados[index]); 
    this.manejoAlumnosService.alumnosSeleccionados.splice(index, 1); 
    this.vistaPreviaGrupo = this.manejoAlumnosService.alumnosSeleccionados; 
  } 
  guardarGrupo () { 
    console.log("Está por guardar el Grupo previsualizado..."); 
    this.manejoAlumnosService.grupos.push(this.vistaPreviaGrupo); 
    this.vistaPreviaGrupo = []; 
    this.manejoAlumnosService.alumnosSeleccionados = []; 
  } 

  constructor( public manejoAlumnosService : ManejoAlumnosService ) { } 

  ngOnInit(): void { 
    this.vistaPreviaGrupo = this.manejoAlumnosService.alumnosSeleccionados; 
   } 

}
