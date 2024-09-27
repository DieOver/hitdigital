import { Component, inject, signal } from '@angular/core';
import { HitTitleComponent } from '../../shared/components/hit-title/hit-title.component';
import { HitService } from '../../shared/services/hit/hit.service';
import { HitCardComponent } from '../../shared/components/hit-card/hit-card.component';
import { CommonModule } from '@angular/common';
import { tap } from 'rxjs';
import { HitLoaderComponent } from '../../shared/components/hit-loader/hit-loader.component';
import { HitButtonComponent } from "../../shared/components/hit-button/hit-button.component";

@Component({
  selector: 'app-introduction',
  standalone: true,
  imports: [CommonModule, HitTitleComponent, HitCardComponent, HitLoaderComponent, HitButtonComponent],
  templateUrl: './introduction.component.html',
  styleUrl: './introduction.component.scss',
})
export class IntroductionComponent {

  hitService = inject(HitService);

  hasError = signal(false);

  data$ = this.hitService.getHit().pipe(
    tap({
      error: (error) => {
        this.hasError.set(true);
        console.error('Erro ao carregar dados', error);
      },
    })
  );

  reload() {
    window.location.reload();
  }

}
