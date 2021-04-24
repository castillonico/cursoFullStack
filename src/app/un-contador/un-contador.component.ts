import { Component } from '@angular/core';

@Component({
  selector: 'app-un-contador', 
  templateUrl: './un-contador.component.html', 
  styleUrls: ['./un-contador.component.css'] 
})
export class UnContadorComponent { 
  inicio = 0; 
  variacion = 1; 
  nuevoInicio = 0; 
  nuevoVariacion = 1; 

  asignarInicio (valor) { 
    this.inicio = valor; 
  } 

  asignarVariacion (valor) { 
    this.variacion = valor; 
  }

  configurarContador () { 
    this.nuevoInicio = this.inicio; 
    this.nuevoVariacion = this.variacion; 
  } 
  
}
