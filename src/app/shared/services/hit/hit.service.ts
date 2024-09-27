import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { delay } from 'rxjs';
import { THit } from '../../types/thit';

@Injectable({
  providedIn: 'root'
})
export class HitService {

  http = inject(HttpClient);

  getHit() {
    return this.http.get<THit>(environment.apiHitDigital)
      .pipe(
        delay(1000)
      );
  }

}
