import { TestBed, inject } from '@angular/core/testing';

import { MemberEffectService } from './member-effect.service';

describe('MemberEffectService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MemberEffectService]
    });
  });

  it('should be created', inject([MemberEffectService], (service: MemberEffectService) => {
    expect(service).toBeTruthy();
  }));
});
