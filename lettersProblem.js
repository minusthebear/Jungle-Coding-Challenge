


function f(str) {
    var retString = '';
    for (var i = 0; i < str.length; i++) {
        if (everyLettersPair[str[i]]) {
            retString += everyLettersPair[str[i]];
        } else {
            retString += str[i];
        }
    }

    return retString;
}

function g(str) {
    for (var i = 0; i < str.length; i++) {
        if (letterCount.hasOwnProperty(str[i])) {
            letterCount[str[i]] = letterCount[str[i]] + 1;
        }
    }
}

var everyLettersPair = {
    'a': 'z',
    'b': 'y',
    'c': 'x',
    'd': 'w',
    'e': 'v',
    'f': 'u',
    'g': 't',
    'h': 's',
    'i': 'r',
    'j': 'q',
    'k': 'p',
    'l': 'o',
    'm': 'n',
    'n': 'm',
    'o': 'l',
    'p': 'k',
    'q': 'j',
    'r': 'i',
    's': 'h',
    't': 'g',
    'u': 'f',
    'v': 'e',
    'w': 'd',
    'x': 'c',
    'y': 'b',
    'z': 'a'
};

var letterCount = {
    'a': 0,
    'b': 0,
    'c': 0,
    'd': 0,
    'e': 0,
    'f': 0,
    'g': 0,
    'h': 0,
    'i': 0,
    'j': 0,
    'k': 0,
    'l': 0,
    'm': 0,
    'n': 0,
    'o': 0,
    'p': 0,
    'q': 0,
    'r': 0,
    's': 0,
    't': 0,
    'u': 0,
    'v': 0,
    'w': 0,
    'x': 0,
    'y': 0,
    'z': 0
};

console.log(f("Errors in strategy cannot be correct through tactical maneuvers"));
console.log('\n\n');
g('Errors in strategy cannot be correct through tactical maneuvers');
console.log(letterCount);