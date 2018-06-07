import { TestBed, inject } from '@angular/core/testing';

import { ModalEffectsService } from './modal-effects.service';

describe('ModalEffectsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ModalEffectsService]
    });
  });

  it('should be created', inject([ModalEffectsService], (service: ModalEffectsService) => {
    expect(service).toBeTruthy();
  }));
});
