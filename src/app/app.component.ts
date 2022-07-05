import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { LogService } from './log.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-video-series';

  constructor(
    private logService: LogService,
    private renderer: Renderer2,
    private host: ElementRef
  ) {}

  ngOnInit() {
    this.logService.logMessage('Hello');
    this.renderer.setStyle(this.host.nativeElement, 'color', 'red');
  }
}
