var data1 = 0, data2 = 0, data3 = 0, data4 = 0, data5 = 0, data6 = 0, data7 = 0, data8 = 0, data9 = 0, data10 = 0;
var data11 = 0, data12 = 0, data13 = 0, data14 = 0, data15 = 0, data16 = 0, data17 = 0, data18 = 0, data19 = 0, data20 = 0;
var data21 = 0, data22 = 0, data23 = 0, data24 = 0, data25 = 0, data26 = 0, data27 = 0, data28 = 0, data29 = 0, data30 = 0;
var data31 = 0, data32 = 0, data33 = 0, data34 = 0, data35 = 0, data36 = 0, data37 = 0, data38 = 0, data39 = 0, data40 = 0;


function update(){
	const socket = io.connect();

	socket.on('house-data', (data)=>{
		console.log(data);

		// document.getElementById("receiveData").innerHTML  = data.dataMuncul;

		//parse data angka
		// suhu = data.suhu;
		data1 = data.data1;
		$('#data1').text(data1);
		data2 = data.data2;
		$('#data2').text(data2);
		data3 = data.data3;
		$('#data3').text(data3);
		data4 = data.data4;
		$('#data4').text(data4);
		data5 = data.data5;
		$('#data5').text(data5);
		data6 = data.data6;
		$('#data6').text(data6);
		data7 = data.data7;
		$('#data7').text(data7);
		data8 = data.data8;
		$('#data8').text(data8);
		data9 = data.data9;
		$('#data9').text(data9);
		data10 = data.data10;
		$('#data10').text(data10);

		data11 = data.data11;
		$('#data11').text(data11);
		data12 = data.data12;
		$('#data12').text(data12);
		data13 = data.data13;
		$('#data13').text(data13);
		data14 = data.data14;
		$('#data14').text(data14);
		data15 = data.data15;
		$('#data15').text(data15);
		data16 = data.data16;
		$('#data16').text(data16);
		data17 = data.data17;
		$('#data17').text(data17);
		data18 = data.data18;
		$('#data18').text(data18);
		data19 = data.data19;
		$('#data19').text(data19);
		data20 = data.data20;
		$('#data20').text(data20);

		data21 = data.data21;
		$('#data21').text(data21);
		data22 = data.data22;
		$('#data22').text(data22);
		data23 = data.data23;
		$('#data23').text(data23);
		data24 = data.data24;
		$('#data24').text(data24);
		data25 = data.data25;
		$('#data25').text(data25);
		data26 = data.data26;
		$('#data26').text(data26);
		data27 = data.data27;
		$('#data27').text(data27);
		data28 = data.data28;
		$('#data28').text(data28);
		data29 = data.data29;
		$('#data29').text(data29);
		data30 = data.data30;
		$('#data30').text(data30);

		data31 = data.data31;
		$('#data31').text(data31);
		data32 = data.data32;
		$('#data32').text(data32);
		data33 = data.data33;
		$('#data33').text(data33);
		data34 = data.data34;
		$('#data34').text(data34);
		data35 = data.data35;
		$('#data35').text(data35);
		data36 = data.data36;
		$('#data36').text(data36);
		data37 = data.data37;
		$('#data37').text(data37);
		data38 = data.data38;
		$('#data38').text(data38);
		data39 = data.data39;
		$('#data39').text(data39);
		data40 = data.data40;
		$('#data40').text(data40);


		//parse data graph
		// suhu = parseInt(data.suhu);


		//manggil maps
		 // redraw(param.getLintang(), param.getBujur());

		});
}
//graph
// $(function() {
// 	Highcharts.setOptions({
// 		global: {
// 			useUTC: false
// 		}
// 	});


// 	Highcharts.chart('grafikTemp', {
// 		chart: {
// 			type: 'spline',
// 	        animation: Highcharts.svg, // don't animate in old IE
// 	        marginRight: 10,
// 	        events: {
// 	        	load: function () {

// 	                // set up the updating of the chart each second
// 	                var series = this.series[0];
// 	                setInterval(function () {
// 	                    var x = (new Date()).getTime(), // current time
// 	                    y = yaw;
// 	                    series.addPoint([x, y], true, true);
// 	                }, 1000);
// 	            }
// 	        }
// 	    },

