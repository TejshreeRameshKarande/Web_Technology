//JS by default synchronous and single threded.
//Synchronous JS: 1.code execute line by line.
//                2.each task wait to previous task to finish. 
//                3.locking nature.
//                4.sequential programming.

//Asynchronous JS: 1.some task take time like API call, database, file log, file read.
//                 2.JS does not wait, it moves to next line 
//                 3.non-blocking behaivior
//                 4.fetching data from server, reading File, set timeout, API calls.

        
//Synchronous Exmaple
console.log("Start");
function add(a, b){
    return a+b;
}
let result=add(3,5);
console.log(result);
console.log("End")

//Asynchronous Example.
console.log("Start");
setTimeout(()=>{            
    console.log("Inside Timeout");
},2000);
console.log("End");
//set timeout is Asynchronous is waits 2sec while JS End after 2sec it get inside timeout.


//Activity:-->
//1.guess the output gain
//2.blocking vs non-blicking 2 examples.
//3.realtime example of both
//4.API fetch activity

