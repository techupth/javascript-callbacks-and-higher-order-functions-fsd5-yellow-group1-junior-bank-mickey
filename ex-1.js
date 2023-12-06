// Exercise #1: For Each Function

function forEach(array, operation) {
  for (let i = 0; i < array.length; i++) {
    newEmployeeSalaries.push(operation(array[i]));
    console.log(array[i]);
  }
  return array;
}
function plusNumber(arr) {
  const num = arr + 5000;
  return num;
}

const employeeSalaries = [20005, 40000, 32000, 14500, 344000];
const newEmployeeSalaries = [];

forEach(employeeSalaries, plusNumber);

console.log(newEmployeeSalaries); // [25005, 45000, 37000, 19500, 349000]
