'use strict';

module.exports = class Route {

  constructor(path, method, contents) {
    this.path = path;
    this.method = method.toUpperCase();
    this.contents = contents;
  }

  fileName() {
    let p = this.path.split('/').join(':');
    return `${this.method}${this.path}`;
  }
};
