import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
 public hero: string = 'ironman';
 public name: string = 'Tony';
 public age: number = 45;

 get capitalizandoNom():string{
  return  this.hero.toUpperCase();
 }

 getHeroDescription():string{
  return `${this.hero}- ${this.age}`;
  // return 'hola hijo de '+this.hero.toUpperCase();
 }

 chageHero():void{
   this.hero='spiderman';
 }

 changeAge():void{
  this.age=23;
 }

 recetForm():void{
  this.hero='airoman';
  this.age=45;
 }
}
