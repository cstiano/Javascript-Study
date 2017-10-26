var test = [{data:1, quant:5},{data:2, quant:8},{data:3, quant:1.2},{data:4, quant:60},
{data:5, quant:45},{data:6, quant:12},{data:7, quant:23},{data:8, quant:15},
{data:9, quant:4},{data:10, quant:3}];

var test2 = [{data:1, quant:6},{data:2, quant:47},{data:3, quant:50},{data:4, quant:32},
{data:5, quant:48},{data:6, quant:23},{data:7, quant:28},{data:8, quant:34},
{data:9, quant:18},{data:10, quant:6}];

var xt = [];
var yt = [];
var xt2 = [];
var yt2 = [];

for (var i = 0; i < test.length; i++) {
	xt = xt.concat(test[i].data);
	yt = yt.concat(test[i].quant);

	xt2 = xt2.concat(test2[i].data);
	yt2 = yt2.concat(test2[i].quant);
}

var trace1 = {
  x: xt,
  y: yt,
  name: 'SF Zoo',
  type: 'bar'
};

var trace2 = {
  x: xt2,
  y: yt2,
  name: 'LA Zoo',
  type: 'bar'
};

var data = [trace1, trace2];

// var layout = {barmode: 'stack'};

var layout = {
  barmode: 'stack',
  width: 500,
  height: 500
};

Plotly.newPlot('myDiv', data, layout);