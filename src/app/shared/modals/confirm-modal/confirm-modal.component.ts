import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FadeInFadeOut } from '../../animations/FadeInFadeOut';
import { TconfirmModal } from '../../types/TconfirmModal';
import { ModalContract } from '../modal.contract';
import { HitButtonComponent } from '../../components/hit-button/hit-button.component';

@Component({
  selector: 'app-confirm-modal',
  standalone: true,
  imports: [CommonModule, HitButtonComponent],
  templateUrl: './confirm-modal.component.html',
  styleUrl: './confirm-modal.component.scss',
  animations: [FadeInFadeOut]
})
export class ConfirmModalComponent extends ModalContract {

  data: TconfirmModal = { title: '', description: '', lockScreen: false, backdropDismiss: false, btnTextConfirm: '', btnTextCancel: '' };

  onBackdropDismiss(value: boolean) {
    if (this.data.backdropDismiss) {
      this.onClose(value);
    }
  }

  onClose(value: boolean) {
    this.close(value);
  }

}
