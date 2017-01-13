'use strict';

module.exports = class Definition {
  constructor(p) {
    if (p.hasOwnProperty('allOf')) {
      this.allOf = p.allOf;
    }
    if (p.hasOwnProperty('properties')) {
      this.properties = p.properties;
    }
    if (p.hasOwnProperty('required')) {
      this.required = p.required;
    }
  }

  parser() {
  }
}
