import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
}) 
export class ContadorComponent { 
  @Input() cuenta = 0; 
  @Input() diferencial = 1; 
  @Output() resultado = new EventEmitter<number>(); 

  sumarContador () { 
    this.cuenta = this.cuenta + this.diferencial; 
    this.resultado.emit(this.cuenta); 
  } 
  restarContador () {
    this.cuenta = this.cuenta - this.diferencial; 
    this.resultado.emit(this.cuenta); 
  } 
} 
