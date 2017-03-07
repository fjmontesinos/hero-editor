import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './hero.mock';
/**
 * The consumer of our service doesn't know how the service gets the data. 
 * Our HeroService could get Hero data from anywhere. 
 * It could get the data from a web service or local storage or from a mock 
 * data source.
 */
@Injectable()
export class HeroService {
    // Milisegundos para la llamada a la carga de los héroes
    ms : number;

    getHeroes () : Promise<Hero[]> {
        // Milisegundos entre 0 y 3
        this.ms = (Math.floor(Math.random() * 3) + 0) * 1000;

        // Llamada a promise para simular un delay
        return new Promise((resolve) => setTimeout(() => resolve(HEROES), this.ms));
    }

    getHero(id: number): Promise<Hero> {
        return this.getHeroes().then(heroes => heroes.find(hero => hero.id === id));
    }
}