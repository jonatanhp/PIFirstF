import { TestBed } from '@angular/core/testing';

import { GradoService } from './GradoService';

describe('GradoService', () => {
  let service: GradoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GradoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
