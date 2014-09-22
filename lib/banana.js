'use strict';

var Fruit = require('./fruit');

function Banana() {
  Fruit.apply(this, arguments);

  this._edible = true;
  this._color = 'yellow';
  this._peeled = false;
}
Banana.prototype = Object.create(Fruit.prototype);
Banana.prototype.constructor = Banana;

Banana.prototype.isPeeled = function() {
  return this._peeled;
};

Banana.prototype.setPeeled = function(peeled) {
  this._peeled = peeled;
};

Banana.prototype.peel = function() {
  console.log('The yellow banana is being peeled');
};

module.exports = Banana;
