var mass = require("./index");
var bunny = require("bunny");

var massProperties = mass(bunny.cells, bunny.positions);
console.log(massProperties);
