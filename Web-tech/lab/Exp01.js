const a=100;
//a=200;
console.log(a);

let b=10;
var c=20;
{
    let b=200;
    var c=300;
    console.log(b,c)
}
console.log(b);
console.log(c);

console.log("-------------------------------------------------------")
document.writeln("---------------Student Info----------------<br>")
//Activity No.01: display student information
let stud_name="Tejshree";
let stud_id=49;
let email="tejshreekarande23@gmail.com";
let CGPA=8.6;

console.log("Student name: "+stud_name);
document.writeln("Student name: "+stud_name);
console.log("Student id: "+stud_id);
document.writeln("<br>Student id: "+stud_id);
console.log("Student email: "+email);
document.writeln("<br>Student email: "+email);
console.log("Student CGPA: "+CGPA);
document.writeln("<br>Student CGPA: "+CGPA);


console.log("----------------------------------------------------------")
//Activity No.02: Student pass or fail.
document.writeln("<br>-------------------------Pass or Fail---------------------------")
let marks=80;
console.log("Marks: "+marks);
document.writeln("<br>Marks: "+marks)
if(marks>35){
    console.log("Student is Pass.")
    document.writeln("<br>Student is Pass.")
}
else{
    console.log("Student is Fail.")
    document.writeln("<br>Student is Fail.")
}

console.log("----------------------------------------------------------")
//Activity No.03: check number is even or odd
document.writeln("<br>----------Even or Odd--------------")
let num=4;
console.log("Number: "+num);
document.writeln("<br>Number: "+num);
if(num%2==0){
    console.log("Number is Even.")
    document.writeln("<br>Number is Even.")
}
else{
    console.log("Number is Odd.")
    document.writeln("<br>Number is Odd.")
}

console.log("----------------------------------------------------------")
//Activity No.4:Display number
document.writeln("<br>------------Display Numbers--------------")
let i;
for(i=1;i<=10;i++){
    console.log(i);
    document.writeln("<br>"+i);
}

console.log("----------------------------------------------------------")
//Activity No.05:Assign 
document.writeln("<br>--------------Activity--------------")
let x=10;
y=x;
x=200;
console.log("X:"+x+" "+"Y:"+y);
document.writeln("<br>X:"+x+" "+"<br>Y:"+y)
