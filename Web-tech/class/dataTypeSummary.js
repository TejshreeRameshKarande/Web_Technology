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

