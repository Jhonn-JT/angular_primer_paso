import { Component ,Input} from '@angular/core';
import { Persona } from '../../interface/persona.interface';
@Component({
  selector: 'app-list-person',
  templateUrl: './list-person.component.html',
  styleUrl: './list-person.component.css'
})
export class ListPersonComponent {
@Input()
public listPersona:Persona[]=[
  {nombre:'jorge',
   power:2000
}
];


}
