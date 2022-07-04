import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <button (click)='onSave()'>Save</button>
    <app-item-details (deleteRequest)='deleteItem($event)'></app-item-details>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-video-series';

  onSave(): void {
    window.alert('click on save');
  }

  deleteItem(item: any) {
    window.alert(item)
  }

}
