import { ConLayoutsModule } from './con-layouts.module';

describe('ConLayoutsModule', () => {
  let conLayoutsModule: ConLayoutsModule;

  beforeEach(() => {
    conLayoutsModule = new ConLayoutsModule();
  });

  it('should create an instance', () => {
    expect(conLayoutsModule).toBeTruthy();
  });
});
