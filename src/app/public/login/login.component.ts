import { Component, OnInit } from '@angular/core';
import { LogueoService } from 'src/app/logueo.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private logueo: LogueoService ) { } 
  tipoUsuario= "Primera Visita"; 

  ingresarAdmin () { 
    this.logueo.toggleAdmin(); 
  } 

  ingresarUser () { 
    this.tipoUsuario = "Usuario"; 
    this.logueo.toggleUser(); 
  } 

  ngOnInit(): void {
  }

}
