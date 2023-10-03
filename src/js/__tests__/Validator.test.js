import Validator from '../Validator';

describe('test', () => {
  test('test 1, data entered correctly', () => {
    expect(Validator.validateForTests('51.50851, −0.12572')).toBeTruthy();
  });

  test('test 2, data entered correctly', () => {
    expect(Validator.validateForTests('51.50851,−0.12572')).toBeTruthy();
  });
  test('test 3, data entered correctly', () => {
    expect(Validator.validateForTests('[51.50851, −0.12572]')).toBeTruthy();
  });
});
