# floating

[![Build Status](https://travis-ci.org/javiercejudo/floating.svg)](https://travis-ci.org/javiercejudo/floating)
[![Coverage Status](https://coveralls.io/repos/javiercejudo/floating/badge.svg?branch=master)](https://coveralls.io/r/javiercejudo/floating?branch=master)
[![Code Climate](https://codeclimate.com/github/javiercejudo/floating/badges/gpa.svg)](https://codeclimate.com/github/javiercejudo/floating)

Simple wrapper for basic arithmetic—addition, subtraction, multiplication and division.

Useful for plugging it into [arbitrary-precision](https://github.com/javiercejudo/arbitrary-precision) or [linear-arbitrary-precision](https://github.com/javiercejudo/linear-arbitrary-precision)
as a fallback to specialised arbitrary precision libraries.

## Install

    npm i floating

## Usage

### Factory and configuration

```js
var Floating = require('floating')();

new Floating(1).div(new Floating(3).valueOf(); // => 1/3
```

### Operations

```js
new Floating(0.1).plus(new Floating(0.2)).valueOf(); // => 0.1 + 0.2

new Floating(0.3).minus(new Floating(0.1)).valueOf(); // => 0.3 - 0.1

new Floating(0.6).times(new Floating(3)).valueOf(); // => 0.6 * 3

new Floating(0.3).div(new Floating(0.2)).valueOf(); // => 0.3 / 0.2
```

### toString, valueOf and toJSON

```js
var floatingThird = new Floating(1).div(new Floating(3));

floatingThird.toString(); // => '0.3333333333333333'

floatingThird.valueOf() === floatingThird.toJSON(); // => true

Number(floatingThird); // => 1/3
```

### JSON.stringify and JSON.parse with reviver

```js
var stringified = JSON.stringify([floatingThird]); // => '[0.3333333333333333]'

JSON.parse(stringified, Floating.JSONReviver)[0]; // => new Floating(0.3333333333333333)
```

See [spec](test/spec.js).

## Related projects

- [linear-converter](https://github.com/javiercejudo/linear-converter): flexible linear converter with built in conversions for common units.
- [linear-conversion](https://github.com/javiercejudo/linear-conversion): Linear conversion class for *linear-converter*.
- [rescale](https://github.com/javiercejudo/rescale): rescales a point given two scales.
- [rescale-util](https://github.com/javiercejudo/rescale-util): Rescale utilities.
- [scale](https://github.com/javiercejudo/scale): scales normalised data.
- [normalise](https://github.com/javiercejudo/normalise): normalise data to [0, 1].
