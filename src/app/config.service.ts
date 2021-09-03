import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { formData } from './models/form-data';
@Injectable({
  providedIn: 'root'
})
export class ConfigService {
   private env = 'https://homework.fdp.workers.dev';
   private apiKey = 'swb-222222';
  constructor(private http: HttpClient) { }

  submitForm(data: formData) {
    console.log(data);

  }
}
