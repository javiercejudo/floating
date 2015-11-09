/*jshint node:true */

'use strict';

module.exports = factory;

function factory() {
  function Floating(value) {
    this.val = function val() {
      return value;
    };
  }

  Floating.JSONReviver = function JSONReviver(key, value) {
    if (key === '') {
      return value;
    }

    return new Floating(value);
  };

  var p = Floating.prototype;

  p.plus = function plus(x) {
    return new Floating(this.val() + x.val());
  };

  p.minus = function minus(x) {
    return new Floating(this.val() - x.val());
  };

  p.times = function times(x) {
    return new Floating(this.val() * x.val());
  };

  p.div = function div(x) {
    return new Floating(this.val() / x.val());
  };

  p.mod = function mod(x) {
    return new Floating(this.val() % x.val());
  };

  p.pow = function pow(exponent) {
    return new Floating(Math.pow(this.val(), exponent.val()));
  };

  p.sqrt = function sqrt() {
    return new Floating(Math.sqrt(this.val()));
  };

  p.equals = function equals(x) {
    return this.val() === x.val();
  };

  p.gt = function gt(x) {
    return this.val() > x.val();
  };

  p.lt = function lt(x) {
    return this.val() < x.val();
  };

  p.gte = function gte(x) {
    return this.gt(x) || this.equals(x);
  };

  p.lte = function lte(x) {
    return this.lt(x) || this.equals(x);
  };

  p.cmp = function cmp(x) {
    if (this.gt(x)) {
      return 1;
    }

    if (this.lt(x)) {
      return -1;
    }

    return 0;
  };

  p.abs = function abs() {
    return new Floating(Math.abs(this.val()));
  };

  p.toString = function toString() {
    return this.val().toString();
  };

  p.valueOf = p.toJSON = function valueOf() {
    return this.val();
  };

  return Floating;
}
