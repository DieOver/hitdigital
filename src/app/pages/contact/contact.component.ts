import { Component, inject } from '@angular/core';
import { HitTitleComponent } from '../../shared/components/hit-title/hit-title.component';
import { HitButtonComponent } from '../../shared/components/hit-button/hit-button.component';
import { HitService } from '../../shared/services/hit/hit.service';
import { HitCardComponent } from '../../shared/components/hit-card/hit-card.component';
import { FormControl, FormGroup, ReactiveFormsModule, RequiredValidator, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ModalService } from '../../shared/services/modal/modal.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HitTitleComponent,
    HitButtonComponent,
    HitCardComponent
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  modalService = inject(ModalService);
  hitService = inject(HitService);
  submitted = false;

  formContact = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', [Validators.required])
  });

  onSubmit(ev: any) {
    ev.preventDefault();
    this.submitted = true;
    if (this.formContact.valid) {
      this.hitService.getHit().subscribe({
        next: (response) => {
          const modal = this.modalService.confirmModal({
            title: response.data.title,
            lockScreen: true,
            backdropDismiss: false,
            description: `Nome: ${this.formContact.value.name}\nE-mail: ${this.formContact.value.email}\nMensagem: ${this.formContact.value.message}`,
            btnTextCancel: 'Fechar',
            btnTextConfirm: 'Confirmar',
          });
          modal.afterClosed().subscribe((res) => {
            console.log('afterClosed', res);
          });
        },
        error: (error) => {
          console.error(error);
          alert('Erro ao carregar os dados');
        },
      });
    } else {
      const modal = this.modalService.alertModal({
        title: 'Atenção',
        lockScreen: true,
        backdropDismiss: false,
        description: `Formulário inválido!`,
        btnText: 'Fechar',
      });
      modal.afterClosed().subscribe((res) => {
        console.log('afterClosed', res);
      });
    }
  }

  get formContactControl() {
    return this.formContact.controls;
  }

}
