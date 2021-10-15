import { TestBed } from '@angular/core/testing';

import { TeacherDetailServiceService } from './teacher-detail-service.service';

describe('TeacherDetailServiceService', () => {
  let service: TeacherDetailServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeacherDetailServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
