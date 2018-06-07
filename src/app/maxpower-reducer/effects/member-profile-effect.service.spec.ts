import { TestBed, inject } from '@angular/core/testing';

import { MemberProfileEffectService } from './member-profile-effect.service';

describe('MemberProfileEffectService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MemberProfileEffectService]
    });
  });

  it('should be created', inject([MemberProfileEffectService], (service: MemberProfileEffectService) => {
    expect(service).toBeTruthy();
  }));
});
