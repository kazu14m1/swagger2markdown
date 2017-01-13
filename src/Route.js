'use strict';

module.exports = class Route {

  constructor(path, method) {
    this.path = path.split('/').join(':');
    this.method = method.toUpperCase();
  }

  fileName() {
    return `${this.method}${this.path}`;
  }
};
