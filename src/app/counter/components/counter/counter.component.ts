
// import { Component } from '@angular/core';

import { Component } from "@angular/core";

// @Component({
//   selector: 'app-counter',
//   templateUrl: './counter.component.html',
//   styleUrl: './counter.component.css'
// })
// export class CounterComponent {

// }

@Component({
  selector:'app-counter',
  template:`
  <h2>el numero: <div style="background-color: black; color: aliceblue;">{{counter}}</div> </h2>
  <button (click)="contador(10)">Incrementar</button>
  <button (click)="recet()">Recet</button>
  <button (click)="contador(-10)">Decrementar</button>`
})
export class CounterComponent{
  counter:number=100;
  valor:number=this.counter;
  contador(value:number):void{
    this.counter+=value;
  }
  recet():void{
    this.counter=this.valor;
  }
}
