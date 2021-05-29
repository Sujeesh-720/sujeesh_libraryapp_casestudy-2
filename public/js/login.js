let email = document.getElementById("email");
let pwd = document.getElementById("pwd");
function validate(){

    let regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/
    let exm =  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{8,15}$/

       if(email.value==""||pwd.value==""){
           alert("Field's cannot be empty");
           return false;
       }
       else if(regexp.test(email.value)&&exm.test(pwd.value)){
          return true;
       }

       else{
           alert("invalid Email ID and Password");
          return false;
      }
   
}