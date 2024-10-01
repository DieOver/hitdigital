import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { THit } from '../../types/THit';
import { HitServiceContractService } from './hit.service.contract';
import { HttpService } from '../http/http.service';
import { Observable } from 'rxjs';
import { EMethod } from '../../enums/EMethod';

@Injectable({
  providedIn: 'root'
})
export class HitServiceMock implements HitServiceContractService {

  http = inject(HttpService);

  getHit() {
    return this.http.get<THit>(environment.mockApiHitDigital)
  }

  uploadFile(file: File, method: EMethod, url: string): Observable<{ progress: number; file?: Blob; }> {
    return this.http.uploadFile(file, method, url);
  }

  downloadFile(method: EMethod, url: string): Observable<{ progress: number; file?: Blob; }> {
    return this.http.downloadFile(method, url);
  }

}
