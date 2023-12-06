// Exercise #1: For Each Function
const employeeSalaries = [20005, 40000, 32000, 14500, 344000];
const newEmployeeSalaries = [];

function forEach(array, operation) {
  for (let i = 0; i < array.length; i++) {
    newEmployeeSalaries.push(operation(array[i]));
  }
}

function newsalary(array) {
  let add5000 = array + 5000;
  return add5000;
}
forEach(employeeSalaries, newsalary);
console.log(newEmployeeSalaries);
