import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  constructor(private dbzService: DbzService) {
  }

  deleteCharacterById( id: string ): void {
    this.dbzService.deleteCharacterById( id );
  }

  getCharacters(): Character[] {
    return this.dbzService.characters;
  }

  onNewCharacter(character: Character): void {
    this.dbzService.onNewCharacter(character);
  }

}
