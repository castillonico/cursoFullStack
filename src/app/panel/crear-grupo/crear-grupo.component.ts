import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MovimientoAlumnosService } from 'src/app/services/movimiento-alumnos.service';

@Component({
  selector: 'app-crear-grupo',
  templateUrl: './crear-grupo.component.html',
  styleUrls: ['./crear-grupo.component.css']
})
export class CrearGrupoComponent implements OnInit {

  listaParaGrupo = [];
  
  agregarAlumno () { 
      this.listaParaGrupo = this.MovimientoAlumnosService.mostrarLosSeleccionados(); 
      console.log (this.listaParaGrupo); 
  }; 
  
  quitarAlumno (i) { 
    this.listaParaGrupo = this.MovimientoAlumnosService.quitarUnAlumno(i); 
  }; 

  limpiarGrupo () { 
    this.listaParaGrupo = [];  
    this.MovimientoAlumnosService.limpiarSeleccionados(); 
  }; 
  
  guardarGrupo (elNuevoGrupo) { 
    if (elNuevoGrupo === []) { 
      console.log("no hay alumnos para agregar un grupo..."); 
      return;
    } else {
      this.MovimientoAlumnosService.guardarndoElNuevoGrupo(elNuevoGrupo); 
      this.listaParaGrupo = [];
    } 
  }; 
  
  constructor ( public MovimientoAlumnosService: MovimientoAlumnosService ) { }


  ngOnInit(): void {
  }

}
