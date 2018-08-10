import { GenericClassModule } from './generic-class.module';

describe('GenericClassModule', () => {
  let genericClassModule: GenericClassModule;

  beforeEach(() => {
    genericClassModule = new GenericClassModule();
  });

  it('should create an instance', () => {
    expect(genericClassModule).toBeTruthy();
  });
});
