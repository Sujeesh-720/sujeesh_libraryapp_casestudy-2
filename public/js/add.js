let nme = document.getElementById("nme");
let know = document.getElementById("know");
let note = document.getElementById("note");
function valid(){


     if(nme.value==""||know.value==""||note.value==""){
        alert("Field's cannot be empty");
        return false;
     }

     else{
        return true;
     }

}