import { Injectable } from '@angular/core';
import { ApplicationRef, ComponentRef, createComponent, EnvironmentInjector, inject, Injector, Type } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Subject } from 'rxjs';
import { ConfirmModalComponent } from '../../modals/confirm-modal/confirm-modal.component';
import { TconfirmModal } from '../../types/TconfirmModal';
import { TalertModal } from '../../types/TalertModal';
import { AlertModalComponent } from '../../modals/alert-modal/alert-modal.component';

export abstract class DialogRef {
  abstract close(value: unknown): void;
}

@Injectable({ providedIn: 'root' })
export class ModalService {

  applicationRef = inject(ApplicationRef);
  environmentInjector = inject(EnvironmentInjector);
  document = inject(DOCUMENT);

  alertModal(data: TalertModal) {
    if (data.lockScreen) {
      this.document.body.style.overflow = 'hidden';
    }
    const container = this.document.createElement('modal-container');
    this.document.body.appendChild(container);
    let componentRef: ComponentRef<AlertModalComponent>;
    const afterClosed$ = new Subject();
    const dialogRef = {
      close: (value: unknown) => {
        this.applicationRef.detachView(componentRef.hostView);
        componentRef.destroy();
        container.remove();
        this.document.body.style.overflow = 'auto';
        afterClosed$.next(value);
      }
    }
    componentRef = createComponent(AlertModalComponent, {
      environmentInjector: this.environmentInjector,
      hostElement: container,
      elementInjector: Injector.create({
        providers: [
          {
            provide: DialogRef,
            useValue: dialogRef
          }
        ]
      })
    });
    componentRef.instance.data = data;
    this.applicationRef.attachView(componentRef.hostView);
    return {
      afterClosed: () => afterClosed$.asObservable(),
    }
  }

  confirmModal(data: TconfirmModal) {
    if (data.lockScreen) {
      this.document.body.style.overflow = 'hidden';
    }
    const container = this.document.createElement('modal-container');
    this.document.body.appendChild(container);
    let componentRef: ComponentRef<ConfirmModalComponent>;
    const afterClosed$ = new Subject();
    const dialogRef = {
      close: (value: unknown) => {
        this.applicationRef.detachView(componentRef.hostView);
        componentRef.destroy();
        container.remove();
        this.document.body.style.overflow = 'auto';
        afterClosed$.next(value);
      }
    }
    componentRef = createComponent(ConfirmModalComponent, {
      environmentInjector: this.environmentInjector,
      hostElement: container,
      elementInjector: Injector.create({
        providers: [
          {
            provide: DialogRef,
            useValue: dialogRef
          }
        ]
      })
    });
    componentRef.instance.data = data;
    this.applicationRef.attachView(componentRef.hostView);
    return {
      afterClosed: () => afterClosed$.asObservable(),
    }
  }

}
