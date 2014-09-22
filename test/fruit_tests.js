'use strict';

var expect = require('chai').expect;
var Fruit = require('../lib/fruit');

describe('Fruit', function() {
  it('can be created', function() {
    new Fruit();
  });

  it('can be eaten', function() {
    var fruit = new Fruit();
    var safe = fruit.prepareForEating();
    expect(safe).to.be.true;
  });

  it('cant be eaten if moldy', function() {
    var fruit = new Fruit();
    fruit.setHasMold(true);
    var safe = fruit.prepareForEating();
    expect(safe).to.be.false;
  });
});
