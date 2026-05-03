//singleton 
const user=new Object;
console.log(user);

const user1={};//non-singleton object

user1.id=123;
user1.name="tej";
user1.islogin=true;
console.log(user1);//singleton

const user2 = {
    email: "tejk",
    username: {
        fullname: {
            fname: "tejshree",
            sname: "karande"
        }
    }
};

console.log(user2);
console.log(user2.username.fullname.fname);




