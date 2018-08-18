import { AddFormsModule } from './add-forms.module';

describe('AddFormsModule', () => {
  let addFormsModule: AddFormsModule;

  beforeEach(() => {
    addFormsModule = new AddFormsModule();
  });

  it('should create an instance', () => {
    expect(addFormsModule).toBeTruthy();
  });
});
