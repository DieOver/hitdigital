import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-hit-button',
  standalone: true,
  imports: [],
  templateUrl: './hit-button.component.html',
  styleUrl: './hit-button.component.scss'
})
export class HitButtonComponent {

  tap = output();

  darkMode = input(false);
  type = input('button');

  clicked() {
    this.tap.emit();
  }

}
