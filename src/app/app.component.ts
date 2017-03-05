import { Component } from '@angular/core';

@Component({
  selector: 'heroes-app',
  template : `
    <h1>{{title}}</h1>   

    <my-heroes></my-heroes> 
  `
})

export class AppComponent {
    title : string = "Tour de Héroes";


}