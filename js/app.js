var form=document.getElementById("form");
var  bg=document.getElementById("bg");

function signupbutton()
{
    form.classList.add("shift");
    bg.classList.add("bg_change"); 
}
function signinbutton()
{
    form.classList.remove("shift");
    bg.classList.remove("bg_change"); 
}

