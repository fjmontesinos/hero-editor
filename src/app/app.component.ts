import { Component } from '@angular/core';

@Component({
  selector: 'heroes-app',
  template : `
    <h1>{{title}}</h1>   
    <nav>
        <a routerLink="/my-heroes">Mis Héroes</a>
        <a routerLink="/my-dashboard">Mi Dashboard</a>
    </nav>
    <router-outlet></router-outlet>
  `
})

export class AppComponent {
    title : string = "Tour de Héroes";


}