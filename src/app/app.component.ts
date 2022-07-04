import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  showText = false;

  toggleText(event: any): void {
    this.showText = !this.showText;
    console.log(event);
  }
}
