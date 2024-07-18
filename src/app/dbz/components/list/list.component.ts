import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interface/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input()
  public characterList:Character[]=[];


 @Output()
 public onDeleteId:EventEmitter<string>=new EventEmitter();


 deleteById(id?:string){
  if(!id)return;
  console.log(id);
  this.onDeleteId.emit(id);
 }

  // onDeleteCharacter(index:number):void{
  //   console.log('estamos en lista',{index});
  //  this.onDeleteId.emit(index);
  // }





  // onDeleteIdEmit():void{
  //  this.onDeleteId.emit(this.ind);
  //  console.log(this.ind);
  //   }
}
