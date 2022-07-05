import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Angular router app</h1>

    <nav>
      <ul>
        <li><a routerLink='/first-component/1'>First Component</a></li>
        <li><a routerLink='/second-component'>Second Component</a></li>
      </ul>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-video-series';
}
