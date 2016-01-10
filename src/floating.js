/*jshint node:true */

'use strict';

function floating(initial) {
  var val = Number(initial || 0);

  return Object.freeze({
    plus: function plus(x) {
      return floating(val + x);
    },

    minus: function minus(x) {
      return floating(val - x);
    },

    times: function times(x) {
      return floating(val * x);
    },

    div: function div(x) {
      return floating(val / x);
    },

    mod: function mod(x) {
      return floating(val % x);
    },

    pow: function pow(exponent) {
      return floating(Math.pow(val, Number(exponent)));
    },

    sqrt: function sqrt() {
      return floating(Math.sqrt(val));
    },

    equals: function plus(x) {
      return val === Number(x);
    },

    gt: function gt(x) {
      return val > Number(x);
    },

    lt: function lt(x) {
      return val < Number(x);
    },

    gte: function gte(x) {
      return val >= Number(x);
    },

    lte: function lte(x) {
      return val <= Number(x);
    },

    cmp: function cmp(x) {
      if (this.gt(x)) {
        return 1;
      }

      if (this.lt(x)) {
        return -1;
      }

      return 0;
    },

    abs: function abs() {
      return floating(Math.abs(val));
    },

    toString: function toString() {
      return val.toString();
    },

    valueOf: function valueOf() {
      return val;
    },

    toJSON: function toJSON() {
      return val;
    },
  });
}

function Floating(initial) {
  return floating(initial);
}

Floating.JSONReviver = function JSONReviver(key, value) {
  if (key === '') {
    return value;
  }

  return floating(value);
};

module.exports = function factory() {
  return Floating;
};
