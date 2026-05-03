// non-premitive:
// object 
// array
// function

const { Activity } = require("react");

//symbol example:when used:unique id
const another_id=Symbol("123")
console.log(typeof(another_id))

const id=123;
console.log(id===another_id)

//javaScript is dynamic language
//array=const num=['1','2','3','4','5']
const num=[1,2,3,4,5];
console.log(num);

//objects=collection of key and value pairs.
obj={
    fName:"Tejshree",
    age:20,
};
console.log(obj);
console.log(obj.age);

//function:it is block of code that perform perticular task.
function fun(){
    console.log("tejshree");
}
console.log(fun());


//memory:
//2 types of memory of stack and heap
//stack used for premitive and heap used for non-premitive
//primitive datatypes are used for stack when we assign 1 variable is another a copy is made so changeing one does not affect to another.

let my_youtube_channel="TRK";
let my_new_youtube_channel=my_youtube_channel
console.log(my_new_youtube_channel);
console.log(my_youtube_channel);

my_youtube_channel="JS";

console.log(my_youtube_channel)
/// Non-primitive (objects) are stored in heap memory.
// When assigning one object to another, the reference is copied.

let user1 = {
    fname: "Tejshree",
    id: 49
};

let user2 = user1;

console.log(user2);   // { fname: "Tejshree", id: 49 }

user2.id = 20;

console.log(user1.id); // 20 (because both point to same object)

