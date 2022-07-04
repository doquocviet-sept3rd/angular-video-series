import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  itemImageUrl: string = 'https://i.ytimg.com/vi/ytqF0N3nWj4/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAXwExHWS-weZp_JANFykNmjgpuXQ';
  isUnchanged: boolean = true;
}
