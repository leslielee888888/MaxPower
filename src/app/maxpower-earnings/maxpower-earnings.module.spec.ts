import { MaxpowerEarningsModule } from './maxpower-earnings.module';

describe('MaxpowerEarningsModule', () => {
  let maxpowerEarningsModule: MaxpowerEarningsModule;

  beforeEach(() => {
    maxpowerEarningsModule = new MaxpowerEarningsModule();
  });

  it('should create an instance', () => {
    expect(maxpowerEarningsModule).toBeTruthy();
  });
});
