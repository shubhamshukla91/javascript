// let x=3.14;
// console.log(Number(x));
// console.log(String(x));
// // let x = 10;
// console.log(x *=10);

// function test(t) {
//     if (t === undefined) {
//       return 'Undefined value!';
//     }
//     return t;
//   }
  
//   let x;
  
//   console.log(test(x));
//
  (()=>{
    const undefined='abc';
    console.log(undefined, typeof undefined);
  })();

  let x;
if (x === undefined) {
  // these statements execute
  console.log("HI");
} else {
  // these statements do not execute
  console.log("NO");
}