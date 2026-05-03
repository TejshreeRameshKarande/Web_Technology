//object litrus:object-key bvalue pairs
let my_obj = {
    name: "tejshree",
    age: 20,
    location: "sangli",
    email_id: "tejshreeK",
    is_login: true,
    last_login_day: "Monday",
    //[mysymbol] : "myKeyOne"
};//2types of object: 1)object literal 2)constructor  3)singleton
//when u create constructor iit create singleton object, it means itself object 
//when we create object singleton is not creates 
console.log(my_obj.email_id);
console.log(my_obj.full_name = "Tejshree Karande");
//console.log(typeof(my_obj.[mysymbol]));

//symbol example
const mysymbol=Symbol("js");
const my_obj2={
    [mysymbol]:"TRK"
}
console.log(my_obj2);
console.log(typeof(my_obj2[mysymbol]));

my_obj.email_id="Tej";
console.log(my_obj.email_id);

//Object.freeze(my_obj);//for freeze the object we cannot change the values.
my_obj.email_id="TejK";
console.log(my_obj.email_id);

//function
my_obj.greeting=function(){
    console.log("hello js!!");
}
console.log(my_obj.greeting());





