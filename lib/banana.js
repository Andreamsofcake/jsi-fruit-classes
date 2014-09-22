'use strict';

var Fruit = require('./fruit');

function Banana() {
  Fruit.apply(this, arguments);

  this._edible = true;
  this._color = 'yellow';
}
Banana.prototype = Object.create(Fruit.prototype);
Banana.prototype.constructor = Banana;


Banana.prototype.peel = function() {
  console.log('The yellow banana is being peeled');
};

module.exports = Banana;
