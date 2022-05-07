const required = (value: any) => {
  if (value === undefined || value === null) {
    return 'This field is required';
  }
};

const isNumber = (value: any) =>
  value && isNaN(Number(value)) ? 'Must be a number' : undefined;

const pattern = (regex: RegExp) => (value: any) =>
  regex.test(value) ? undefined : 'Invalid format';

const min = (min: number) => (value: any) =>
  value && value < min ? `Must be at least ${min}` : undefined;

export const composeValidators =
  (...validators: ((value: any) => any)[]) =>
  (value: any) =>
    validators.reduce(
      (error, validator) => error || validator(value),
      undefined
    );

export const validator = {
  required,
  pattern,
  isNumber,
  min,
};
