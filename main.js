
canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

color="Blue";

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 4;
ctx.arc(240,270, 70,0 , 2*Math.PI);
ctx.stroke();

color="Black";

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 4;
ctx.arc(410,270, 70,0 , 2*Math.PI);
ctx.stroke();

color="red";

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 4;
ctx.arc(580,270, 70,0 , 2*Math.PI);
ctx.stroke();

color="gold";

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 4;
ctx.arc(330,330, 70,0 , 2*Math.PI);
ctx.stroke();

color="Green";

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 4;
ctx.arc(500,330, 70,0 , 2*Math.PI);
ctx.stroke();