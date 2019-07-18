// Meat

// Fish

// Bugs

// Grain

var Tiger = require('./tiger'),
    Snake = require('./snake'),
    Monkey = require('./monkey');

function soundOff(tiger, snake, monkey) {
    tiger.speak();
    snake.speak();
    monkey.speak()
    console.log('Tiger level: ' + tiger.getEnergyLevel());
    console.log('Snake level: ' + snake.getEnergyLevel());
    console.log('Monkey level: ' + monkey.getEnergyLevel());
}

module.exports = { soundOff };