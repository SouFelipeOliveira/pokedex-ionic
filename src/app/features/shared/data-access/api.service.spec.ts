import { TestBed } from '@angular/core/testing';

import { PokedexService } from './api.service';

describe('PokedexService', () => {
  let service: PokedexService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokedexService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
