import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { MyHeroesComponent }  from './my-heroes.component';
import { MyHeroDashboardComponent }  from './my-heroes.dashboard.component';
import { HeroDetailComponent } from './hero-detail.component';

import { HeroService } from './hero.service';


@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule ,

    // Routes tell the router which views to display when a user clicks a link 
    // or pastes a URL into the browser address bar.
    RouterModule.forRoot([
        {
          path: 'my-heroes',
          component: MyHeroesComponent
        },
        {
          path: 'my-dashboard',
          component: MyHeroDashboardComponent
        },

        /**
         * We want the app to show the dashboard when it starts and we want to see a 
         * nice URL in the browser address bar that says /dashboard. Remember that the 
         * browser launches with / in the address bar.
         */
        {
          path: '',
          redirectTo: 'my-dashboard',
          pathMatch: 'full'
        }
      ])

    ],

  declarations: [ AppComponent, MyHeroesComponent, MyHeroDashboardComponent, HeroDetailComponent],
  
  providers:    [ HeroService], 
  
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
