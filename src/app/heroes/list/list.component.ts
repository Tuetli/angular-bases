import { Component } from '@angular/core';
import { last } from 'rxjs';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroNames: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor'];
  public deletedHeroName: string = '';

  public removeLastHero() {
    let lastHeroName: string = this.heroNames[(this.heroNames.length) - 1];
    this.heroNames.pop();

    console.log('Last Hero Name: ', lastHeroName);
    this.deletedHeroName = lastHeroName;
  }

}
