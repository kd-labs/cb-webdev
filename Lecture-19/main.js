const moveCapitalToFront = function (str) {
  let capStr = "";
  let lowStr = "";
  const strArr = str.split("");
  const capArr = strArr.filter((e) => e === e.toUpperCase());
  const smallArr = strArr.filter((e) => e === e.toLowerCase());
  const modifiedArr = capArr.concat(smallArr);
  return modifiedArr.join("");
};

const str = "haPpY";

const capitalInFront = moveCapitalToFront(str);
console.log(capitalInFront);
