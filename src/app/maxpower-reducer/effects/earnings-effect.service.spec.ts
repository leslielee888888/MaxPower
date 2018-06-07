import { TestBed, inject } from '@angular/core/testing';

import { EarningsEffectService } from './earnings-effect.service';

describe('EarningsEffectService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EarningsEffectService]
    });
  });

  it('should be created', inject([EarningsEffectService], (service: EarningsEffectService) => {
    expect(service).toBeTruthy();
  }));
});
