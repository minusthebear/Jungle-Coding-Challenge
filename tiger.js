'use strict';

var Animal = require('./Animal');

var Tiger = function() {
    Animal.call(this, 'tiger', 10);
}

Tiger.prototype = Object.create(Animal.prototype);

Tiger.prototype.sleep = function() {
    this.level += 5;
    return this.level;
}

Tiger.prototype.eat = function(x) {
    if (x === 'grain') {
        return tigerFoodWarning();
    }
    this.level += 5;
    return this.level;
}

function tigerFoodWarning() {
    return 'Tigers can\'t eat grain';
}

module.exports = Tiger;