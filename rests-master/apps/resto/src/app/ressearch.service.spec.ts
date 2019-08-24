import { TestBed } from '@angular/core/testing';

import { RessearchService } from './ressearch.service';

describe('RessearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RessearchService = TestBed.get(RessearchService);
    expect(service).toBeTruthy();
  });
});
