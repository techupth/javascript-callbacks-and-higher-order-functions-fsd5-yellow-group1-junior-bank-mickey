//Exercise #2: At Least Five Function

// // Sol-1 Compare value in array with more than or equal to 70 and count it => return true if counter more than or equal to 5
// let counter;
// function atLeastFive(array, operation) {
//   return operation(array) >= 5 ? true : false;
// }
// function more70Point(array) {
//   counter = 0;
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] >= 70) {
//       counter = counter + 1;
//     }
//   }
//   return counter;
// }

// // Sol-2 same Sol-1 count it when true and return true when more than or equal to 5
// let counter;
// function atLeastFive(array, operation) {
//   counter = 0;
//   for (let i in array) {
//     if (operation(array[i]) === true) {
//       counter += 1;
//     }
//   }
//   return counter >= 5;
// }
// let more70Point = (array) => array >= 70;

// // Answer for Sol-1 & Sol-2
// const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67];
// const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
// const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];
// let scoreRoom1Result = atLeastFive(studentScoresRoom1, more70Point);
// let scoreRoom2Result = atLeastFive(studentScoresRoom2, more70Point);
// let scoreRoom3Result = atLeastFive(studentScoresRoom3, more70Point);
// console.log(scoreRoom1Result);
// console.log(scoreRoom2Result);
// console.log(scoreRoom3Result);

// Sol-3 Push value greater than 70 to counter array and compare counter.length with more than or equal to 5

let counter;
function atLeastFive(array, operation) {
  return counter.length >= 5 ? true : false;
}

let more70Point = function (array) {
  counter = [];
  for (let i in array) {
    if (array[i] >= 70) {
      counter.push(array[i]);
    }
  }
};

const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];

// Using `atLeastFive` function here
// Answer for Sol-3
let scoreRoom1Result = atLeastFive(
  studentScoresRoom1,
  more70Point(studentScoresRoom1)
);
console.log(counter);

let scoreRoom2Result = atLeastFive(
  studentScoresRoom2,
  more70Point(studentScoresRoom2)
);
console.log(counter);

let scoreRoom3Result = atLeastFive(
  studentScoresRoom3,
  more70Point(studentScoresRoom3)
);
console.log(counter);

console.log(scoreRoom1Result);
console.log(scoreRoom2Result);
console.log(scoreRoom3Result);
