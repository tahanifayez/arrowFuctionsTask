const greet = (name) => `Hello, ${name}! `;

const sum = (num1, num2) => (num1 += num2);

const sqares = (num) => num * num;

const array = (arr) => {
  const newArray = [];

  for (count = 0; count <= arr.length - 1; count++) {
    newArray.push(arr[count] ** 2);
  }
  return newArray;
};


console.log(greet("tahani"))
console.log(sum(1,2))
console.log(sqares(4))
console.log(array([3, 6, 8, 7, 9]));