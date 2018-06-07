import { MaxpowerMemberModule } from './maxpower-member.module';

describe('MaxpowerMemberModule', () => {
  let maxpowerMemberModule: MaxpowerMemberModule;

  beforeEach(() => {
    maxpowerMemberModule = new MaxpowerMemberModule();
  });

  it('should create an instance', () => {
    expect(maxpowerMemberModule).toBeTruthy();
  });
});
