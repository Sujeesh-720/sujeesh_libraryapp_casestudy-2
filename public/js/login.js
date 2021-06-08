let email = document.getElementById("email");
let pwd = document.getElementById("pwd");
function validate(){

       if(email.value==""||pwd.value==""){
           alert("Field's cannot be empty");
           return false;
       }
       else if(email.value=="admin@gmail.com"&&pwd.value==12345){
          return true;
       }

       else{
           alert("invalid Email ID and Password");
          return false;
      }
   
}

let email1 = document.getElementById("email1");
let pwd1 = document.getElementById("pwd1");
function valid(){

       if(email1.value==""||pwd1.value==""){
           alert("Field's cannot be empty");
           return false;
       }
   
}

