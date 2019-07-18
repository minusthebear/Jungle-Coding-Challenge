var Jungle = require('./jungle'),
    Tiger = require('./tiger'),
    Snake = require('./snake'),
    Monkey = require('./monkey');

var tiger = new Tiger(),
    snake = new Snake(),
    monkey = new Monkey();

console.log('\n\n');

// Snake methods

console.log('Snake level after eating meat: ' + snake.eat('meat'));
console.log('Snake level after eating fish: ' + snake.eat('fish'));
console.log('Snake level after eating bugs: ' + snake.eat('bugs'));
console.log('Snake level after eating grain: ' + snake.eat('grain'));
console.log('Snake level after sleep: ' + snake.sleep());
console.log('Snake level after speak: ' + snake.speak());
console.log('Snake and tigers: ' + snake.howMany('tiger'));
console.log('Snake and monkeys: ' + snake.howMany('monkey'));
console.log('Snake and snakes: ' + snake.howMany('snake'));

console.log('\n\n');
// Tiger methods

console.log('Tiger level after eating meat: ' + tiger.eat('meat'));
console.log('Tiger level after eating fish: ' + tiger.eat('fish'));
console.log('Tiger level after eating bugs: ' + tiger.eat('bugs'));
console.log('Tiger level after eating grain: ' + tiger.eat('grain'));
console.log('Tiger level after sleep: ' + tiger.sleep());
console.log('Tiger level after speak: ' + tiger.speak());
console.log('Tiger and snakes: ' + tiger.howMany('snake'));
console.log('Tiger and monkeys: ' + tiger.howMany('monkey'));
console.log('Tiger and tigers: ' + tiger.howMany('tiger'));


console.log('\n\n');
// Monkey methods

console.log('Monkey level after eating meat: ' + monkey.eat('meat'));
console.log('Monkey level after eating fish: ' + monkey.eat('fish'));
console.log('Monkey level after eating bugs: ' + monkey.eat('bugs'));
console.log('Monkey level after eating grain: ' + monkey.eat('grain'));
console.log('Monkey level after sleep: ' + monkey.sleep());
console.log('Monkey level after speak: ' + monkey.speak());
console.log('Monkey and tigers: ' + monkey.howMany('tiger'));
console.log('Monkey and snakes: ' + monkey.howMany('snake'));
console.log('Monkey and monkeys: ' + monkey.howMany('monkey'));
console.log('Will monkey play? ' + monkey.play());
console.log('Will monkey play? ' + monkey.play());
console.log('Will monkey play? ' + monkey.play());
console.log('Will monkey play? ' + monkey.play());

console.log('\n\n');

// Jungle methods

console.log(Jungle.soundOff(tiger, snake, monkey));