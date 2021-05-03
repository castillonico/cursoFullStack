import { Component, OnInit } from '@angular/core';
import { ManejoAlumnosService } from 'src/app/manejo-alumnos.service';
import { alumnosCompleta } from 'src/environments/alumnado';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {
  listaAlumnos = alumnosCompleta; 

  constructor( public manejoAlumnosService: ManejoAlumnosService ) { }
  ngOnInit(): void { } 

  alumnoParaAgregar (index) { 
    this.manejoAlumnosService.alumnosSeleccionados.push(this.listaAlumnos[index]); 
    console.log("La lista actual de alumnos es: ", this.manejoAlumnosService.alumnosSeleccionados); 
  }
}
