//forEach
const array = ['a', 'b', 'c'];

array1.forEach(element => console.log(element));

//fill

const array1 = [1, 2, 3, 4];

// fill with 0 from position 2 until position 4
console.log(array1.fill(0, 2, 4));
// expected output: [1, 2, 0, 0]

// fill with 5 from position 1
console.log(array1.fill(5, 1));
// expected output: [1, 5, 5, 5]

console.log(array1.fill(6));
// expected output: [6, 6, 6, 6]


//group

const inventory = [
    { name: 'asparagus', type: 'vegetables', quantity: 5 },
    { name: 'bananas',  type: 'fruit', quantity: 0 },
    { name: 'goat', type: 'meat', quantity: 23 },
    { name: 'cherries', type: 'fruit', quantity: 5 },
    { name: 'fish', type: 'meat', quantity: 22 }
  ];

const result = inventory.group(({ type }) => type);

function myCallback({ quantity }) {
    return quantity > 5 ? 'ok' : 'restock';
  }
  
  result = inventory.group(myCallback);

//indexOf

const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison'));
// expected output: 1

// start from index 2
console.log(beasts.indexOf('bison', 2));
// expected output: 4

console.log(beasts.indexOf('giraffe'));
// expected output: -1



//push&pop

const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

console.log(plants.push(brinjal));

console.log(plants.pop());


//shift & sort

const array2 = [11, 5, 8, 2, 3];

const firstElement = array2.shift();

console.log(array2);
// expected output: Array [2, 3]

console.log(firstElement);
// expected output: 1
console.log(array2.sort());

const array3 = [1, 4, 9, 16];

// map filter reduce
const arr = [5, 6, 13, 0, 1, 18, 23];

const sum = arr.reduce((a, b) => a + b);
// 66

const even = arr.filter((v) => v % 2 === 0);
// [6, 0, 18]

const double = arr.map((v) => v * 2);
// [10, 12, 26, 0, 2, 36, 46]



const map1 = array3.map(x => x * 2);

console.log(map1);

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result1 = words.filter(word => word.length > 6);

console.log(result1);

const array4 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array4.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
);

console.log(sumWithInitial);