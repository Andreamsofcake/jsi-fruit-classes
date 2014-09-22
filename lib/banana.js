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
  // if we call our setter function, it sets the original
};

Banana.prototype.peel = function() {
  this.setPeeled(true);
  console.log('The yellow banana is being peeled');
};

Banana.prototype.prepareForEating = function() {
  var safe = Fruit.prototype.prepareForEating.call(this);

  if (safe) {
    // we need to peel the banana now
    this.peel();
  }

  return safe;
};

module.exports = Banana;
