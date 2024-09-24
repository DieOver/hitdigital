import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HitButtonComponent } from './shared/components/hit-button/hit-button.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HitButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  navController = inject(Router);

  goTo(page: string) {
    this.navController.navigate(['/', page]);
  }

}
