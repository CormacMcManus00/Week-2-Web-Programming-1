import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'To-Do List';
  thingsToDo = [
    'learn Javascript',
    'learn Angular',
    'learn Redux'
  ];
  thingsCompleted = [];

  summary():string {
    return `${this.thingsToDo.length} to do / ${this.thingsCompleted.length} done`;
  }

  constructor() {
    setInterval(() => {
      this.thingsToDo.push('make coffee');
    }, 1000)
  }
}
