import { TestBed, inject } from '@angular/core/testing';

import { LoginEffectService } from './login-effect.service';

describe('LoginEffectService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginEffectService]
    });
  });

  it('should be created', inject([LoginEffectService], (service: LoginEffectService) => {
    expect(service).toBeTruthy();
  }));
});
