import { Component } from '@angular/core';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.component.html',
  styleUrls: ['./numeros.component.css']
})
export class NumerosComponent {
  titulo = 'Aplicación Calculadora';
  resultado = 0;

  operando: number = 0;
  operador: number = 0;

  operar(){
    this.resultado = this.operando + this.operador;
  }
  
}
