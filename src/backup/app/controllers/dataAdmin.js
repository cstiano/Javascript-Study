module.exports.savingData = function(application, request, response){
	var connection = application.config.dbConnection();
	var dbBusModel = new application.app.models.dbBus(connection);
	dbBusModel.saveBus(request.body, function(err){
		if(err) console.log(err);
		else console.log("Data saved");
	});
}

module.exports.getData = function(application, request, response){
	var connection = application.config.dbConnection();
	var dbBusModel = new application.app.models.dbBus(application,connection);
	dbBusModel.getBus(function(err,data){
		console.log("Data: " + data);
	});
}