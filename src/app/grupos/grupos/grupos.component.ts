import { Component, OnInit } from '@angular/core';
import { ManejoAlumnosService } from 'src/app/manejo-alumnos.service';

@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.component.html',
  styleUrls: ['./grupos.component.css']
})
export class GruposComponent implements OnInit {  

  listaDeGrupos= []; 

  constructor( public manejoAlumnosService: ManejoAlumnosService ) { }

  ngOnInit(): void { 
    this.listaDeGrupos = this.manejoAlumnosService.grupos; 
  } 

}
