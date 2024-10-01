import { Component, inject, signal } from '@angular/core';
import { HitTitleComponent } from '../../shared/components/hit-title/hit-title.component';
import { HitCardComponent } from '../../shared/components/hit-card/hit-card.component';
import { CommonModule } from '@angular/common';
import { tap } from 'rxjs';
import { HitLoaderComponent } from '../../shared/components/hit-loader/hit-loader.component';
import { HitButtonComponent } from "../../shared/components/hit-button/hit-button.component";
import { HitServiceContractService } from '../../shared/services/hit/hit.service.contract';
import { EMethod } from '../../shared/enums/EMethod';

@Component({
  selector: 'app-introduction',
  standalone: true,
  imports: [CommonModule, HitTitleComponent, HitCardComponent, HitLoaderComponent, HitButtonComponent],
  templateUrl: './introduction.component.html',
  styleUrl: './introduction.component.scss'
})
export class IntroductionComponent {

  hitService = inject(HitServiceContractService);
  hasError = signal(false);

  progress = 0;
  downloadedFile?: Blob;

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

  // startDownload() {
  //   const url = 'https://images.unsplash.com/photo-1557496866-e27ec3a7e4ef?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
  //   this.hitService.downloadFile(EMethod.get, url).subscribe(event => {
  //     this.progress = event.progress;
  //     if (event.file) {
  //       this.downloadedFile = event.file;
  //       console.log('DownloadedFile', this.downloadedFile);
  //     }
  //   });
  // }

}
