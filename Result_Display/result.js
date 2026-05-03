document.getElementById("resultForm").addEventListener("submit", function(e){

 e.preventDefault();   // stop page refresh

 let name = document.getElementById("name").value.trim();
 let m1 = document.getElementById("m1").value;
 let m2 = document.getElementById("m2").value;
 let m3 = document.getElementById("m3").value;
 let out = document.getElementById("output");

 out.innerHTML = "";

 // 🔴 Empty field alert
 if(name === "" || m1 === "" || m2 === "" || m3 === ""){
   alert("Please fill all fields!");
   return;
 }

 // Convert to number
 m1 = Number(m1);
 m2 = Number(m2);
 m3 = Number(m3);

 let total = m1 + m2 + m3;
 let per = total / 3;
 let grade = "";
 let status = "";

 if(per >= 75){ grade="A"; status="Pass"; out.style.color="green";}
 else if(per >= 60){ grade="B"; status="Pass"; out.style.color="blue";}
 else if(per >= 40){ grade="C"; status="Pass"; out.style.color="orange";}
 else{ grade="F"; status="Fail"; out.style.color="red";}

 out.innerHTML =
  "Name: " + name +
  "<br>Percentage: " + per.toFixed(2) + "%" +
  "<br>Grade: " + grade +
  "<br>Status: " + status;

});