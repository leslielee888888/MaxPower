import { TestBed, inject } from '@angular/core/testing';

import { DashboardEffectService } from './dashboard-effect.service';

describe('DashboardEffectService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DashboardEffectService]
    });
  });

  it('should be created', inject([DashboardEffectService], (service: DashboardEffectService) => {
    expect(service).toBeTruthy();
  }));
});
