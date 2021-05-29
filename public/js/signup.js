let nme = document.getElementById("nme");
let phone = document.getElementById("phone");
let email = document.getElementById("email");
let pwd = document.getElementById("pwd");
function validate(){
   let regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/
   let exm =  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{8,15}$/
   let phn = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/

     if(nme.value==""||email.value==""||pwd.value==""||phone.value==""){
        alert("Field's cannot be empty");
        return false;
     }

     else if(regexp.test(email.value)&&exm.test(pwd.value)&&phn.test(phone.value)){
        return true;
     }

     else{
         alert("Invalid Credentials");
        return false;
    }

}
function pssd(){
    let strongPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{8,}$/;
    let mediumPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{3,7}$/;
    if(strongPassword.test(pwd.value)){
        psd.innerText="Password is strong";
        psd.style.backgroundColor="green";
        psd.style.color="white";
    }
    else if(mediumPassword.test(pwd.value)){
        psd.innerText="Password is medium";
        psd.style.backgroundColor="orange";

    }
    else{
        psd.innerText="Password is poor";
        psd.style.backgroundColor="red";
        psd.style.color="white";
    }
}