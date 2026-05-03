//Activity
//1.difference between array function and simple function
//2.what is use of this keyword use in array and simple function
//3.why we not use this keyword in arrow function 
//4.write code for arrow function with 3 examples
//5.write a code for switch case in js
//6.how to use truthy and falsy value in js withn ex
//7.write a code for how to use loops in array withn ex
//8.what is difference bet for-of and for-in
//9.how to use map and filter in js with 3.examples
//10.ternary operator


//---------------Activity: 1----------------
console.log("\n===== Activity 1: Simple vs Array Function =====");

//Simple function
function sum(a,b){
    return a+b;
}
let add = sum(1,2);
console.log(`Simple Function Addition : ${add}`);

//Array Function
function sum1(arr){
    console.log("Array Elements:");
    for(let i=0;i<arr.length;i++){
        console.log(arr[i]);
    }
}
let num = [1,2,3,4,5];
sum1(num);



//-----------------Activity : 2----------------
console.log("\n===== Activity 2: this keyword (Normal Function) =====");

let obj = {
  name:"Tejshree",
  show:function(){
    console.log("Name using this:", this.name);
  }
};
obj.show();



//---------------------Activity : 3----------------
console.log("\n===== Activity 3: this in Arrow Function =====");

let obj2 = {
  name:"Tejshree",
  show: () => {
    console.log("Arrow this output:", this.name); // undefined
  }
};
obj2.show();



//----------------Activity : 4----------------------
console.log("\n===== Activity 4: Arrow Function Examples =====");

const sumArrow = (a,b) => a+b;
const square = x => x*x;
const greet = () => console.log("Hello");

console.log("Sum:", sumArrow(2,3));
console.log("Square:", square(4));
greet();



//--------------Activity : 5--------------------
console.log("\n===== Activity 5: Switch Case =====");

let day = 2;
switch(day){
  case 1: console.log("Monday"); break;
  case 2: console.log("Tuesday"); break;
  default: console.log("Invalid");
}




//--------------Activity : 6-------------------
console.log("\n===== Activity 6: Truthy & Falsy =====");

let val = "";
if(val){
  console.log("Truthy");
}else{
  console.log("Falsy");
}




//------------Activity : 7---------------------
console.log("\n===== Activity 7: Loop in Array =====");

let arr = [1,2,3];
for(let i=0;i<arr.length;i++){
  console.log("Element:", arr[i]);
}




//------------------Activity : 8-------------------
console.log("\n===== Activity 8: for-of vs for-in =====");

let arr2 = [10,20];

console.log("for-of (values):");
for(let v of arr2){
  console.log(v);
}

console.log("for-in (index):");
for(let i in arr2){
  console.log(i);
}




//------------------Activity : 9---------------
console.log("\n===== Activity 9: map() and filter() =====");

let arr3 = [1,2,3,4];

let mapEx = arr3.map(x => x*2);
let filterEx = arr3.filter(x => x>2);
let combo = arr3.map(x => x+1).filter(x => x>3);

console.log("Map Output:", mapEx);
console.log("Filter Output:", filterEx);
console.log("Combined Output:", combo);




//----------------Activity : 10------------------
console.log("\n===== Activity 10: Ternary Operator =====");

let age = 18;
let result = (age>=18) ? "Adult" : "Minor";
console.log("Result:", result);