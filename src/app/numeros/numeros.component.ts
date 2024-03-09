import { Component } from '@angular/core';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.component.html',
  styleUrls: ['./numeros.component.css']
})
export class NumerosComponent {
  resultado = 0;

  operando: number = 0;
  operador: number = 0;

  operar(){
    this.resultado = this.operando + this.operador;
    this.operador=0;
    this.operando=0;
  }
  
}
