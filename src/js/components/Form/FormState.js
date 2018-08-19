/* eslint-disable no-param-reassign */
export default class FormState {
  constructor(fields, object = {}, onChange) {
    this.fields = fields;
    this.validator = {
      set: (obj, prop, value) => {
        if (Array.isArray(value)) {
          obj[prop] = value.map(v => new Proxy(v, this.validator));
        } else if (value !== null && typeof value === 'object') {
          obj[prop] = new Proxy(value, this.validator);
        } else {
          obj[prop] = value;
        }
        if (onChange) {
          onChange(prop, value, object);
        }
        return true;
      },
    };
    this.proxyObj = new Proxy(object, this.validator);
  }

  get = () => this.proxyObj;
  updateFields = (fields) => { this.fields = fields; };
  getErrors = () => {
    const errors = {};
    const addError = (key, field, message) => {
      if (!errors[key]) {
        errors[key] = [];
      }
      let msg;
      if (typeof message === 'function') {
        msg = message(field.description || field.label || key);
      } else {
        msg = message;
      }
      errors[key].push(msg);
    };
    Object.keys(this.fields).forEach((key) => {
      const field = this.fields[key];
      let rules = field.validation;
      if (rules) {
        if (!Array.isArray(rules)) {
          rules = [rules];
        }
        for (let i = 0; i < rules.length; i += 1) {
          const rule = rules[i];
          if (typeof rule === 'function') {
            const value = this.proxyObj[key];
            if (Array.isArray(value)) {
              const arrayErrors = [];
              value.forEach((v, index) => {
                const message = rule(this.proxyObj, this.proxyObj[key], index);
                if (message) {
                  arrayErrors[index] = message;
                }
              });
              if (arrayErrors.length) {
                addError(key, field, arrayErrors);
              }
            } else {
              const message = rule(this.proxyObj, this.proxyObj[key]);
              if (message) {
                addError(key, field, message);
              }
            }
          } else if (rule !== null && typeof rule === 'object') {
            if (rule.rule && typeof rule.rule === 'function') {
              const isValid = rule.rule(this.proxyObj, this.proxyObj[key]);
              if (!isValid) {
                if (typeof rule.message === 'function') {
                  addError(key, field, rule.message(field.label || key));
                } else {
                  addError(key, field, rule.message);
                }
              }
            }
          }
        }
      }
    });
    return errors;
  };
  isValid = () => !Object.keys(this.getErrors()).length
}
