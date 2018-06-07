import { TestBed, inject } from '@angular/core/testing';

import { SwalEffectsService } from './swal-effects.service';

describe('SwalEffectsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SwalEffectsService]
    });
  });

  it('should be created', inject([SwalEffectsService], (service: SwalEffectsService) => {
    expect(service).toBeTruthy();
  }));
});
