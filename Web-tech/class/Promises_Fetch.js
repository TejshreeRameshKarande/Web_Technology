/*Promises: 
1) is an object ,that represents future results of an async operation.
2) simply,i promise to give result later 
3) it has 3 states :a) pending:-waiting
                   b) resolved:-fulfilled/success
                   c) rejected:-failed
*/
let myPromise = new Promise((resolve, rejected)=> {
    let success = false ;
    if (success == true){
        resolve("Data fetched successfully.");
    }
    else{
        rejected("OPPS!!\nError while fetching data!!")
    }
});

myPromise.then((result)=>{//--run when success
    console.log(result)  
}).catch((error)=>{
    console.log(error);//-->run when error
})
/*Home act:
why promises better than callback?
create 4 promising examples :true,false(error:Js went wrong)
how to write promises in function 
Async await example with fetch method
fetch user display names in html list 
fetch post show only 1st 5 records
create a feak promise manually resolve after 3 sec and reject after 3 sec
understand codeand its example
what is the promise in JS 
what is promise status
diff bet callback and promises
what is fetch method in JS
what does fetch return 
why do we use response.json
diff bet then and catch 
and Async vs awat
what is a promise chaining
*/
 
const promise = new Promise((resolve,rejected)=>
{
    setTimeout(()=>
    {
        console.log("Asynchronous task complete.");
        resolve();
    },3000);
});
promise.then(()=>{
    console.log("Promise consume.");    
})


const p1 = new Promise((resolve,rejected)=>
{
    setTimeout(()=>{
        resolve({userName:'Hari'},{Id: 123},);
    },3000);
});
p1.then((user)=>
{
    console.log(user);
    
})



/*
Fetch: 
1)is a built-in JS method used to make http request
return promises
*/ 
//fetch('url')--->syntax
fetch("https://jsonplaceholder.typicode.com/users")
    .then((Response)=>{
    return Response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
})

