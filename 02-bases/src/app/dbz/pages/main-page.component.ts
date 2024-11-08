import { DbzService } from './../services/dbz.service';
import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-page.component.html',
})

export class MainPageComponent {
  //*Esto hace la inyeccion de dependencia del servicio DbzService
    constructor( public dbzService : DbzService ) {
        

    }

}