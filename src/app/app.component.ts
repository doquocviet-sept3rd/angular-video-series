import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <input #phone placeholder='phone' type='text' />
    <button (click)='callPhone(phone.value)'>Call</button>

    <input #ref1 type='text' [(ngModel)]='inputValue' />
    <span *ngIf='true'>{{ref1.value}}</span>

    <input #ref1 type='text' [(ngModel)]='inputValue' />
    <ng-template [ngIf]='true'>
      <span>{{ref1.value}}</span>
    </ng-template>

  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-video-series';
  inputValue: string = '';

  callPhone(phone: string) {
    window.alert(phone);
  }
}
