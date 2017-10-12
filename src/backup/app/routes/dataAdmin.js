module.exports = function(application){
	application.post('/sigfox', function(request,response){
		application.app.controllers.dataAdmin.savingData(application,request,response);
		response.end("Saved");
	});

	application.get('/getbus', function(request,response){
		application.app.controllers.dataAdmin.getData(application,request,response);
		response.end("The data was get");
	});
}


//curl -H "Content-Type: application/json" -X POST -d '{"device": "2459D1","data": "0300000304"}' http://localhost:3000/sigfox
//https://stackoverflow.com/questions/32906467/mongoose-multiple-connections