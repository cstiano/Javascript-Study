var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var TransfDataJson = require('./TransfDataJson');
//Constants of the data configuration
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://mobbi:mobbipp2017@ds161164.mlab.com:61164/mobbipp_db';

const ID_INIT = 0
const ID_END = 2
// const QUANT_PASS_INIT = 2;
// const QUANT_PASS_END = 4;
// const TEMP_INIT = 4;
// const TEMP_END = 6;
// const SOUND_INIT = 6;
// const SOUND_END = 8;
// const VEL_INIT = 8;
// const VEL_END = 10;

//MSG : ID_BUS, QUANT_PASS, MED_TEMP, SOUND_INTENSITY, VELOCITY

//Schema an model of database

const busSchema = new Schema({
		device : Schema.Types.Mixed,
		data : Schema.Types.Mixed,
		voltage: Schema.Types.Mixed,
		lat : Schema.Types.Mixed,
		lng : Schema.Types.Mixed,
		time : Schema.Types.Mixed,
		id_bus: Schema.Types.Mixed,
		time_stamp_db: Schema.Types.Mixed,
		time_stamp_db_num: Schema.Types.Mixed,
		qtd_pass: Schema.Types.Mixed,
		med_temp: Schema.Types.Mixed,
		sound_intensity: Schema.Types.Mixed,
		vel_bus: Schema.Types.Mixed
});
const Bus = mongoose.model('Bus', busSchema);

//Class of database buses

function dbBus(connection){
	this._connection = connection;
}

dbBus.prototype.saveBus = function(busJson, callback) {
	// this._connection.on('error', console.error);
	// this._connection.once('open', function(){
	// 	// busJson["id_bus"] = busJson["data"].slice(ID_INIT,ID_END);
		var transf = new TransfDataJson(busJson);
	// 	console.log(JSON.stringify(transf.getDataTransfJson()));
	// 	var addBus = new Bus(busJson);
	// 	addBus.save(callback);
	// });
	MongoClient.connect(url, function(err, db) {

  		console.log("Connected correctly to server");
  		db.collection("buses").insertOne(transf.getDataTransfJson(),callback);
  		db.close();
	});
}

dbBus.prototype.getBus = function(callback){
	// this._connection.on('error', console.error);
	// this._connection.once('open', function(){
	// 	Bus.find({}, callback);
	// });
	MongoClient.connect(url, function(err, db) {
  		console.log("Connected correctly to server");
  		db.collection("buses").find({}).toArray(callback);
  		db.close();
	});	
}

module.exports = function(){
	return dbBus;
}
