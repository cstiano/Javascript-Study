const ID_INIT = 0
const ID_END = 2
const QUANT_PASS_INIT = 2;
const QUANT_PASS_END = 4;
const TEMP_INIT = 4;
const TEMP_END = 6;
const SOUND_INIT = 6;
const SOUND_END = 8;
const VEL_INIT = 8;
const VEL_END = 10;

function hexToInt(hex) {
    var num = 0;
    for(var x=0;x<hex.length;x++) {
        var hexdigit = parseInt(hex[x],16);
        num = (num << 4) | hexdigit;
    }
    return num;
}

function TransfDataJson(busJson){
	this._busJson = busJson;
}

TransfDataJson.prototype.getDataTransfJson = function() {
	this._busJson["id_bus"] = hexToInt(this._busJson["data"].slice(ID_INIT,ID_END));
	this._busJson["time_stamp_db"] = new Date();
	this._busJson["time_stamp_db_num"] = this._busJson["time_stamp_db"].getTime();
	this._busJson["qtd_pass"] = hexToInt(this._busJson["data"].slice(QUANT_PASS_INIT,QUANT_PASS_END));
	this._busJson["vel_bus"] = hexToInt(this._busJson["data"].slice(VEL_INIT,VEL_END));
	return this._busJson;
}

module.exports = TransfDataJson;