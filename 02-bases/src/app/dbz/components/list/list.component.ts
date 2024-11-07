import { Component, Input } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  //*nunca crearemos con tipo any, ya que TypeScript pierde el poder sobre las propiedades de la clase
  //*la mejor manera si no sabemos es crear interfaces

  @Input()
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 10
  }]
    

}
