// original validators https://github.com/christianalfoni/formsy-react/blob/master/src/validationRules.js
import { FormErrorMessageType } from '../Form/FormProps';


type ValueValidationFunc = (...args: any[]) => boolean;

const isExisty: ValueValidationFunc = value => (value !== null && value !== undefined);

const isEmpty: ValueValidationFunc = value => (value === '');

const isDefaultRequiredValue: ValueValidationFunc = (_values, value) => (value === undefined || value === '');

const required: ValueValidationFunc = (_values, value) => (isExisty(value) && !isEmpty(value));

const matchRegexp = (_values, value, regexp) => (
  !isExisty(value) || isEmpty(value) || regexp.test(value)
);

const notEmptyString = (_values, value) => (!isEmpty(value));

const isEmail: ValueValidationFunc = (values, value) => (matchRegexp(values, value, /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i));

const isUrl: ValueValidationFunc = (values, value) => (matchRegexp(values, value, /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!&',;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!&',;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!&',;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!&',;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!&',;=]|:|@)|\/|\?)*)?$/i));

const isTrue: ValueValidationFunc = (_values, value) => (value === true);

const isFalse: ValueValidationFunc = (_values, value) => (value === false);

const isNumeric: ValueValidationFunc = (values, value) => (typeof value === 'number' ? true : matchRegexp(values, value, /^[-+]?(?:\d*[.])?\d+$/));

const isAlpha: ValueValidationFunc = (values, value) => (matchRegexp(values, value, /^[A-Z]+$/i));

const isAlphanumeric: ValueValidationFunc = (values, value) => (matchRegexp(values, value, /^[0-9A-Z]+$/i));

const isInt: ValueValidationFunc = (values, value) => (matchRegexp(values, value, /^(?:[-+]?(?:0|[1-9]\d*))$/));

const isFloat: ValueValidationFunc = (values, value) => (matchRegexp(values, value, /^(?:[-+]?(?:\d+))?(?:\.\d*)?(?:[eE]?(?:\d+))?$/));

const isWords: ValueValidationFunc = (values, value) => (matchRegexp(values, value, /^[A-Z\s]+$/i));

const startsWith = str => (_values, value) => (!isEmpty(value) && value.startsWith(str));

const isLength = length => (
  (_values, value) => !isExisty(value) || isEmpty(value) || value.length === length
);

const equals = eql => (
  (_values, value) => !isExisty(value) || isEmpty(value) || value === eql);
const equalsField = field => (
  (values, value) => value === values[field]);
const maxLength = length => (
  (_values, value) => !isExisty(value) || value.length <= length);
const minLength = length => (
  (_values, value) => !isExisty(value) || isEmpty(value) || value.length >= length);

const isBigger = number => (
  (_values, value) => !isExisty(value) || value > number);

const isSmaller = number => (
  (_values, value) => !isExisty(value) || value < number);

const isBiggerOrEqual = number => (
  (_values, value) => !isExisty(value) || value >= number);

const isSmallerOrEqual = number => (
  (_values, value) => !isExisty(value) || value <= number);


const invalidFieldMessage: FormErrorMessageType = label => (`${label} is not valid`);
const requiredFieldMessage: FormErrorMessageType = label => (`${label} is required`);
const canNotBeEmptyFieldMessage: FormErrorMessageType = label => (`${label} can not be empty`);
const ruleWrapper = (
    rule: ValueValidationFunc,
    customMessage?: FormErrorMessageType,
    defaultMessage?: FormErrorMessageType,
) => (dataRow: object, value: any, index?: number): FormErrorMessageType => {
  if (rule(dataRow, value, index)) {
    return undefined;
  }
  return customMessage || defaultMessage;
};


export const validators = {
  required: (message?: FormErrorMessageType) => ruleWrapper(
      required,
      message,
      requiredFieldMessage,
  ),
  email: (message?: FormErrorMessageType) => ruleWrapper(isEmail, message, invalidFieldMessage),
  url: (message?: FormErrorMessageType) => ruleWrapper(isUrl, message, invalidFieldMessage),

  defaultRequired: (message?: FormErrorMessageType) => (
      ruleWrapper(isDefaultRequiredValue, message, requiredFieldMessage)
  ),
  notEmptyString: (message?: FormErrorMessageType) => (
      ruleWrapper(notEmptyString, message, canNotBeEmptyFieldMessage)
  ),
  numeric: (message?: FormErrorMessageType) => (ruleWrapper(isNumeric, message, label => `${label} must be a numeric value`)),
  alpha: (message?: FormErrorMessageType) => (ruleWrapper(isAlpha, message, label => `${label} must be alphabetic`)),
  alphaNumeric: (message?: FormErrorMessageType) => (ruleWrapper(isAlphanumeric, message, label => `${label} must be alphanumeric`)),
  int: (message?: FormErrorMessageType) => (ruleWrapper(isInt, message, label => `${label} must be an integer`)),
  float: (message?: FormErrorMessageType) => (ruleWrapper(isFloat, message, label => `${label} must be a number`)),
  words: (message?: FormErrorMessageType) => (ruleWrapper(isWords, message, label => `${label} must be a collection of words`)),
  length: (length: number, message?: FormErrorMessageType) => (ruleWrapper(isLength(length), message, label => `${label} must be ${length} characters long`)),
  minLength: (length: number, message?: FormErrorMessageType) => (ruleWrapper(minLength(length), message, label => `${label} must be at least ${length} characters long`)),
  maxLength: (length: number, message?: FormErrorMessageType) => (ruleWrapper(maxLength(length), message, label => `${label} must be up to ${length} characters long`)),
  equals: (value: any, message?: FormErrorMessageType) => (ruleWrapper(equals(value), message, label => `${label} must be equal to ${value}`)),
  equalsField: (field, fieldLabel, message?: FormErrorMessageType) => (ruleWrapper(equalsField(field), message, label => `${label} does not match ${fieldLabel || field}`)),
  True: (message?: FormErrorMessageType) => (ruleWrapper(isTrue, message, label => `${label} must be True`)),
  False: (message?: FormErrorMessageType) => (ruleWrapper(isFalse, message, label => `${label} must be False`)),
  bigger: (value: number, message?: FormErrorMessageType) => (ruleWrapper(isBigger(value), message, label => `${label} must be bigger than ${value}`)),
  biggerOrEqual: (value: number, message?: FormErrorMessageType) => (ruleWrapper(isBiggerOrEqual(value), message, label => `${label} must be bigger or eqial to ${value}`)),
  smaller: (value: number, message?: FormErrorMessageType) => (ruleWrapper(isSmaller(value), message, label => `${label} must be smaller than ${value}`)),
  smallerOrEqual: (value: number, message?: FormErrorMessageType) => (ruleWrapper(isSmallerOrEqual(value), message, label => `${label} must be smaller or equal to ${value}`)),
  startsWith: (value: string, message?: FormErrorMessageType) => (ruleWrapper(startsWith(value), message, label => `${label} must start with ${value}`)),
};
