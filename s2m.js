'use strict';

const fs = require('fs');
const json = require('./test/swagger.json');
const Root = require('./src/Root');
const Route = require('./src/Route');
const Definition = require('./src/Definition');

const root = new Root(json);
console.log(root.output());

let definitions = new Array();
if (json.hasOwnProperty('definitions')) {
    for (let name in json.definitions) {
        definitions[name] = new Definition(json.definitions[name]);
    }
}
console.log(definitions);

/*
const paths = json.paths;
for (let path in paths) {
    let methods = paths[path];
    for (let method in methods) {
        let route = new Route(path, method, methods[method]);
        console.log(routes.fileName());
        break;
    }
}
*/

// fs.writeFile("hoge.mnd", "hogehoge");
// console.log(json.swagger);

/* directory make 
var fs = require('fs');
var dir = './tmp';

if (!fs.existsSync(dir)){
        fs.mkdirSync(dir);
}
*/
