//Constructing empty objects

const o1 = new Object();
const o2 = new Object(undefined);
const o3 = new Object(null);
// equivalent to const o = new Boolean(true)
const o4 = new Object(true);
// equivalent to const o = new Boolean(false)
const o5 = new Object(Boolean());

//freeze
const obj = {
  prop: 42,
};

Object.freeze(obj);

obj.prop = 33;
// Throws an error in strict mode

console.log(obj.prop);
// expected output: 42

//call,bind,apply

function Car(type, fuelType) {
  this.type = type;
  this.fuelType = fuelType;
}

function setBrand(brand) {
  Car.call(this, "convertible", "petrol");
  this.brand = brand;
  console.log(`Car details = `, this);
}

function definePrice(price) {
  Car.call(this, "convertible", "diesel");
  this.price = price;
  console.log(`Car details = `, this);
}

const newBrand = new setBrand("Brand1");
const newCarPrice = new definePrice(100000);

//without argument
const newEntity = (obj) => console.log(obj);

function mountEntity() {
  this.entity = newEntity;
  console.log(`Entity ${this.entity} is mounted on ${this}`);
}

mountEntity.call();

//apply
function Car(type, fuelType) {
  this.type = type;
  this.fuelType = fuelType;
}

function setBrand(brand) {
  Car.apply(this, ["convertible", "petrol"]); //Syntax with array literal
  this.brand = brand;
  console.log(`Car details = `, this);
}

function definePrice(price) {
  Car.apply(this, new Array("convertible", "diesel")); //Syntax with array object construction
  this.price = price;
  console.log(`Car details = `, this);
}

const newBrand1 = new setBrand("Brand1");
const newCarPrice1 = new definePrice(100000);

//bind
const module = {
  x: 42,
  getX: function () {
    return this.x;
  },
};

const unboundGetX = module.getX;
console.log(unboundGetX()); // The function gets invoked at the global scope
// expected output: undefined

const boundGetX = unboundGetX.bind(module);
console.log(boundGetX());
// expected output: 42

//create
const person = {
  isHuman: false,
  printIntroduction: function () {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
  },
};

const me = Object.create(person);

me.name = "Matthew"; // "name" is a property set on "me", but not on "person"
me.isHuman = true; // inherited properties can be overwritten

me.printIntroduction();
// expected output: "My name is Matthew. Am I human? true"

//hasOwn
const object1 = {
  prop: "exists",
};

console.log(Object.hasOwn(object1, "prop"));
// expected output: true

console.log(Object.hasOwn(object1, "toString"));
// expected output: false

console.log(Object.hasOwn(object1, "undeclaredPropertyValue"));
// expected output: false

//keys
const object3 = {
  a: "somestring",
  b: 42,
  c: false,
};

console.log(Object.keys(object3));
// expected output: Array ["a", "b", "c"]

//seal
const object2 = {
  property1: 42,
};

Object.seal(object2);
object2.property1 = 33;
console.log(object2.property1);
// expected output: 33

delete object2.property1; // cannot delete when sealed
console.log(object2.property1);
// expected output: 33

const person1 = {
  firstname: "shubham",
  lastname: "shukla ",
  getName: function () {
    let fullname = this.firstname + " " + this.lastname;
    return fullname;
  },
};

const displayPerson = function (snack, hobby) {
  console.log(this.getName() + "loves" + snack + "and" + hobby);
};

displayPerson.call(person1, "burger", "algo");
displayPerson.apply(person1, ["burger", "algo"]);