'use strict';

var Animal = function(species, num) {
    this.level = 0;
    this.species = species;
    this.numSpecies = num;
};

Animal.prototype.eat = function(x) {
    this.level += 5;
    return this.level;
};

Animal.prototype.speak = function() {
    this.level -= 3;
    return this.level;
};

Animal.prototype.sleep = function() {
    this.level += 10;
    return this.level;
};

Animal.prototype.getEnergyLevel = function() {
    return this.level;
}

Animal.prototype.howMany = function(species) {
    if (this.species !== species) {
        return speciesWarning();
    }
    return this.numSpecies;
}

function speciesWarning() {
    return 'The animal only knows the number of its own species.';
}

module.exports = Animal;