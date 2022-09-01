//1 arrow functions

const materials = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
  ];
  
console.log(materials.map(material => material.length));
console.log(materials.filter(material => material.length>6));

const arr = [5, 6, 13, 0, 1, 18, 23];

const sum = arr.reduce((a, b) => a + b);
// 66

const even = arr.filter((v) => v % 2 === 0);
// [6, 0, 18]

const double = arr.map((v) => v * 2);
// [10, 12, 26, 0, 2, 36, 46]


// ES6 Arrow function
const myFunc= name =>{ return `Hi ${name}`;
} 
console.log(myFunc('Shubham'))// output: Hi Said
// or even without using arrow or implement return keyword 
const myFunc1= name => `Hi ${name}`;
console.log(myFunc1('Shubham')) // output: Hi Said

//template literal
// ES5
var name = 'shubham';
console.log('My name is '+ name);

// ES6
const name1 = 'shubham';
console.log(`My name is ${name1}`);

//Object and Array Destructing
const college = {
	name : 'DTU',
	established : '1941',
	isPrivate : false
};
// es5
// let name = college.name;
// let established = college.established;
// let isPrivate = college.isPrivate;

//es6
let{name,established,isPrivate} = college;


console.log(name); // DTU
console.log(established); // 1941
console.log(isPrivate); // false

const arr1 = ['lionel','messi','barcelona'];
  
let[value1,value2,value3] = arr1;
  
console.log(value1); // lionel
console.log(value2); // messi
console.log(value3); // barcelona


//default
// ES6
function fun(a,b=1){
	return a + b;
}

console.log(fun(2,1)); // 3
console.log(fun(2)); // 3


// classes in ES6
class Vehicle{
	constructor(name,engine){
		this.name = name;
		this.engine = engine;
	}
}

const bike1 = new Vehicle('Ninja ZX-10R','998cc');
const bike2 = new Vehicle('Duke','390cc');

console.log(bike1.name); // Ninja ZX-10R
console.log(bike2.name); // Duke


// ES6 rest parameter
function fun(...input){
	let sum = 0;
	for(let i of input){
		sum+=i;
	}
	return sum;
}

console.log(fun(1,2)); // 3
console.log(fun(1,2,3)); // 6
console.log(fun(1,2,3,4,5)); // 15


//es6 spread parameter
function sum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers));
// expected output: 6

console.log(sum.apply(null, numbers));
// expected output: 6


//export
// module "my-module.js"
function cube(x) {
	return x * x * x;
  }
  
  const foo = Math.PI + Math.SQRT2;
  
  const graph = {
	options: {
	  color: 'white',
	  thickness: '2px',
	},
	draw() {
	  console.log('From graph draw function');
	}
  };
  
  export { cube, foo, graph };

  
  //import
  // getPrimes.js
/**
 * Returns a list of prime numbers that are smaller than `max`.
 */
function getPrimes(max) {
	const isPrime = Array.from({ length: max }, () => true);
	isPrime[0] = isPrime[1] = false;
	isPrime[2] = true;
	for (let i = 2; i * i < max; i++) {
	  if (isPrime[i]) {
		for (let j = i ** 2; j < max; j += i) {
		  isPrime[j] = false;
		}
	  }
	}
	return [...isPrime.entries()]
	  .filter(([, isPrime]) => isPrime)
	  .map(([number]) => number);
  }

  
  import { getPrimes } from '/modules/getPrimes.js';

  console.log(getPrimes(10)); // [2, 3, 5, 7]
	
