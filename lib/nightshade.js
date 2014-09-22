'use strict';

var Fruit = require('./fruit');

function Nightshade() {
  Fruit.call(this, false);
}
Nightshade.prototype = Object.create(Fruit.prototype);
Nightshade.prototype.constructor = Nightshade;

module.exports = Nightshade;
