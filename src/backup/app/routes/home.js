module.exports = function(application){
	application.get('/', function(request, response){
		application.app.controllers.home.showHome(application, request, response);
		// response.send("Home");
	});
}