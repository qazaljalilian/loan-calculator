import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { formData } from './models/form-data';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private env = 'https://homework.fdp.workers.dev/';
  // private env = 'https://example.com/';
  private apiKey = 'swb-222222';
  constructor(private http: HttpClient) {}

  submitForm(data: formData) {
    let reqHeaders = new HttpHeaders({
      // 'X-API-KEY': 'swb-222222',
      'Content-Type': 'text/html'
    });
      return this.http.post<any>(this.env, data, {headers: reqHeaders}).toPromise();
  }
  fakeSubmitData(data: formData) {
    throw new Error();
  }
}
