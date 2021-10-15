import { TestBed } from '@angular/core/testing';

import { StudentDetailServiceService } from './student-detail-service.service';

describe('StudentDetailServiceService', () => {
  let service: StudentDetailServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentDetailServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
