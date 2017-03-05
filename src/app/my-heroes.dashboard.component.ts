import { Component, OnInit } from '@angular/core';
import { HeroService } from './hero.service';
import { Hero } from './hero';

@Component({
    moduleId: module.id,
    selector: 'my-dashboard',
    templateUrl: './views/my-heroes.dashboard.component.html',
    styleUrls: ['./css/dashboard.component.css']

})

export class MyHeroDashboardComponent implements OnInit {
    heroesGet : boolean = false;
    heroes : Hero[];
    constructor (private heroService : HeroService){ }

    ngOnInit() : void {
        this.heroService.getHeroes().then((retHeros) => 
            new Promise((resolve) => 
            setTimeout (() => {
                this.heroes = retHeros.slice(0, 5);
                this.heroesGet = true;            
            }
            , 1000))
        );
    }
}
