
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
ctx.beginPath();
ctx.arc(500,300,50,0,2*Math.PI);
ctx.arc(500,300,100,0,2*Math.PI);
ctx.arc(500,300,150,0,2*Math.PI);
ctx.arc(500,300,200,0,2*Math.PI);
ctx.stroke();
