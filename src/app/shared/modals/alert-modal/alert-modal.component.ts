import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FadeInFadeOut } from '../../animations/FadeInFadeOut';
import { ModalContract } from '../modal.contract';
import { HitButtonComponent } from '../../components/hit-button/hit-button.component';
import { TalertModal } from '../../types/TalertModal';

@Component({
  selector: 'app-alert-modal',
  standalone: true,
  imports: [CommonModule, HitButtonComponent],
  templateUrl: './alert-modal.component.html',
  styleUrl: './alert-modal.component.scss',
  animations: [FadeInFadeOut]
})
export class AlertModalComponent extends ModalContract {

  data: TalertModal = { title: '', description: '', lockScreen: false, backdropDismiss: false, btnText: '' };

  onBackdropDismiss(value: boolean) {
    if (this.data.backdropDismiss) {
      this.onClose(value);
    }
  }

  onClose(value: boolean) {
    this.close(value);
  }

}
