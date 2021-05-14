import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LogueoService } from './logueo.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate { 
  constructor ( private logueo: LogueoService ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.logueo.soyUser) { 
      console.log("puede ingresar, es un Usuario registrado"); 
    } else {
      alert("No tiene permisos para ingresar a este Sitio"); 
    }
    return this.logueo.soyUser; 
  }
  
}
