import { Component, Input } from '@angular/core';
import { MovimientoAlumnosService } from 'src/app/services/movimiento-alumnos.service';

@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.component.html',
  styleUrls: ['./grupos.component.css']
})
export class GruposComponent { 

  constructor( public MovimientoAlumnosService: MovimientoAlumnosService ) { }; 

  losGrupos: Array<any> = []; 
  
  @Input () grupo; 
  
  quitarGrupo (i) { 
    this.losGrupos.splice(i, 1); 
  }; 
  mostrarGrupo () {
    this.losGrupos= this.MovimientoAlumnosService.grupoGenerado; 
    console.log(this.losGrupos);
  }; 
}