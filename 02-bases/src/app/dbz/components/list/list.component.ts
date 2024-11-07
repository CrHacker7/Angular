import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Output()
  //*dos maneras de hacerlo:
  //* public onDelete = new EventEmitter<number>();
  public onDelete: EventEmitter<number> = new EventEmitter();
  
  //TODO: EMITIR EL ID DEL PERSONAJE
  onDeleteCharacter(index: number) :void {
    this.onDelete.emit(index);
   // console.log({index}); //para que aparezca la palabra index en consola
  //  console.log('Personaje eliminado');
  };
}
