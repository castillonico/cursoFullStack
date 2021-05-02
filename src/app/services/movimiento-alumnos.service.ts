import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovimientoAlumnosService {

  seleccionados: Array<any> = []; 
  paraAgregar: Array<any> = []; 
  grupoGenerado: Array<any> = []; 

  constructor() { }
  
  sumandoGenteAlgrupo () {
   this.paraAgregar = this.seleccionados; 
  }; 

  guardarndoElNuevoGrupo () {
    this.grupoGenerado.push(this.paraAgregar); 
    this.paraAgregar = []; 
  }; 


}
