// Activity 01:create array,function,object
document.writeln("-------------Activity No.1--------------<br>");
document.writeln("Array:<br>");
const num=[1,2,3,4,5];
document.writeln(num + "<br>");

// objects
document.writeln("Object:<br>");
obj={
    fName:"Tejshree",
    age:20,
};
document.writeln(JSON.stringify(obj) + "<br>");
document.writeln(obj.age + "<br>");

// function
document.writeln("Function:<br>");
function fun(){
    document.writeln("tejshree<br>");
}
fun();


// Activity 02: Reverse number
document.writeln("<br>-------------Activity No.2--------------<br>");
let number = 1234;
document.writeln("Number: " + number + "<br>");
let rev = 0;
while (number > 0) {
    rev = rev * 10 + (number % 10);
    number = Math.floor(number / 10);
}
document.writeln("Reversed: " + rev + "<br>");


// Activity 03: Palindrome number
document.writeln("<br>-------------Activity No.3--------------<br>");
let n = 1234;
let temp = n;
let reverse = 0;

while (temp > 0) {
    reverse = reverse * 10 + (temp % 10);
    temp = Math.floor(temp / 10);
}

document.writeln("Reversed: " + reverse + "<br>");
document.writeln(n == reverse ? "Palindrome<br>" : "Not Palindrome<br>");


// Activity 04: Fibonacci series
document.writeln("<br>-------------Activity No.4--------------<br>");
let no=10;
let a=0, b=1;
document.writeln("Fibonacci Series:<br>");
for(let i=1;i<=no;i++){
    document.writeln(a + " ");
    let c=a+b;
    a=b; b=c;
}


// Find largest element in array
document.writeln("<br><br>-------------Activity No.5--------------<br>");
let myArr=[0,1,2,3,4,5];
let max=myArr[0];
for(let i=0;i<myArr.length;i++){
    if(myArr[i]>max){
        max=myArr[i];
    }
}
document.writeln("Max No.: " + max + "<br>");


// Remove duplicate element in array
document.writeln("<br>-------------Activity No.6--------------<br>");
let arr = [1, 2, 3, 2, 4, 1, 5];
let uniqueArr = [];
for (let i = 0; i < arr.length; i++) {
    if (!uniqueArr.includes(arr[i])) {
        uniqueArr.push(arr[i]);
    }
}
document.writeln("Original: " + arr + "<br>");
document.writeln("Without Duplicates: " + uniqueArr + "<br>");


// Find missing number in array
document.writeln("<br>-------------Activity No.7--------------<br>");
let ar = [1, 2, 4, 5, 6]; 
let numb = ar.length + 1;
let expectedSum = (numb * (numb + 1)) / 2;
let actualSum = 0;
for (let i = 0; i < ar.length; i++) {
    actualSum += ar[i];
}
let missingNumber = expectedSum - actualSum;
document.writeln("Missing number: " + missingNumber + "<br>");


// Reverse a string
document.writeln("<br>-------------Activity No.8--------------<br>");
let str = "hello";
let reversed = "";
for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
}
document.writeln("Reversed string: " + reversed + "<br>");


// Count vowels in string
document.writeln("<br>-------------Activity No.9--------------<br>");
let string = "Hello World";
let count = 0;
let vowels = "aeiouAEIOU";
for (let i = 0; i < string.length; i++) {
    if (vowels.includes(string[i])) {
        count++;
    }
}
document.writeln("Vowel count: " + count + "<br>");


// Check palindrome in string
document.writeln("<br>-------------Activity No.10--------------<br>");
let s = "level";
let rever = "";
for (let i = s.length - 1; i >= 0; i--) {
    rever += s[i];
}
document.writeln(s == rever ? "Palindrome<br>" : "Not Palindrome<br>");


// Check prime number
document.writeln("<br>-------------Activity No.11--------------<br>");
let nom = 7;
let prime = true;

if (nom <= 1) {
    prime = false;
} else {
    for (let i = 2; i < nom; i++) {
        if (nom % i === 0) {
            prime = false;
            break;
        }
    }
}
document.writeln(prime ? "Prime Number<br>" : "Not Prime Number<br>");


// Factorial number
document.writeln("<br>-------------Activity No.12--------------<br>");
let fact_no=5;
let fact=1;
for(let i=1;i<=fact_no;i++){
    fact*=i;
}
document.writeln("Factorial: " + fact + "<br>");


// Even and Odd function
document.writeln("<br>-------------Activity No.13--------------<br>");
function checkEvenOdd(num) {
    document.writeln(num % 2 === 0 ? num + " is Even<br>" : num + " is Odd<br>");
}
checkEvenOdd(10);
checkEvenOdd(7);


// Sum of array function
document.writeln("<br>-------------Activity No.14--------------<br>");
function sumArray(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}
let array = [1, 2, 3, 4, 5];
document.writeln("Sum of array: " + sumArray(array));
