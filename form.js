

function Validateform(myform) {
    var user = myform.user.value;   
    var emails = myform.email.value;
    var pwd = myform.password.value;
    var confirm = myform.cpassword.value;
    var phnum = myform.mobile.value;


if (uservalidate(user)){
    if (phonevalidate(phnum)) {
        if (passvalidate(pwd)){
          if(cpvalidate(pwd,confirm)){
            if(mailvalidate(emails)){

            }
          }
        }
    }
}
return false;
}

function uservalidate(user){
    var userreg = /[A-Za-z]{3,15}$/;
if(!userreg.test(user)) {
    if(!user.match(/[A-Za-z]$/)){
        document.getElementById('username').innerHTML = "*Name should be only Alphabtes";
       return false;
    }
   if(!user.match(/[A-Za-z]{3,15}$/)) {
    document.getElementById('username').innerHTML = "*Name should be within 3 to 15 char";
   return false;
    }
    return false;
}
else {
    document.getElementById('username').innerHTML = " ";
    return true;
}
}

function phonevalidate(phnum){
    var phoreg = /[789]\d{9}$/;
if(!phoreg.test(phnum)) {
    if(!phnum.match(/\d{9}$/)){
        document.getElementById('phnumber').innerHTML = "*Number should be 10 digits";
       return false;
    }
    if(!phnum.match(/[789]\d{9}$/)) {
    document.getElementById('phnumber').innerHTML = "*Number should start with 7,8 or 9";
   return false;
    }
    return false;
}else {
    document.getElementById('phnumber').innerHTML = " ";
    return true;
}
}

function mailvalidate(emails) {
 var mailreg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
 if(!mailreg.test(emails)) {
     if(!emails.match(/@/)){
        document.getElementById('mail').innerHTML = "*@ is not present";
        return false;   
     }
     if(!emails.match(/\w+([\.-]?\w+)*(\.\w{2,4})+$/))
     document.getElementById('mail').innerHTML = "*Please enter a full Email-id";
     return false;  
    }else {
        document.getElementById('mail').innerHTML = " ";
        return true;
 } 
}

function passvalidate(pwd){
    var reg = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/;
if(!reg.test(pwd)){
    if(!pwd.match(/(?=.*\d)/)){
        document.getElementById('pass').innerHTML = "*A number";
       return false;
    }
    if(!pwd.match(/(?=.*\d)(?=.*[a-z])/)) {
    document.getElementById('pass').innerHTML = "*A lowercase letter";
   return false;
    }
    if(!pwd.match(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/)){
        document.getElementById('pass').innerHTML = "*A Uppercase letter";
       return false;
    }
    if(!pwd.match(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s)/)) {
    document.getElementById('pass').innerHTML = "*A special character";
   return false;
    }
    if(!pwd.match(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/)) {
        document.getElementById('pass').innerHTML = "*Minimum 8 chararcters";
       return false;
        }
   return false;
}
else{
    document.getElementById('pass').innerHTML = " ";
    return true;
}
}

function cpvalidate(pwd,confirm) {
    if(pwd != confirm){
        document.getElementById('cpass').innerHTML = "Password do not match";
        return false;
    }
    else{
        document.getElementById('cpass').innerHTML = " ";
        return true;
    }
}

document.querySelector('.formclass').addEventListener('submit', (event) =>{
    event.preventDefault();
})
