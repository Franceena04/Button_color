document.getElementById("red").onclick=red_func;
function red_func()
{
   document.body.style.backgroundColor = "red"; 
   document.getElementById("red").style.backgroundColor ="red";      
}

document.getElementById("blue").onclick=blue_func;
function blue_func()
{
   document.body.style.backgroundColor = "blue";    
   document.getElementById("blue").style.backgroundColor = "blue";    
}

document.getElementById("green").onclick=green_func;
function green_func()
{
   document.body.style.backgroundColor = "green";  
   document.getElementById("green").style.backgroundColor = "green";      
}

document.getElementById("reset").onclick=reset_func;
function reset_func()
{
   document.body.style.backgroundColor = "white";  
   document.getElementById("reset").style.backgroundColor = "white"; 
   document.getElementById("red").style.backgroundColor = "white";
   document.getElementById("green").style.backgroundColor = "white";
   document.getElementById("blue").style.backgroundColor = "white";     
}