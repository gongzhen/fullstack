// Modern Javascript
exports.i = 'am exports';
// console.log(this);

let util = {
    // f1 is regualr scope
    f1: function(){
        // console.log(this);
    },

    // f2 is arrow scope.
    f2:() => {
        // console.log(this);
    }
}

util.f1();
util.f2();

const PI = 3.141592653;
const sum = (a, b) => a + b;
const square = function(a) {
    return a * a;
};

const X = {
    PI, sum, square
};

// console.log(X.PI);
// console.log(X.sum(4444, 2));
// console.log(X.square(3));

const squareResult = X.square;
// onsole.log(squareResult);

const {squareObj} = X;
// console.log({squareObj});
// console.log(X);

const {pi, sum1, square2} = X;
// console.log({pi, sum1, square2});
//

const toDecimal = (base, ...numbers) => {
    console.log(numbers);
    console.log([0, ...numbers]);
    return numbers.map(number => parseInt(number, base));
}

console.log(
    toDecimal(2, 101, 111, 1010)
);// [5, 7, 10]


var http = require('http');
http.createServer(function (req, res) {
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end("hello");
}).listen(8124, "127.0.0.1");
console.log('Server running at http://127.0.0.1:8124/');
