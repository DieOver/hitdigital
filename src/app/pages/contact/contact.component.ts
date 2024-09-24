import { Component, inject } from '@angular/core';
import { HitTitleComponent } from '../../shared/components/hit-title/hit-title.component';
import { HitButtonComponent } from '../../shared/components/hit-button/hit-button.component';
import { HitService } from '../../shared/services/hit/hit.service';
import { HitCardComponent } from '../../shared/components/hit-card/hit-card.component';
import { FormControl, FormGroup, ReactiveFormsModule, RequiredValidator, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

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
          alert(`${response.data.title}\n\nNome: ${this.formContact.value.name}\nE-mail: ${this.formContact.value.email}\nMensagem: ${this.formContact.value.message}`);
        },
        error: (error) => {
          console.error(error);
          alert('Erro ao carregar os dados');
        },
      });
    }
  }

  get formContactControl() {
    return this.formContact.controls;
  }

}
