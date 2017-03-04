import { Component, Input, Output } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'hero-detail',
  template: `
    <div *ngIf="hero" style="float:left;margin-left:20px">
      <h2>{{hero.name}} details!</h2>
      <div><label>Id : </label> {{hero.id}}</div>
      <div>
        <label>Name : </label> 
        <input [(ngModel)]="hero.name" placeholder="name" />
      </div>
      <div style="margin-top:20px">
        <button (click)="ocultarHeroDetail()">Ocultar</button>
      </div>
    </div>
    `
})

export class HeroDetailComponent {
    @Input()
    @Output('selectedHero')
    hero : Hero;
    ocultarHeroDetail() : void {
      this.hero = undefined;
    }
}