import { TestBed } from '@angular/core/testing';
import { HttpService } from './http.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('HttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
      HttpClientTestingModule,
      ],
      providers: [HttpService],
    });
  });

  it('should be created', () => {
    const service: HttpService = TestBed.inject(HttpService);
    expect(service).toBeTruthy();
   });

   it('should have submitForm function', () => {
    const service: HttpService = TestBed.inject(HttpService);
    expect(service.submitForm).toBeTruthy();
   });
});
