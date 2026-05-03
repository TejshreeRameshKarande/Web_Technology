let str1 = "Tejshree";
console.log(typeof(str1));

//string interpolation 
console.log(`hello my name is ${str1}`); //  "`"-->backkits

let fname="Tejshree";
console.log(`${fname}`);

const gCount = new String("Tejshree");
console.log(gCount.length);
console.log(gCount.toUpperCase());
console.log(gCount.toLowerCase());
console.log(gCount.charAt(2));
console.log(gCount.indexOf('j'));

//Activity02--all methods --20/01/26

//Extracting parts of string 
console.log(gCount.slice(1, 3));        
console.log(gCount.substring(1, 3))    
console.log(gCount.substr(1, 2))     

//Replace methods
console.log(gCount.replace("j", "v)"));        
console.log(gCount.replaceAll("e", "a"));    

//Split & Join
console.log(gCount.split(""));        
console.log(gCount.split("e"));     

//Trim methods 
const name = "  Hari  ";
console.log(name.trim());               
console.log(name.trimStart());
console.log(name.trimEnd());          

//Padding methods
console.log(gCount.padStart(6, "*"));   
console.log(gCount.padEnd(6, "*"));  

//Repeat methods
console.log(gCount.repeat(3));          

//Comparison Methods
console.log(gCount.localeCompare("Hari")); 
console.log(gCount.localeCompare("Aari"));  
console.log(gCount.localeCompare("Zari"));   

//Conversion methods
console.log(gCount.toString());          
console.log(String.fromCharCode(72));   