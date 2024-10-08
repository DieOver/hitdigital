import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { THit } from '../../types/THit';
import { HitServiceContractService } from './hit.service.contract';
import { HttpService } from '../http/http.service';
import { EMethod } from '../../enums/EMethod';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HitService implements HitServiceContractService {

  http = inject(HttpService);

  getHit() {
    return this.http.get<THit>(environment.apiHitDigital);
  }

  uploadFile(file: File, method: EMethod, url: string): Observable<{ progress: number; file?: Blob; }> {
    return this.http.uploadFile(file, method, url);
  }

  downloadFile(method: EMethod, url: string): Observable<{ progress: number; file?: Blob; }> {
    return this.http.downloadFile(method, url);
  }

}
