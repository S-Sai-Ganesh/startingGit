// let multiply = function (x, y) {
//   console.log(x * y);
// };

// let multiplyByTwo = multiply.bind(this,2);
// multiplyByTwo(4);


// let multiplrByThree = multiply.bind(this,3);
// multiplrByThree(5);


function multiply(x){
    return function (y){
       console.log(x*y); 
    }
}

var multiplyByTwo = multiply(2);
multiplyByTwo(9);