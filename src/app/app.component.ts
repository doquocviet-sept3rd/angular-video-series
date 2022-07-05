import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <p [appHighlight]='"red"'>Test</p>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-video-series';
}
