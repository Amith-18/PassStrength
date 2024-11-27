

var pass    =   document.getElementById('password');
var msg    =   document.getElementById('message');
var str    =   document.getElementById('strength');
// var btn    =   document.getElementById('btn');


pass.addEventListener('input',()=>{
    if(pass.value.length > 0){
        msg.style.display   =  "block";
    }
    else{
        msg.style.display   =  "none";
    }
    if(pass.value.length < 4){
        str.innerHTML   =   "Password is Weak";
        pass.style.borderColor =   "red";
        msg.style.color =   "red";
    }
    else if(pass.value.length <= 6 && pass.value.length >=4 ){
        str.innerHTML   =   "Password is medium";
        pass.style.borderColor =   "orange";
        msg.style.color =   "orange";
    }
    else if(pass.value.length >= 8){
        str.innerHTML   =   "Password is Strong";
        pass.style.borderColor =   "green";
        msg.style.color =   "green";
    }
})
