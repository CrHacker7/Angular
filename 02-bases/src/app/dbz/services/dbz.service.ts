import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { Character } from '../interfaces/character.interface';

@Injectable({
    providedIn: 'root'
})
export class DbzService {
    public characters: Character[] = [{

        id: uuid(),
        name: 'Goku',
        power: 10000
    }, {
        id: uuid(),
        name: 'Vegeta',
        power: 9500
    },
    {
        id: uuid(),
        name: 'Trunks',
        power: 8500
    }];
   
    //*lo de abajo es un método para el borrado de un personaje
   // onDeleteCharacter(index: number) {
      //  this.characters .splice(index, 1); //borra un elemento a la vez
    deleteCharacterById(id: string) {
        this.characters = this.characters.filter( character => character.id !== id );
    }

    addCharacter(character: Character): void {

        const newCharacter: Character = { id: uuid(), ...character }

        this.characters.push(newCharacter);
    }

    
}