import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
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
      'X-API-KEY': 'swb-222222',
    });
    console.log(data);
      this.http.post<any>(this.env, data, { headers: reqHeaders }).subscribe({
      next: (data) => {
        data;
      },
      error: (error) => {
        throwError(error);
        console.error('There was an error!', error);
      },
    });
  }
}
