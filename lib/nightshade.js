'use strict';

var Fruit = require('./fruit');

function Nightshade() {
  Fruit.apply(this, arguments);
}
Nightshade.prototype = Object.create(Fruit.prototype);
Nightshade.prototype.constructor = Nightshade;

module.exports = Nightshade;
