import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';


@Component({
  moduleId: module.id,
  selector: 'my-heroes',
  templateUrl: './views/my-heroes.component.html',
  // MUY IMPORTANTE
  // When we assign styles to a component they are scoped to that specific component.
  styleUrls: ['./css/hero.css']
})

export class MyHeroesComponent implements OnInit { 
  heroesGet : boolean = false;
  heroes : Hero[];

  selectedHero: Hero;

  constructor(private heroService: HeroService) { };

  ngOnInit() : void {
    this.heroService.getHeroes().then((retHeros) => 
        new Promise((resolve) => 
          setTimeout (() => {
            this.heroes = retHeros;
            this.heroesGet = true;            
          }
          , 2000))
      );
  }

  onSelect(hero : Hero) : void {
    this.selectedHero = hero;
  }
}