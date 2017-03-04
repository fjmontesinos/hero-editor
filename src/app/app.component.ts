import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';


@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    
    <h2>Mis Héroes</h2>
    
    <div *ngIf="!this.heroesGet">
      Obteniendo listado de héroes favoritos...
    </div>

    <div *ngIf="( (this.heroesGet) && (heroes.length == 0) )">
      UPS !!! No hay heroes en tu carpeta de favoritos.
    </div>

    <ul class="heroes">
      <li *ngFor="let hero of heroes" 
        [class.selected]="hero === selectedHero"
        (click)="onSelect(hero)">
        <!-- cada heroe irá aquí -->
        <span class="badge">{{hero.id}}</span> {{hero.name}}
      </li>
    </ul>

    <hero-detail [hero]="selectedHero"></hero-detail>
  `,

  // MUY IMPORTANTE
  // When we assign styles to a component they are scoped to that specific component.
  styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .heroes {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
      float:left;
    }
    .heroes li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .heroes li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .heroes li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .heroes .text {
      position: relative;
      top: -3px;
    }
    .heroes .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `],
  providers: [HeroService]
})

export class AppComponent implements OnInit { 
  heroesGet : boolean = false;
  title = 'Tour de Héroes';
  heroes : Hero[];

  selectedHero: Hero;

  constructor(private heroService: HeroService) { };

  ngOnInit() : void {
    this.heroService.getHeroes().then((retHeros) => 
        new Promise((resolve) => 
          setTimeout (() => {
            this.heroes = retHeros;
            this.heroesGet = true;
            // console.log(retHeros);
          }
          , 2000))
      );
  }

  onSelect(hero : Hero) : void {
    this.selectedHero = hero;
  }
}