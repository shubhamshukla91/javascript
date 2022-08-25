// abc();
// console.log(fname);
// function abc()
// {
//     fname="john"
// }
// The lifetime of a JavaScript variable starts when it is declared.

// Function (local) variables are deleted when the function is completed.

// In a web browser, global variables are deleted when you close the browser window (or tab).


// function getName()
// {
//     let x=1;
//     console.log(x);
//     function abc()
//     {   
//         console.log(x)
//     }
//     abc();
// }
// getName();

   // var a = 10
        //     function f(){
        //         console.log(a)
        //     }
        // f();
        // console.log(a);
        // function f() {
        //     var a = 10;
        //     console.log(a)
        // }
        // f();
            // console.log(a); Refrence error
            // "use strict"
            // function obj()
            // {
            //     y=3.14;
            // }
            // // refrence error using a varible without declaring it is not allowed
            // obj(); 
    // "use strict"
    // let x=3.14;
    // // 'delete' cannot be called on an identifier in strict mode.
    // delete x;
    // In use strict deleting function / variable , duplicating parameter
    // "use strict"
    // function abc()
    // {
    //     alert(this);
    // }
    // abc();
function abc(name)
{
    return name=='john'? name:"we don't know ${name}."
}

const info=
{
    name:abc('john'),
    add:'basti'
};

console.log(info.name);
console.log(info.add);