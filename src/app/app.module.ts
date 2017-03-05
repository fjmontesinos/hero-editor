import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent }  from './app.component';
import { MyHeroesComponent }  from './my-heroes.component';
import { MyHeroDashboardComponent }  from './my-heroes.dashboard.component';
import { HeroDetailComponent } from './hero-detail.component';

import { HeroService } from './hero.service';


@NgModule({
  imports:      [ 
      BrowserModule, 
      FormsModule ,
      AppRoutingModule
    ],

  declarations: [ AppComponent, MyHeroesComponent, MyHeroDashboardComponent, HeroDetailComponent],
  
  providers:    [ HeroService], 
  
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
