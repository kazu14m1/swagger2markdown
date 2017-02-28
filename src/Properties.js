'use strict';

module.exports = class Propertiies {
  static parser(properties) {
    let hoge = [];
    for (let name in properties) {
      hoge.push(name)
    }
    return hoge;
  }
};
