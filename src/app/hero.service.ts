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

    getHeroes () : Hero[] {
        return HEROES;
    }

}