import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ArgumentUnitProject';

  myLinks: Array<{name: string, value: string}> = [
    {"name": 'home', "value": 'home-component'},
    {"name": 'pros', "value": 'pros-component'},
    {"name": 'cons', "value": 'cons-component'},
    {"name": 'future-use', "value": 'future-use-component'},
    {"name": 'sources', "value": 'sources-component'}
  ]

  currDisplay: string = "";
  showMenu: boolean = false;

  constructor(){
    this.currDisplay = "";
    this.showMenu = false;
  }

  switchContent(value: string){
    this.currDisplay = value;
  }

  changeMenuDisplay(){
    this.showMenu = !this.showMenu;
  }
}
