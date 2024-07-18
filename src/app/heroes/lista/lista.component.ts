import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-lista',
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {
//   public deleteHero?: string;
//   public name:string[]=['spiderman','iroman','hulk','she hulk','ant man'];

//  removeLastHero():void{
//   this.deleteHero =this.name.pop();
//   console.log(this.deleteHero);
//  }
 public name:string[]=['IronMan','Holk','Hokai','Spiderman','sheHolk','AntMan'];
 public heroDelete?:string;

 removeHero():void{
  this.heroDelete=this.name.pop();
 }
}
