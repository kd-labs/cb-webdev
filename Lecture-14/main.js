let myName = "KD";
console.log(myName);

let radius = 10;
let sphereVolume = (4 / 3) * Math.PI * Math.pow(radius, 3);

console.log("Volume of sphere : " + sphereVolume);

// let tangoAge = Number.parseInt(prompt("Enter Tango's age"));
// let mikeAge = Number.parseInt(prompt("Enter Mike's age"));
// let charlieAge = Number.parseInt(prompt("Enter Charlie's age"));
// let age = 20;

/*
if (age < 18) {
  console.log("minor");
} else if (age >= 18 && age <= 21) {
  console.log("enter but can't drink");
} else {
  console.log("partaayyy !!!");
}
*/

/*
let minAge =
  tangoAge < mikeAge
    ? tangoAge < charlieAge
      ? tangoAge
      : charlieAge
    : mikeAge < charlieAge
    ? mikeAge
    : charlieAge;
console.log(`Min age is : ${minAge}`);
*/

// let youngestAge = Math.min(tangoAge, mikeAge, charlieAge);

// switch (youngestAge) {
//   case tangoAge:
//     console.log(`tango is youngest`);
//     break;
//   case mikeAge:
//     console.log(`mike is youngest`);
//     break;
//   case charlieAge:
//     console.log(`charlie is youngest`);
//     break;
// }

let dishName = prompt("Enter food").toLowerCase();

if (dishName.includes("chicken") || dishName.includes("egg")) {
  console.log("Non-Veg");
} else if (dishName.includes("onion") || dishName.includes("garlic")) {
  console.log("Veg Food");
} else {
  console.log("Jain Food");
}
