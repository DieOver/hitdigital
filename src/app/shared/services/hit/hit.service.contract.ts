import { Observable } from 'rxjs';
import { THit } from '../../types/THit';
import { EMethod } from '../../enums/EMethod';

export abstract class HitServiceContractService {

  abstract getHit(): Observable<THit>;

  abstract uploadFile(file: File, method: EMethod, url: string): Observable<{ progress: number; file?: Blob; }>;

  abstract downloadFile(method: EMethod, url: string): Observable<{ progress: number; file?: Blob; }>;

}
