function Fruit() {}

function Apple() {}
Apple.prototype = Object.create(Fruit.prototype);
Apple.prototype.constructor = Apple;

function Banana() {}
Banana.prototype = Object.create(Fruit.prototype);
Banana.prototype.constructor = Banana;

Fruit.prototype.edible = function() {
  return this._edible;
};

Fruit.prototype.compostable = function() {
  return this._compostable;
};

Fruit.prototype.genus = function() {
  return this._genus;
};

Fruit.prototype.epicarp = function() {
  return this._epicarp;
};

Fruit.prototype.mesocarp = function() {
  return this._mesocarp;
};

Fruit.prototype.endocarp = function() {
  return this._endocarp;
};

Fruit.prototype.calories = function() {
  return this._calories;
};

Fruit.prototype.setCalories = function(calories) {
  this._calories = calories;
};

Fruit.prototype.color = function() {
  return this._color;
};

Fruit.prototype.setColor = function(color) {
  this._color = color;
};


Apple.prototype.core function() {
  console.log('The red apple is being cored');
};

Apple.prototype.slice function() {
  console.log('The red apple is being peeled');
};

Banana.prototype.peel function() {
  console.log('The yellow banana is being peeled');
};
