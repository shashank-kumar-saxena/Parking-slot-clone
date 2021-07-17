var header=document.getElementById("header");
var body=document.getElementById("htmlBody");
window.addEventListener("scroll",headerColor);
function headerColor()
{
    var display=document.getElementById('part1');
        var height=window.innerHeight*.9;
        var tranformHeigth = display.getBoundingClientRect().bottom;
        
        if(tranformHeigth < height)
        {
            header.style.background="rgba(43, 13, 97,1)";
            header.style.transition="1s";
        }
        else
        { 
            header.style.background="none";
        }       
}
function load()
{
    var load=document.getElementById("loading");
    
    load.style.transition="2s";
    load.style.opacity="0";
    load.style.visibility="hidden";
    body.style.overflowY="scroll";

}
window.addEventListener("load",load,false);
//Menu Button
function menuBar()
{
    body.style.overflowY="hidden";
   var menuData=document.getElementById("menu2-data"); 
   menuData.classList.toggle("menu2-data-visible");
}
function scrollFunction()
{
    body.style.overflowY="scroll";
}
var menuBtn=document.getElementById('menu2');
var closeBtn=document.getElementById("closeMenu");
menuBtn.addEventListener("click",menuBar,false);
closeBtn.addEventListener("click",menuBar,false);
closeBtn.addEventListener("click",scrollFunction,false);
document.getElementById("Home-btn").addEventListener('click',menuBar,false);
document.getElementById("About-btn").addEventListener('click',menuBar,false);
document.getElementById("services-btn").addEventListener('click',menuBar,false);
document.getElementById("contact-us").addEventListener('click',menuBar,false);
document.getElementById("setting-btn").addEventListener('click',menuBar,false);

document.getElementById("Home-btn").addEventListener('click',scrollFunction,false);
document.getElementById("About-btn").addEventListener('click',scrollFunction,false);
document.getElementById("services-btn").addEventListener('click',scrollFunction,false);
document.getElementById("contact-us").addEventListener('click',scrollFunction,false);
document.getElementById("setting-btn").addEventListener('click',scrollFunction,false);
//**------text pop function----**
function textPopFun()
{
        var textPop=document.getElementById("text-pop");
        var textPop2=document.getElementById("text-pop2");
        var textPop3=document.getElementById("text-pop3");
        var textPop4=document.getElementById("text-pop4");
        var textPop5=document.getElementById("text-pop5");
        var height=window.innerHeight*.7;
        var tranformHeigth = textPop.getBoundingClientRect().top;
        var tranformHeigth2 = textPop2.getBoundingClientRect().top;
        var tranformHeigth3 = textPop3.getBoundingClientRect().top;
        var tranformHeigth4 = textPop4.getBoundingClientRect().top;
        var tranformHeigth5 = textPop5.getBoundingClientRect().top;
        if(tranformHeigth < height)
        {
            textPop.className="col-md-5 text-pop-visible";
        }
        else
        {
            textPop.className="col-md-5 text-pop";

        }
        if(tranformHeigth2 < height)
        {
            textPop2.className="col-md-5 text-pop-visible";
        }
        else
        {
            textPop2.className="col-md-5 text-pop";

        }
        if(tranformHeigth3 < height)
        {
            textPop3.className="col-md-5 text-pop-visible";
        }
        else
        {
            textPop3.className="col-md-5 text-pop";

        }
        if(tranformHeigth3 < height)
        {
            textPop3.className="col-md-5 text-pop-visible";
        }
        else
        {
            textPop3.className="col-md-5 text-pop";

        }
        if(tranformHeigth4 < height)
        {
            textPop4.className="col-md-5 text-pop-visible";
        }
        else
        {
            textPop4.className="col-md-5 text-pop";
        }
        if(tranformHeigth5 < height)
        {
            textPop5.className="col-md-5 text-pop-visible";
        }
        else
        {
            textPop5.className="col-md-5 text-pop";
        }
}
window.addEventListener("scroll",textPopFun,false);
function logFun()
{
    window.open("login.html","_blink");
}
function signFun()
{
    window.open("sigin.html","_blink");
}
var btnLogin=document.getElementById("btn-login");
btnLogin.addEventListener("click",logFun,false);
document.getElementById("btn-signUp").addEventListener("click",signFun,false);