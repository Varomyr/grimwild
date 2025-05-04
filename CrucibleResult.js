import { notEmpty } from "./utils.js";

export default class CrucibleResult {

  constructor (data, labels, descriptions, options, rolls = [], selectedValues, readonly = false, edit = true, value = '') {
    this.size = data.length;

    this.labels = labels;
    this.data = data;
    this.descriptions = descriptions
    this.options = options
    this.rolls = rolls
    this.selectedValues = selectedValues || data.map(x => [...x][0]);

    this.readonly = false
    this.edit = edit;
    this.value = value;
  }

  clone () {
    const clone = new CrucibleResult(
      this.data.map(entry => [...entry]),
      [...this.labels],
      [...this.descriptions],
      {...this.options},
      [...this.rolls],
      [...this.selectedValues],
      this.readonly,
      this.edit,
      this.value
      );
    return clone;
  }

  isSubmittable () {
    if (this.options.validator) {
      return this.options.validator(this.selectedValues)
    }
    return this.selectedValues.every(notEmpty)
  }

  submit () {
    if (this.isSubmittable()) {
      this.edit = false;
      this.value = this.options.valueFormatter ?
        this.options.valueFormatter(this.selectedValues)
        : this.selectedValues
    }
  }

  toString () {
    return this.data.map((entry, index) => `${this.labels[index]}: ${[...entry].join(', ')}`).join('\n') + '\n'
  }
}

