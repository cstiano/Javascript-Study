var app = new PIXI.Application();

document.body.appendChild(app.view);

PIXI.loader.add('bunny', 'bunny.png').load(function(loader, resources){
	var bunny = new PIXI.Sprite(resources.bunny.texture);

	bunny.x = app.renderer.width/2;
	bunny.y = app.renderer.height/2;

	bunny.anchor.x = 0.5;
	bunny.anchor.y = 0.5;

	app.stage.addChild(bunny);

	app.ticker.add(function(){
		bunny.rotation += 0.01;
	});
});