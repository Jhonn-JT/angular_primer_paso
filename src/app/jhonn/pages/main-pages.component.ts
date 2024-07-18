import { Component } from '@angular/core';
import { Persona } from '../interface/persona.interface';

@Component({
  selector: 'app-main-pages',
  templateUrl: './main-pages.component.html',

})
export class MainPagesComponent {

  public persona:Persona[]=[
    {
      nombre:'jhonn',
       power:999
    },{
      nombre:'rafa',
      power:2000
    },{
      nombre:'jef',
      power:1000
    }
  ];

 nuevaPersona(persona:Persona):void{
console.log('mendaje de recivido del add-person en main-pages');
console.log(persona);
 }
}
