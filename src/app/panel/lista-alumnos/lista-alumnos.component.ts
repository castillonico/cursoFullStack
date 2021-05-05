import { Component } from '@angular/core'; 
import { MovimientoAlumnosService } from 'src/app/services/movimiento-alumnos.service';
import { alumnado } from "src/assets/bbddAlumnos";

@Component({
  selector: 'app-lista-alumnos', 
  templateUrl: './lista-alumnos.component.html', 
  styleUrls: ['./lista-alumnos.component.css'] 
}) 
export class ListaAlumnosComponent { 
  constructor ( public MovimientoAlumnosService: MovimientoAlumnosService) {}; 

  alumnos = alumnado; 

  seleccionado (item) { 
    this.MovimientoAlumnosService.sumandoGenteAlgrupo(item); 
  } 
} 
