'use strict';

var Animal = require('./Animal');

var Monkey = function() {
    Animal.call(this, 'monkey', 30);
}

Monkey.prototype = Object.create(Animal.prototype);

Monkey.prototype.eat = function() {
    this.level += 2;
    return this.level;
}

Monkey.prototype.speak = function() {
    this.level -= 4;
    return this.level;
}

Monkey.prototype.play = function() {
    if (this.level < 8) {
        return monkeyPlayWarning()+ ', monkey level: ' + this.level ;
    }
    this.level -= 8;
    return 'Oooo Oooo Oooo, monkey level: ' + this.level;
}

function monkeyPlayWarning() {
    return 'Monkey is too tired';
}

module.exports = Monkey;