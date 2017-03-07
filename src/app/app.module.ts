import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './services/hero.in-memory.service';

import { AppComponent }  from './app.component';
import { MyHeroesComponent }  from './my-heroes.component';
import { MyHeroDashboardComponent }  from './my-heroes.dashboard.component';
import { HeroDetailComponent } from './hero-detail.component';

import { HeroService } from './hero.service';


@NgModule({
  imports:      [ 
      BrowserModule, 
      FormsModule ,
      HttpModule,
      InMemoryWebApiModule.forRoot(InMemoryDataService),
      AppRoutingModule
    ],

  declarations: [ AppComponent, MyHeroesComponent, MyHeroDashboardComponent, HeroDetailComponent],
  
  providers:    [ HeroService], 
  
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
