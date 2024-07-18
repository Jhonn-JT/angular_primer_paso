import { Character } from './../interface/character.interface';
import { Injectable } from '@angular/core';
import { v4 as uuid}from 'uuid';
console.log('identificador unico',uuid());
@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public character:Character[]=[
    {
      id:uuid(),
      name:'Goku',
      power:9500
    },{
      id:uuid(),
      name:'Vegeta',
      power:7500
    },{
      id:uuid(),
      name:'Krilin',
      power:500
    },{
      id:uuid(),
      name:'Jhonn',
      power:99999
    }
  ];

  addCharacter(character:Character):void{
    // console.log('Mainpage mesaje recibido de hijo');
    // console.log(character);
    const newCharacter:Character={id:uuid(),...character}
    this.character.push(newCharacter);
  }


  // onDeleteCharacter(index:number):void{
  //    this.character.splice(index,1);
  //   console.log('mesaje recivido de list',{index});
  //   console.log(index);
  // }
  deleteCharacterById(id:string){
    console.log('mensaje recivido',{id});
this.character=this.character.filter(character=>character.id!==id);
  }
}
