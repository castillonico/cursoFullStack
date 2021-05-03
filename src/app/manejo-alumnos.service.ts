import { Injectable } from '@angular/core';
import { alumnosCompleta } from 'src/environments/alumnado';

@Injectable({
  providedIn: 'root'
})
export class ManejoAlumnosService {

  alumnosSeleccionados = []; 
  grupoPrevio = []; 
  claseCatedra = []; 
  grupos = []; 

  constructor() { }
}
