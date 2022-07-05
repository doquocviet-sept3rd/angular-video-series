import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `

    <div [ngClass]='isSpecial ? "special" : ""'>Example1</div>
    <div [ngClass]='currenClasses'>Example2</div>
    <div [ngStyle]='currentStyles'>Example3</div>

    <label for='example'>{{name}}</label>
    <input [(ngModel)]='name' id='example' />

  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  name: string = 'label';

  ngOnInit(): void {
    this.setCurrentClass();
    this.setCurrentStyles();
  }

  title = 'angular-video-series';
  isSpecial: boolean = true;
  currenClasses: Object = {};
  currentStyles: Object = {};

  setCurrentClass() {
    this.currenClasses = {
      savable: true,
      modified: false,
      special: true
    };
  }

  setCurrentStyles() {
    this.currentStyles = {
      'font-style': 'italic',
      'font-weight': '700'
    };
  }

}
