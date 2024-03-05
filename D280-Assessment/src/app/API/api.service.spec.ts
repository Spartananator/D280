import { TestBed } from '@angular/core/testing';

import { CountryApiService } from './api.service';

describe('ApiService', () => {
  let service: CountryApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountryApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});