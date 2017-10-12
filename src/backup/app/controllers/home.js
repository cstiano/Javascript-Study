module.exports.showHome = function(application, request, response){
	// renderiza aqui
	var connection = application.config.dbConnection();
	var dbBusModel = new application.app.models.dbBus(connection);
	dbBusModel.getBus(function(err,result){
		// response.render('index', {dados : data});
		console.log(result);
	});
}