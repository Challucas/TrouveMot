import { TestBed } from '@angular/core/testing';

import { DonneesMotusService } from './donnees-motus.service';

describe('DonneesMotusService', () => {
  let service: DonneesMotusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DonneesMotusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
