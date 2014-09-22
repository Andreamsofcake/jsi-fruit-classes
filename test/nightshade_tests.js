'use strict';

var expect = require('chai').expect;
var Nightshade = require('../lib/nightshade');

describe('Nightshade', function() {
  it('can be created', function() {
    new Nightshade();
  });

  describe('instance', function() {
    beforeEach(function() {
      this.nightshade = new Nightshade();
    });

    it('is edible', function() {
      expect(this.nightshade.edible()).to.be.false;
    });
  });
});
