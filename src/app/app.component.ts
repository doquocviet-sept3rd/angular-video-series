import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div *ngIf='isActive'>Active</div>

    <div *ngFor='let item of items; let i = index'>
      <div>{{i}} - {{item.name}}</div>
    </div>

    <div [ngSwitch]='parent'>
      <div *ngSwitchCase='"bob"'>Hi Bob</div>
      <div *ngSwitchCase='"bar"'>Hi Bar</div>
      <div *ngSwitchDefault>Hi ho</div>
    </div>

  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-video-series';
  isActive: boolean = true;

  items: { name: string }[] = [
    { name: 'bob' },
    { name: 'foo' },
    { name: 'bar' }
  ];

  parent: string = '1';

  ngOnInit() {
    setInterval(() => {
      this.isActive = Date.now().valueOf() % 2 === 0;
    }, 1000);
  }
}
