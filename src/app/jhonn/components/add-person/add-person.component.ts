import { Component ,EventEmitter,Output} from '@angular/core';
import { Persona } from '../../interface/persona.interface';
@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrl: './add-person.component.css'
})
export class AddPersonComponent {
@Output()
public nuevaPersona:EventEmitter<Persona>=new EventEmitter();

public persona:Persona={
  nombre:'',
  power:0
}
emitPerson(){
  console.log(this.persona);
  this.nuevaPersona.emit(this.persona);
  this.persona={
    nombre:'',
    power:0
  };
}

}
