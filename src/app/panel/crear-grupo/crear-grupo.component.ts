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
      this.listaParaGrupo = this.MovimientoAlumnosService.seleccionados; 
      this.MovimientoAlumnosService.seleccionados = []; 
      console.log (this.listaParaGrupo); 
  }; 
  
  quitarAlumno () { 
    this.listaParaGrupo.splice(this.listaParaGrupo.length, 1); 
    this.MovimientoAlumnosService.seleccionados = this.listaParaGrupo; 
  }; 

  limpiarGrupo () { 
    this.listaParaGrupo = [];  
    this.MovimientoAlumnosService.seleccionados = this.listaParaGrupo; 
  }; 
  
  guardarGrupo (elNuevoGrupo) { 
     this.MovimientoAlumnosService.grupoGenerado.push(elNuevoGrupo); 
     this.listaParaGrupo = []; 
  }; 
  
  constructor ( public MovimientoAlumnosService: MovimientoAlumnosService ) { }


  ngOnInit(): void {
  }

}
