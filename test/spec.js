/*jshint node:true, mocha:true */

'use strict';

var should = require('should');
var Floating = require('../src/floating')();

describe('Floating', function() {
  describe('operations', function() {
    it('should have a plus method', function() {
      new Floating(0.1).plus(new Floating(0.2)).valueOf().should.be.exactly(0.1 + 0.2);
    });

    it('should have a minus method', function() {
      new Floating(0.3).minus(new Floating(0.1)).valueOf().should.be.exactly(0.3 - 0.1);
    });

    it('should have a times method', function() {
      new Floating(0.6).times(new Floating(3)).valueOf().should.be.exactly(0.6 * 3);
    });

    it('should have a div method', function() {
      new Floating(0.3).div(new Floating(0.2)).valueOf().should.be.exactly(0.3 / 0.2);
    });

    it('should have a mod method', function() {
      new Floating(13).mod(new Floating(5)).valueOf().should.be.exactly(3);
    });

    it('should have a pow method', function() {
      new Floating(2).pow(new Floating(5)).valueOf().should.be.exactly(32);
      new Floating(81).pow(new Floating(0.5)).valueOf().should.be.exactly(9);
    });

    it('should have an sqrt method', function() {
      new Floating(81).sqrt().valueOf().should.be.exactly(9);
    });

    it('should have an abs method', function() {
      new Floating(5).abs().valueOf().should.be.exactly(5);
      new Floating(-2).abs().valueOf().should.be.exactly(2);
    });

    it('should have an equals method', function() {
      new Floating(2).equals(new Floating(2)).should.be.exactly(true);
      new Floating(2).equals(new Floating(3)).should.be.exactly(false);

      new Floating(2).should.not.equal(new Floating(2));
    });

    it('should have a gt method', function() {
      new Floating(2).gt(new Floating(2)).should.be.exactly(false);
      new Floating(2).gt(new Floating(3)).should.be.exactly(false);
      new Floating(2).gt(new Floating(1)).should.be.exactly(true);
    });

    it('should have a gte method', function() {
      new Floating(2).gte(new Floating(2)).should.be.exactly(true);
      new Floating(2).gte(new Floating(3)).should.be.exactly(false);
      new Floating(2).gte(new Floating(1)).should.be.exactly(true);
    });

    it('should have a lt method', function() {
      new Floating(2).lt(new Floating(2)).should.be.exactly(false);
      new Floating(2).lt(new Floating(3)).should.be.exactly(true);
      new Floating(2).lt(new Floating(1)).should.be.exactly(false);
    });

    it('should have a lte method', function() {
      new Floating(2).lte(new Floating(2)).should.be.exactly(true);
      new Floating(2).lte(new Floating(3)).should.be.exactly(true);
      new Floating(2).lte(new Floating(1)).should.be.exactly(false);
    });

    it('should have a cmp method', function() {
      new Floating(2).cmp(new Floating(2)).should.be.exactly(0);
      new Floating(2).cmp(new Floating(3)).should.be.exactly(-1);
      new Floating(2).cmp(new Floating(1)).should.be.exactly(1);
    });
  });

  describe('toString, valueOf and JSON', function() {
    it('should be able to return a string representation', function() {
      var floatingThird = new Floating(1).div(new Floating(3));

      floatingThird.toString().should.be.exactly('0.3333333333333333');

      floatingThird.valueOf().should.be.exactly(1/3)
        .and.exactly(floatingThird.toJSON());
    });

    it('should play nicely with Number()', function() {
      var floatingThird = new Floating(1).div(new Floating(3));

      Number(floatingThird).should.be.exactly(1/3);
    });

    it('should play nicely with JSON.stringify()', function() {
      var floatingThird = new Floating(1).div(new Floating(3));
      var stringified = JSON.stringify([floatingThird]);

      stringified.should.be.exactly('[0.3333333333333333]');

      JSON.parse(stringified, Floating.JSONReviver)[0].should.eql(floatingThird);
    });
  });
});
