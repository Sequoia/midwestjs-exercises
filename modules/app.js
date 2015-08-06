var m = require('./my-math');

console.log('3 + 10 / 2 = ' + m.add(3, m.div(10, 2)));

console.log('5 factorial is: ' + [5,4,3,2,1].reduce(m.add, 0));
