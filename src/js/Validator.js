export default class Validator {
  static formValidate(form) {
    const errors = {
      patternMismatch: 'Введите координаты по шаблону: 00.00000',
      valueMissing: 'Введите координаты',
    };

    const { elements } = form;
    const keys = Object.keys(ValidityState.prototype);

    const invalid = [...elements].some((element) => keys.some((key) => {
      if (!element.name) return false;
      if (key === 'valid') return false;

      if (element.validity[key]) {
        console.log(key);
        element.setCustomValidity(errors[key]);
        return true;
      }
      element.setCustomValidity('');
      return false;
    }));

    if (invalid) {
      form.reportValidity();
      return false;
    }

    return true;
  }

  static validateForTests(value) {
    const regex = /[?\d+.\d+[, −]+\d+\.\d+]?/;
    return regex.test(value);
  }
}
