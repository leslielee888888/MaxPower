import { MaxpowerDashboardModule } from './maxpower-dashboard.module';

describe('MaxpowerDashboardModule', () => {
  let maxpowerDashboardModule: MaxpowerDashboardModule;

  beforeEach(() => {
    maxpowerDashboardModule = new MaxpowerDashboardModule();
  });

  it('should create an instance', () => {
    expect(maxpowerDashboardModule).toBeTruthy();
  });
});
