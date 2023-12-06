//Exercise #2: At Least Five Function
const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];

function atLeastFive(array, morethan70) {
  scoremorethat70 = [];
  for (let i = 0; i < array.length; i++) {
    morethan70(array[i]);
  }
  if (scoremorethat70.length >= 5) {
    return true;
  } else {
    return false;
  }
}
function mushmorethan70(number) {
  if (number >= 70) {
    scoremorethat70.push(number);
  }
}

let scoremorethat70 = [];

let scoreRoom1Result = atLeastFive(studentScoresRoom1, mushmorethan70);
let scoreRoom2Result = atLeastFive(studentScoresRoom2, mushmorethan70);
let scoreRoom3Result = atLeastFive(studentScoresRoom3, mushmorethan70);

console.log(scoreRoom1Result);
console.log(scoreRoom2Result);
console.log(scoreRoom3Result);
console.log(scoremorethat70);
