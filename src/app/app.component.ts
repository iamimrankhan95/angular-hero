import { Component } from '@angular/core';

@Component({
  selector: 'app-root',//name of this component
  templateUrl: './app.component.html',// './' denotes the current directore
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';//these variable can be called directly from html of this Component
}
