'use strict';

module.exports = class Root {

  constructor(json) {
    this.isError = false;
    this.host = json.host;
    this.basePath = json.basePath

    if (json.swagger !== "2.0") {
      this.isError = true;
    }

    let schemes = json.schemes.filter((e, i, a) => {
      return e.includes("http");
    });
    if (schemes.length > 0) {
      this.scheme = `${schemes[0]}://`;
    } else {
      this.isError = true;
    }

  }

  output() {
    if (this.isError) {
      console.log('error');
      return;
    }
    return `${this.scheme}${this.host}${this.basePath}`;
  }

  isError() {
    return this.isError;
  }
};
