import { MaxpowerTableColumnComponentModule } from './maxpower-table-column-component.module';

describe('MaxpowerTableColumnComponentModule', () => {
  let maxpowerTableColumnComponentModule: MaxpowerTableColumnComponentModule;

  beforeEach(() => {
    maxpowerTableColumnComponentModule = new MaxpowerTableColumnComponentModule();
  });

  it('should create an instance', () => {
    expect(maxpowerTableColumnComponentModule).toBeTruthy();
  });
});
