//object ki nested properties access krne ke liye  obj?.a?.b  
//object chaining is the syntax which help to access deeply nested properties  whithout checking if they exist or not 
//short and simplw way to access chained properties
//   obj?.a?.b first way 
// property names dynamically set
//OC doesnot work on non -existance root object but can be used with an undefined root object. and left-hand side assignment

let obj={
    person:{
        name:"Carris"
    },
    arr:[89,20,63,34],
    abc:function()
    {
        console.log("hello")
    }
}
console.log(obj?.person?.name);

//validating the refernce in between
const nestedProp = obj.first && obj.first.second;

let x='name';
let y='person';
console.log(obj?.[y]?.[x]);

console.log(obj?.arr?.[3]);
console.log(obj?.abc?.());
console.log(obj?.abc1?.());
// console.log(obj1?.abc1?.()); 
// typeof obj1!=='undefined' && obj?.person?.name

// Nullish Coalescing ??
// falsy values = undefined , null , 0 , false ,NaN
// nullish vlaues = undefined , null
// we want our fallback value to be set only for nullish values
let obj1=
{
    Score:0
}
console.log(`your score is ${obj1.Score?? 10}`);