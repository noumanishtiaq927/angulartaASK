import { TestBed } from '@angular/core/testing';

import { FilterDataServiceService } from './filter-data-service.service';

describe('FilterDataServiceService', () => {
  let service: FilterDataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilterDataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
