console.log("\n===== ALL ACTIVITIES COMBINED =====");

// ---------------- Activity 01 ----------------
console.log("\n-----Activity 01 : Create Array & Function------");
let numArr =[1,2,3,4,5,6,7,9,10];
console.log(`My Array is : ${numArr}`);

function add(a,b){
    return a+b;
}
console.log("The 10 + 5 : "+ add(10,5));


// ---------------- Activity 02 ----------------
console.log("\n-----Activity 02 : Reverse Number ------");

function reverseNumber(num){
    let reverse = 0;
    while(num > 0 ){
        let last = num%10;
        reverse = (reverse*10)+last;
        num = Math.floor(num/10);
    }
    return reverse;
}
console.log("The Reverse(123) : "+ reverseNumber(123));


// ---------------- Activity 03 ----------------
console.log("\n-----Activity 03 : Palindrome Number ------");

function isPalindrome(number) {
    return reverseNumber(number) === number;
}
console.log(isPalindrome(121) ? "Palindrome" : "Not Palindrome");


// ---------------- Activity 04 ----------------
console.log("\n----------Activity 04 : Fibonacci ----------");

function fibonacci(n) {
    let a = 0, b = 1;
    console.log(a);
    if (n > 1) console.log(b);

    for (let i = 3; i <= n; i++) {
        let c = a + b;
        console.log(c);
        a = b;
        b = c;
    }
}
fibonacci(7);


// ---------------- Activity 05 ----------------
console.log("\n----------Activity 05: Largest Element ----------");

function largestEle(arr) {
    return Math.max(...arr);
}
let arr1 = [12, 11, 23, 45, 23, 3, 12];
console.log("Largest:", largestEle(arr1));


// ---------------- Activity 06 ----------------
console.log("\n----------Activity 06 : Remove Element ----------");

function removeEle(arr, target) {
    return arr.filter(x => x !== target);
}
let arr2 = [32,5,42,34,23,233,5,2,24,5,2];
console.log("After removal:", removeEle(arr2, 2));


// ---------------- Activity 07 ----------------
console.log("\n----------Activity 07 : Missing Number ----------");

function missingNum(arr) {
    let n = arr.length + 1;
    let expected = (n * (n + 1)) / 2;
    let actual = arr.reduce((a,b)=>a+b,0);
    return expected - actual;
}
console.log("Missing:", missingNum([1,2,4,5,6]));


// ---------------- Activity 08 ----------------
console.log("\n----------Activity 08: Reverse String ----------");

function reverseString(str) {
    return str.split("").reverse().join("");
}
console.log("Reverse:", reverseString("Sam"));


// ---------------- Activity 09 ----------------
console.log("\n----------Activity 09: Count Vowels ----------");

function countVowels(str) {
    return str.match(/[aeiou]/gi)?.length || 0;
}
console.log("Vowels:", countVowels("AEIOUaeiou"));


// ---------------- Activity 10 ----------------
console.log("\n----------Activity 10: Palindrome String ----------");

function palindromeStr(str) {
    return str === reverseString(str);
}
console.log(palindromeStr("POP") ? "Palindrome" : "Not");


// ---------------- Activity 11 ----------------
console.log("\n----------Activity 11 : Prime Number ----------");

function prime(num) {
    if (num < 2) return false;
    for(let i=2;i<=Math.sqrt(num);i++){
        if(num % i === 0) return false;
    }
    return true;
}
console.log(prime(8) ? "Prime" : "Not Prime");


// ---------------- Activity 12 ----------------
console.log("\n----------Activity 12 : Factorial ----------");

function factorial(num) {
    let fact = 1;
    for(let i=1;i<=num;i++) fact *= i;
    return fact;
}
console.log("Factorial:", factorial(5));


// ---------------- Activity 13 ----------------
console.log("\n----------Activity 13: Even or Odd ----------");

function evenOdd(num) {
    return num % 2 === 0 ? "Even" : "Odd";
}
console.log(evenOdd(10));


// ---------------- Activity 14 ----------------
console.log("\n----------Activity 14 : Sum of Array ----------");

function sumOfArray(arr) {
    return arr.reduce((a,b)=>a+b,0);
}
console.log("Sum:", sumOfArray([23,34,1,2,3]));

console.log("\n===== END =====");