import { Character } from './../interface/character.interface';
import { Component} from '@angular/core';
import { DbzService } from '../service/dbz-service.service';


@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-pages.component.html'
})

export class MainPageComponent {

  constructor(private dbzService:DbzService){}

  get characters():Character[]{
  return [...this.dbzService.character];
  // return this.dbzService.character;esta son las 2 formas de retornar la lista de char...l
  }

  onDeleteId(id:string):void{
   this.dbzService.deleteCharacterById(id);
  }
  onNewCharacter(character:Character):void{
    this.dbzService.addCharacter(character);

  }
}
