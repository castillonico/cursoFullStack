import { Component } from '@angular/core';

@Component({
  selector: 'app-ej-ng-if',
  templateUrl: './ej-ng-if.component.html',
  styleUrls: ['./ej-ng-if.component.css']
})
export class EjNgIfComponent {

  usuario = {
    nombre: String, 
    apellido: String
  } 
  registroUsr = false; 

  registrarUsuario (nombrePila, apellido) { 
    this.usuario.nombre = nombrePila.value; 
    console.log("El nombre registrado es: ", this.usuario.nombre); 
    this.usuario.apellido = apellido.value; 
    console.log("El apellido registrado es: ", this.usuario.apellido);  
    nombrePila.value = ""; 
    apellido.value = ""; 
    this.registroUsr = true; 
  }

  inicializarRegistroUsr () { 
    this.registroUsr = false; 
  }
}
