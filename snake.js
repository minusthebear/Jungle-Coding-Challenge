'use strict';

var Animal = require('./Animal');

var Snake = function() {
    Animal.call(this, 'snake', 50);
}

Snake.prototype = Object.create(Animal.prototype);

module.exports = Snake;