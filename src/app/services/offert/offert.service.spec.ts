import { TestBed } from '@angular/core/testing';

import { OffertService } from './offert.service';

describe('OffertService', () => {
  let service: OffertService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OffertService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
