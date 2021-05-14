import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogueoService { 
  soyAdmin: boolean = false; 
  soyUser: boolean = false; 
  

  toggleAdmin () { 
    this.soyAdmin = !this.soyAdmin; 
    this.soyUser = false; 
    if (this.soyAdmin) {
      console.log("Ingreso Como Admin"); 
    } else {
      console.log("Salgo de ser Admin"); 
    }
  } 

  toggleUser () { 
    this.soyUser = !this.soyUser; 
    this.soyAdmin = false; 
    if (this.soyUser) {
      console.log("Ingreso como Usuario registrado"); 
    } else { 
      console.log("Salgo de ser usuario"); 
    }
  } 

  constructor() { }
}
