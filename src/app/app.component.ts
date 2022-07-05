import { Component } from '@angular/core';
import { Pet } from './pet.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-video-series';
  species: string[] = ['fish', 'cat', 'dog'];
  model: Pet = new Pet(1, 'Goldie', this.species[0]);
  submitted = false;

  onSubmit() {
    this.submitted = true;
  }
}
