function showDataLogIn()
{
    logForm.style.visibility="Visible";
    signForm.style.visibility="hidden";
    logForm.style.position="relative";
    signForm.style.position="absolute";
    logIn.style.background="rgba(93, 169, 231,.1)";
    signUp.style.background="none";
}
function showDataSignUp()
{
    logForm.style.visibility="hidden";
    signForm.style.visibility="visible";
    logForm.style.position="absolute";
    signForm.style.position="relative";
    logIn.style.background="none";
    signUp.style.background="rgba(93, 169, 231,.1)";

}
window.addEventListener("load",showDataLogIn,false);
var logForm=document.getElementById("log-form");
var signForm=document.getElementById("sign-form");
var logIn=document.getElementById("login");
var signUp=document.getElementById("singup");
logIn.addEventListener("click",showDataLogIn,false);
signUp.addEventListener("click",showDataSignUp,false);