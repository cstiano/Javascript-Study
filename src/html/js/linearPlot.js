var dt = new Date();

// var test = [{data:1, quant:5},{data:2, quant:8},{data:3, quant:1.2},{data:4, quant:60},
// {data:5, quant:45},{data:6, quant:12},{data:7, quant:23},{data:8, quant:15},
// {data:9, quant:4},{data:10, quant:3}];

// var test2 = [{data:1, quant:6},{data:2, quant:47},{data:3, quant:50},{data:4, quant:32},
// {data:5, quant:48},{data:6, quant:23},{data:7, quant:28},{data:8, quant:34},
// {data:9, quant:18},{data:10, quant:6}];

var test = [{data:"13:00", quant:5},{data:"13:20", quant:8},{data:"13:40", quant:1.2},{data:"14:00", quant:60},
{data:"14:20", quant:45},{data:"14:40", quant:12},{data:"15:00", quant:23},{data:"15:20", quant:15},
{data:"15:40", quant:4},{data:"16:00", quant:3}];

var test2 = [{data:"13:00", quant:6},{data:"13:20", quant:47},{data:"13:40", quant:50},{data:"14:00", quant:32},
{data:"14:20", quant:48},{data:"14:40", quant:23},{data:"15:00", quant:28},{data:"15:20", quant:34},
{data:"15:40", quant:18},{data:"16:00", quant:6}];

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


trace1 = {
  type: 'scatter',
  x: xt,
  y: yt,
  mode: 'lines',
  name: 'Entering Passengers',
  line: {
    color: 'rgb(219, 64, 82)',
    width: 3
  }
};

trace2 = {
  type: 'scatter',
  x: xt2,
  y: yt2,
  mode: 'lines',
  name: 'Leaving Passengers',
  line: {
    color: 'rgb(55, 128, 191)',
    width: 3
  }
};

var layout = {
  width: 700,
  height: 500
};

var data = [trace1, trace2];

Plotly.newPlot('linearPlotDiv', data, layout);