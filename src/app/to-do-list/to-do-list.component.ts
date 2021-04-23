import { Component } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent { 
  lista = [];  
  
  agregarTarea (laTarea) { 
    this.lista.push ({
      descripcion : laTarea.value, 
      estado : false
    }); 
    console.log("agrego una tarea a la lista... "); 
    console.log(this.lista)
  } 

  quitarTarea () { 
    console.log("quito la tarea... "); 
  } 




}
