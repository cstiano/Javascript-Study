var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

var connectDB = function(){
	mongoose.connect('mongodb://mobbi:mobbipp2017@ds161164.mlab.com:61164/mobbipp_db');
	// mongoose.createConnection('mongodb://mobbi:mobbipp2017@ds161164.mlab.com:61164/mobbipp_db');
	return mongoose.connection;
}

module.exports = function(){
	return connectDB;
}
