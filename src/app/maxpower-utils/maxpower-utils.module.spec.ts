import { MaxpowerUtilsModule } from './maxpower-utils.module';

describe('MaxpowerUtilsModule', () => {
  let maxpowerUtilsModule: MaxpowerUtilsModule;

  beforeEach(() => {
    maxpowerUtilsModule = new MaxpowerUtilsModule();
  });

  it('should create an instance', () => {
    expect(maxpowerUtilsModule).toBeTruthy();
  });
});
