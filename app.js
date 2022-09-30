function validaion(){
    var email=document.getElementById("email").value
    var phoneno=document.getElementById("phoneno").value;
    var code=document.getElementById("code").value;
    if(email.indexOf('@')<=0){
        alert("Invalid email")
        return false;
    }
    if((email.charAt(email.length-4)!='.')&& (email.charAt(email.length-4)!='.')){
    alert("Invalid email")
    return false;
    }
    if (phoneno.length!=11){
        alert("no must be of 11 digits")
        return false;
    }
    if((code.length<=5)||(code.length>20)){
        alert("Code length must be between 6 to 20")
        return false;
    }
           }
