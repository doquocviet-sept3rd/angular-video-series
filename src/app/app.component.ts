import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `

    <p [attr.attribute-you-are-tageting]='1 + 1 + "expression"'></p>
    <tr>
      <td [attr.colspan]='1 + 1'>attribute</td>
    </tr>

    <div [class.sale]='onSale'></div>
    <div [class]='"classOne classTwo classThree"'></div>
    <div [class]='["classOne", "classTwo", "classThree"]'></div>
    <div [class]='{classOne: true, classTwo: true}'></div>

    <div [style]='"width: 300px; height: 300px; background-color: red"'></div>
    <div [style.width]='width'></div>
    <div [style.background-color]='red'></div>
    <div [style]='{width: "50px", height: "50px", backgroundColor: "red"}'></div>

  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-video-series';
  onSale = true;
  width = 1;
  red = 'red';
}
