import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-page.component.html',
})

export class MainPageComponent {
  
    public characters: Character[] = [{

        name: 'Goku',
        power: 10000
    },{
        name: 'Vegeta',
        power: 9500
    },
    {
        name: 'Trunks',
        power: 8500
    }]; 

    onNewCharacter( character: Character ) :void {
    this.characters.push(character);
    }
//*lo de abajo es un método para el borrado de un personaje
    onDeleteCharacter( index: number ) {
    this.characters.splice(index, 1); //borra un elemento a la vez
    }


}