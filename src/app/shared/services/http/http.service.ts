import { HttpClient, HttpEvent, HttpEventType, HttpRequest } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { delay, map, Observable } from 'rxjs';
import { EMethod } from '../../enums/EMethod';

@Injectable({providedIn: 'root'})
export class HttpService {

  http = inject(HttpClient);

  get<T>(url: string) {
    return this.http.get<T>(url).pipe(delay(1000));
  }

  post<T>(url: string, body: unknown) {
    return this.http.post<T>(url, body).pipe(delay(1000));
  }

  put<T>(url: string, body: unknown) {
    return this.http.put<T>(url, body).pipe(delay(1000));
  }

  patch<T>(url: string, body: unknown) {
    return this.http.patch<T>(url, body).pipe(delay(1000));
  }

  delete<T>(url: string) {
    return this.http.delete<T>(url).pipe(delay(1000));
  }

  request(req: HttpRequest<any>) {
    return this.http.request(req).pipe(
      map((event: HttpEvent<any>) => this.getEventMessage(event))
    );
  }

  uploadFile(file: File, method: EMethod, url: string): Observable<{progress: number, file?: Blob}> {
    const formData = new FormData();
    formData.append('file', file, file.name);
    const req = new HttpRequest(method, url, formData, { reportProgress: true });
    return this.request(req);
  }

  downloadFile(method: EMethod, url: string): Observable<{progress: number, file?: Blob}> {
    const req = new HttpRequest(method, url, { reportProgress: true, responseType: 'blob' });
    return this.request(req);
  }

  private getEventMessage(event: HttpEvent<any>): {progress: number, file?: Blob} {
    switch (event.type) {
      case HttpEventType.DownloadProgress:
        const downloadProgress = event.total ? Math.round((100 * event.loaded) / event.total) : 0;
        return { progress: downloadProgress };
      case HttpEventType.UploadProgress:
        const uploadProgress = event.total ? Math.round((100 * event.loaded) / event.total) : 0;
        return { progress: uploadProgress };
      case HttpEventType.Response:
        return { progress: 100, file: event.body };
      default:
        return { progress: 0 };
    }
  }

}
