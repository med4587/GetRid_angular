import { TestBed } from '@angular/core/testing';

import { GetRidServiceService } from './get-rid-service.service';

describe('GetRidServiceService', () => {
  let service: GetRidServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetRidServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