// 	    title: {
// 	    	text: 'Grafik temperatur'
// 	    },
// 	    xAxis: {
// 	    	type: 'datetime',
// 	    	crosshair: true,
// 	    	labels: {
//                 overflow: 'justify'
//             },
// 	    	tickPixelInterval: 150
// 	    },
// 	    yAxis: {
// 	    	title: {
// 	    		text: 'Value'
// 	    	},

// 	    	crosshair: true,
// 	    	plotLines: [{
// 	    		value: 0,
// 	    		width: 1,
// 	    		color: '#808080'
// 	    	}]
// 	    },
// 	    tooltip: {
// 	    	formatter: function () {
// 	    		return '<b>' + this.series.name + '</b><br/>' +
// 	    		Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
// 	    		Highcharts.numberFormat(this.y, 2);
// 	    	}
// 	    },
// 	    legend: {
// 	    	enabled: true
// 	    },
// 	    exporting: {
// 	    	enabled: false
// 	    },
// 	    series: [{
// 	    	name: 'Random data',
// 	    	data: (function () {
// 	            // generate an array of random data
// 	            var data = [],
// 	            time = (new Date()).getTime(),
// 	            i;

// 	            for (i = -19; i <= 0; i += 1) {
// 	            	data.push({
// 	            		x: time + i * 1000,
// 	            		y: yaw
// 	            	});
// 	            }
// 	            return data;
// 	        }())
// 	    }]
// 	});

// 	Highcharts.chart('grafikHdrop', {
// 		chart: { 
// 			type: 'arearange',
// 			zoomType: 'x',
// 			type: 'spline',
// 	        // animation: Highcharts.svg, // don't animate in old IE
// 	        marginRight: 10,

// 	        events: {
// 	        	load: function () {

// 	                // set up the updating of the chart each second
// 	                var series = this.series[0];
// 	                setInterval(function () {
// 	                    var x = (new Date()).getTime(), // current time
// 	                    y = hdrop;
// 	                    series.addPoint([x, y], true, true);
// 	                }, 1000);
// 	            }
// 	        }
// 	    },

// 	    title: {
// 	    	text: 'Grafik ketinggian'
// 	    },
// 	    xAxis: {
// 	    	crosshair : true,
// 	    	type: 'datetime',
// 	    	tickPixelInterval: 150,
// 	    	labels: {
//                 overflow: 'justify'
//             }
// 	    },
// 	    yAxis: {
// 	    	title: {
// 	    		text: 'Ketinggian dalam ft'
// 	    	},
// 	    	crosshair : true,
// 	    	minorGridLineWidth: 0,
//             gridLineWidth: 0,
//             alternateGridColor: null,
// 	    	plotLines: [{
// 	    		value: 0,
// 	    		width: 1,
// 	    		color: '#808080'
// 	    	}]

// 	    },
// 	    tooltip: {
// 	    	formatter: function () {
// 	    		return '<b>' + this.series.name + '</b><br/>' +
// 	    		Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
// 	    		Highcharts.numberFormat(this.y, 2);
// 	    	}
// 	    },
// 	    legend: {
// 	    	enabled: true
// 	    },
// 	    exporting: {
// 	    	enabled: false
// 	    },
// 	    tooltip: {
//             valueSuffix: ' feat'
//         },
// 	   plotOptions: {
//             spline: {
//                 lineWidth: 4,
//                 states: {
//                     hover: {
//                         lineWidth: 5
//                     }
//                 },
//                 marker: {
//                     enabled: false
//                 }

//             }
//         },
// 	    series: [{
// 	    	name: 'Data',
// 	    	data: (function () {
// 	            // generate an array of random data
// 	            var data = [],
// 	            time = (new Date()).getTime(),
// 	            i;

// 	            for (i = -19; i <= 0; i += 1) {
// 	            	data.push({
// 	            		x: time + i * 1000,
// 	            		y: hdrop
// 	            	});
// 	            }
// 	            return data;
// 	        }())
// 	    }]
// 	});







// 	