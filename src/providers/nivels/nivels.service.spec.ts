import { TestBed } from '@angular/core/testing';

import { NivelsService } from './nivels.service';

describe('NivelsService', () => {
  let service: NivelsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NivelsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
