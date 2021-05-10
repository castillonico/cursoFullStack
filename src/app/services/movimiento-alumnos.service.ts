import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
}) 

export class MovimientoAlumnosService {

  seleccionados: Array<any> = []; 
  paraAgregar: Array<any> = []; 
  grupoGenerado: Array<any> = []; 

  constructor() { }
  
  sumandoGenteAlgrupo (item) {
   this.seleccionados.push(item);  
  }; 

  mostrarLosSeleccionados () { 
    if (this.seleccionados !== []) { 
      let seleccion = this.seleccionados 
      this.seleccionados = []; 
      return seleccion; 
    } 
    else { 
      console.log("no hay alumnos para agregar") 
    }; 
  }; 

  limpiarSeleccionados () { 
    this.seleccionados = []; 
  } 

  quitarUnAlumno (i) { 
    this.seleccionados.splice(i, 1); 
    return this.seleccionados; 
  }

  guardarndoElNuevoGrupo (lista) {
    this.grupoGenerado.push(lista); 
  }; 


}
