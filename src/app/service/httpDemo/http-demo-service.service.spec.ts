import { TestBed } from '@angular/core/testing';

import { HttpDemoServiceService } from './http-demo-service.service';

describe('HttpDemoServiceService', () => {
  let service: HttpDemoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpDemoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
