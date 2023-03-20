function validateForm(){

    if(document.getElementById("name1").value==" "){
        alert("give first name");
        return false;
    }
    if(document.getElementById("name2").value==" "){
        alert("give last name");
        return false;
    }
    if(document.getElementById("add1").value==" "){
        document.getElementById("add1").style.backgroundColor="#FFC0CB";
        return false;
    }
    if(document.getElementById("add2").value==" "){
        document.getElementById("add2").style.backgroundColor="#FFC0CB";
        return false;
    }
    if(isNaN(document.getElementById("state").value)==false){
        alert("state can't be number");
        return false;
    }
    if(isNaN(document.getElementById("zip").value)){
        alert("zip must be number");
        return false;
    }
    if(document.getElementById("coffee").value !==""){
        document.getElementById("coffee").style.backgroundColor="#FFFF00";
    }
    if(document.getElementById("lunch").value !==""){
        document.getElementById("lunch").style.backgroundColor="#FFFF00";
    }
    if(document.getElementById("fav").value !==""){
        document.getElementById("fav").style.backgroundColor="#FFFF00";
    }
}

    
