import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LogueoService } from './logueo.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor ( private logueo: LogueoService ) {}

  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      if (this.logueo.soyAdmin) {
        console.log("Puede ingresar, es Admin"); 
      } else {
        alert("No tiene permisos para ingresar a este Sitio"); 
      }
    return this.logueo.soyAdmin; 
  } 
  
}
