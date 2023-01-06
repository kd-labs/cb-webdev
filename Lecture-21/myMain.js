const arr = [1, 2, 3];

function myReduce(arr, initialValue) {
  let res = initialValue;
  for (let e of arr) {
  }
}

// polyfill for reduce
Array.prototype.myReduce = function (fn, initialValue) {
  let res = initialValue;
  for (let e of this) {
    res = fn(res, e);
  }

// polyfill for find
Array.prototype.myFind = function(fn) {
    for(let e of this) {
        if(fn(e)) return e;
    }
}

// polyfill for sum
Array.prototype.mySum = function() {
    let res = 0;
    for(let e of this) {
        res += e;
    }
    return res;
};


const resultOfMyReduce = arr.myReduce((res, e) => res + e, 10);

console.log(resultOfMyReduce);

