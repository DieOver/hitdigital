import { inject, signal } from '@angular/core';
import { DialogRef } from '../services/modal/modal.service';
import { DOCUMENT } from '@angular/common';

export abstract class ModalContract {

  document = inject(DOCUMENT);
  dialogRef = inject(DialogRef);
  showing = signal(true);
  timeToClose = 250;

  close(value: boolean) {
    this.showing.set(false);
    setTimeout(() => {
      this.makeClose(value);
    }, this.timeToClose);
  }

  makeClose(value: boolean) {
    this.dialogRef.close(value);
  }

}
