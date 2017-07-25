/**
 * app root component
 * location : src/app/app.component.ts
 */
import { Component } from '@angular/core';
import '!style-loader!css-loader!sass-loader!../../public/styles.css';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { }