//Exercise #2: At Least Five Function
const moreThan70Scores = [];
function atLeastFive(array, operation) {
  iScores = [];
  for (let i = 0; i < array.length; i++) {
    operation(array[i]);
  }
  moreThan70Scores.push(iScores);
  if (iScores.length >= 5) {
    return true;
  } else {
    return false;
  }
}

let iScores = [];
function over70(num) {
  if (num > 70) {
    iScores.push(num);
  }
}

const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];

// Using `atLeastFive` function here

let scoreRoom1Result = atLeastFive(studentScoresRoom1, over70);
let scoreRoom2Result = atLeastFive(studentScoresRoom2, over70);
let scoreRoom3Result = atLeastFive(studentScoresRoom3, over70);

console.log(scoreRoom1Result);
console.log(scoreRoom2Result);
console.log(scoreRoom3Result);
console.log(moreThan70Scores);
