'use strict';

var Fruit = require('./fruit');

function Apple() {
  Fruit.call(this, true);
}

Apple.prototype = Object.create(Fruit.prototype);
Apple.prototype.constructor = Apple;

Apple.prototype.core = function() {
  console.log('The red apple is being cored');
};

Apple.prototype.slice = function() {
  console.log('The red apple is being peeled');
};

module.exports = Apple;
