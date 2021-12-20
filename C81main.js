Canvas = document.getElementById("myCanvas");
ctx = Canvas.getContext("2d");
color = "red";

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 3;
ctx.arc(200, 200, 60, 0, 2*Math.PI);
ctx.stroke();

Canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e) 
{
color = document.getElementById("color").value;
console.log(color);

mouse_x = e.clientX - Canvas.offsetLeft;
mouse_y = e.clientY - Canvas.offsetTop;
console.log("X = " + mouse_x + ", Y = " + mouse_y);
circle(mouse_x, mouse_y);
} 

function circle(mouse_x, mouse_y)
{
    ctx.beginPath(); 
    ctx.strokeStyle = color; 
    ctx.lineWidth = 2; 
    ctx.arc(mouse_x, mouse_y, 55 ,0 , 2*Math.PI); 
    ctx.stroke();
}

function clearArea()
{
    ctx.clearRect(0,0,Canvas.width, Canvas.height);
}