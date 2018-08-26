// original validators https://github.com/christianalfoni/formsy-react/blob/master/src/validationRules.js

const isExisty = value => (value !== null && value !== undefined);

const isEmpty = value => (value === '');

const isDefaultRequiredValue = (values, value) => (value === undefined || value === '');

const required = (values, value) => (isExisty(value) && !isEmpty(value));

const matchRegexp = (values, value, regexp) => (
  !isExisty(value) || isEmpty(value) || regexp.test(value)
);

const notEmptyString = (values, value) => (!isEmpty(value));

const isEmail = (values, value) => (matchRegexp(values, value, /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i));

const isUrl = (values, value) => (matchRegexp(values, value, /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!&',;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!&',;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!&',;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!&',;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!&',;=]|:|@)|\/|\?)*)?$/i));

const isTrue = (values, value) => (value === true);

const isFalse = (values, value) => (value === false);

const isNumeric = (values, value) => (typeof value === 'number' ? true : matchRegexp(values, value, /^[-+]?(?:\d*[.])?\d+$/));

const isAlpha = (values, value) => (matchRegexp(values, value, /^[A-Z]+$/i));

const isAlphanumeric = (values, value) => (matchRegexp(values, value, /^[0-9A-Z]+$/i));

const isInt = (values, value) => (matchRegexp(values, value, /^(?:[-+]?(?:0|[1-9]\d*))$/));

const isFloat = (values, value) => (matchRegexp(values, value, /^(?:[-+]?(?:\d+))?(?:\.\d*)?(?:[eE]?(?:\d+))?$/));

const isWords = (values, value) => (matchRegexp(values, value, /^[A-Z\s]+$/i));

const startsWith = str => (values, value) => (!isEmpty(value) && value.startsWith(str));

const isLength = length => (
  (values, value) => !isExisty(value) || isEmpty(value) || value.length === length
);

const equals = eql => (
  (values, value) => !isExisty(value) || isEmpty(value) || value === eql);
const equalsField = field => (
  (values, value) => value === values[field]);
const maxLength = length => (
  (values, value) => !isExisty(value) || value.length <= length);
const minLength = length => (
  (values, value) => !isExisty(value) || isEmpty(value) || value.length >= length);

const isBigger = number => (
  (values, value) => !isExisty(value) || value > number);

const isSmaller = number => (
  (values, value) => !isExisty(value) || value < number);

const isBiggerOrEqual = number => (
  (values, value) => !isExisty(value) || value >= number);

const isSmallerOrEqual = number => (
  (values, value) => !isExisty(value) || value <= number);


const invalidFieldMessage = label => (`${label} is not valid`);
const requiredFieldMessage = label => (`${label} is required`);
const canNotBeEmptyFieldMessage = label => (`${label} can not be empty`);

const ruleWrapper = (rule, customMessage, defaultMessage) => (values, value) => {
  if (rule(values, value)) {
    return undefined;
  }
  return customMessage || defaultMessage;
};

export const validators = {
  email: message => (ruleWrapper(isEmail, message, invalidFieldMessage)),
  url: message => (ruleWrapper(isUrl, message, invalidFieldMessage)),
  required: message => (ruleWrapper(required, message, requiredFieldMessage)),
  defaultRequired: message => (ruleWrapper(isDefaultRequiredValue, message, requiredFieldMessage)),
  notEmptyString: message => (ruleWrapper(notEmptyString, message, canNotBeEmptyFieldMessage)),
  numeric: message => (ruleWrapper(isNumeric, message, label => `${label} must be a numeric value`)),
  alpha: message => (ruleWrapper(isAlpha, message, label => `${label} must be alphabetic`)),
  alphaNumeric: message => (ruleWrapper(isAlphanumeric, message, label => `${label} must be alphanumeric`)),
  int: message => (ruleWrapper(isInt, message, label => `${label} must be an integer`)),
  float: message => (ruleWrapper(isFloat, message, label => `${label} must be a number`)),
  words: message => (ruleWrapper(isWords, message, label => `${label} must be a collection of words`)),
  length: (length, message) => (ruleWrapper(isLength(length), message, label => `${label} must be ${length} characters long`)),
  minLength: (length, message) => (ruleWrapper(minLength(length), message, label => `${label} must be at least ${length} characters long`)),
  maxLength: (length, message) => (ruleWrapper(maxLength(length), message, label => `${label} must be up to ${length} characters long`)),
  equals: (value, message) => (ruleWrapper(equals(value), message, label => `${label} must be equal to ${value}`)),
  equalsField: (field, fieldLabel, message) => (ruleWrapper(equalsField(field), message, label => `${label} does not match ${fieldLabel || field}`)),
  True: message => (ruleWrapper(isTrue, message, label => `${label} must be True`)),
  False: message => (ruleWrapper(isFalse, message, label => `${label} must be False`)),
  bigger: (value, message) => (ruleWrapper(isBigger(value), message, label => `${label} must be bigger than ${value}`)),
  biggerOrEqual: (value, message) => (ruleWrapper(isBiggerOrEqual(value), message, label => `${label} must be bigger or eqial to ${value}`)),
  smaller: (value, message) => (ruleWrapper(isSmaller(value), message, label => `${label} must be smaller than ${value}`)),
  smallerOrEqual: (value, message) => (ruleWrapper(isSmallerOrEqual(value), message, label => `${label} must be smaller or equal to ${value}`)),
  startsWith: (value, message) => (ruleWrapper(startsWith(value), message, label => `${label} must start with ${value}`)),
};
