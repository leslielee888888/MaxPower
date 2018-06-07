import { MaxpowerReducerModule } from './maxpower-reducer.module';

describe('MaxpowerReducerModule', () => {
  let maxpowerReducerModule: MaxpowerReducerModule;

  beforeEach(() => {
    maxpowerReducerModule = new MaxpowerReducerModule();
  });

  it('should create an instance', () => {
    expect(maxpowerReducerModule).toBeTruthy();
  });
});
