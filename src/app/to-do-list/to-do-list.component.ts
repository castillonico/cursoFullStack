import { Component } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent { 
  lista = [];  
  
  agregarTarea (laTarea) { 
    if (laTarea.value === '') { 
      console.log("no hay tarea para agregar...")
      return
    }
    this.lista.push ({
      descripcion : laTarea.value, 
      estado : false
    }); 
    console.log("agrego una tarea a la lista... "); 
    laTarea.value = '';
    console.log(this.lista) 
  } 

  quitarTarea (posicion) { 
    this.lista.splice(posicion, 1); 
    console.log("quito la tarea... "); 
  } 




}
