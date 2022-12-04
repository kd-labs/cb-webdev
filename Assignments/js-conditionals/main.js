/********* Password validation ************/

/*
let validPassword = false;

while (!validPassword) {
  let password = prompt("Enter a password");
  if (password.includes(" ")) {
    alert("password should not contain spaces");
  } else if (password.length <= 6) {
    alert("password length should be more than 6");
  } else {
    alert("this is a valid password");
    validPassword = true;
  }
}

*/
/**********************/

/********* Print Even Nos ************/

/*
const N = Number.parseInt(prompt("Enter a number greater than 0"));

if (N <= 0) alert("Bhai 0 se bada number input karo");

for (let i = 1; i < N; i++) {
  if (i % 2 == 0) console.log(i);
}
*/
/**********************/

/********* Print Sum upto N ************/
/*
const N = Number.parseInt(prompt("Enter a number"));

if (N <= 0) alert("Bhai 0 se bada number input karo");

let sum = 0;
for (let i = 1; i <= N; i++) {
  sum += i;
}
console.log(sum);
*/

/**********************/

/********* Reverse digit of n ************/

/*
let N = Number.parseInt(prompt("Enter a number"));

let reversed = 0;
while (N > 0) {
  reversed = reversed * 10 + (N % 10);
  N = Math.floor(N / 10);
}
console.log(reversed);
*/
/**********************/

/********* Print table of N ************/

/*
let N = Number.parseInt(prompt("Enter a number"));

for (let i = 1; i <= 10; i++) {
  console.log(N * i);
}
*/
/**********************/

/********* Check palindrome ************/
/*
let N = prompt("Enter a number");

for (let i = 0; i < Math.floor(N.length / 2); i++) {
  if (N.charAt(i) != N.charAt()) {
    console.log("Not a palindrome");
    break;
  }
}
*/
/**********************/

/********* Reverse word in sentence ************/
/*
let sentence = "This fox jumps over a white lazy dog";
let reversedSentence = [];

let wordsArr = sentence.split(" ");

let reversedWord;
for (let word of wordsArr) {
  reversedWord = word.split("").reverse().join("");
  reversedSentence.push(reversedWord);
}

console.log(reversedSentence.join(" "));
*/

/**********************/
