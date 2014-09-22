'use strict';

var expect = require('chai').expect;
var Banana = require('../lib/banana');

describe('Banana', function() {
  it('can be created', function() {
    new Banana();
  });

  it('can be peeled');

  describe('instance', function() {
    beforeEach(function() {
      this.banana = new Banana();
    });

    it('is edible', function() {
      expect(this.banana.edible()).to.be.true;
    });

    it('is yellow', function() {
      expect(this.banana.color()).to.eql('yellow');
    });

    it('can be eaten', function() {
      var safe = this.banana.prepareForEating();
      expect(this.banana.isPeeled()).to.be.true;
      expect(safe).to.be.true;
    });
  });
});
