var i = 1;

function init(){
	setInterval(draw,50);
}

function draw(){
	var canvas = document.getElementById("myCanvas");
	var ctx = canvas.getContext("2d");


	// ctx.clearRect(0, 0, canvas.width, canvas.height);

	// ctx.clearRect();
	i = i+0.5;
	ctx.beginPath();
	ctx.arc(300,100,5*i,0,2*Math.PI);
	// ctx.translate(10,0);
	// ctx.scale(0.5,0.5);
	ctx.stroke();

}

init();