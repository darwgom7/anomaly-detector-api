import { BasicDnaValidator } from '../src/core/validators/BasicDnaValidator';
import { AdvancedDnaValidator } from '../src/core/validators/AdvancedDnaValidator';

describe('DNA Validator Tests', () => {
  let basicValidator: BasicDnaValidator;
  let advancedValidator: AdvancedDnaValidator;

  beforeEach(() => {
    basicValidator = new BasicDnaValidator();
    advancedValidator = new AdvancedDnaValidator(basicValidator);
  });

  test('Should pass advanced validation for a valid DNA sequence', () => {
    const dna = [
      ["A", "A", "C"],
      ["A", "B", "C"],
      ["C", "C", "C"]
    ];
    expect(advancedValidator.validate(dna)).toBeTruthy();
  });

  test('Should fail advanced validation for an invalid DNA sequence', () => {
    const dna = [[]];
    expect(advancedValidator.validate(dna)).toBeFalsy();
  });
});
