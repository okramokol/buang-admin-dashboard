import { ColumnsModule } from './columns.module';

describe('ColumnsModule', () => {
  let columnsModule: ColumnsModule;

  beforeEach(() => {
    columnsModule = new ColumnsModule();
  });

  it('should create an instance', () => {
    expect(columnsModule).toBeTruthy();
  });
});
