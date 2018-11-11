'use strict';
// EXPREES DAN SOCKET IO
const express = require('express'); // import package express
const app = express(); 
const server = require('http').createServer(app);
const io = require('socket.io').listen(server); // import package socket.io
const path = require('path'); // import package path (sudah default ada)

app.use(express.static(path.join(__dirname,'public')));
// app.use(express.static(path.join(__dirname,'webs'))); // untuk nempation file web kita di folder www
const portListen = 2424;
server.listen(portListen);
console.log("Server starting...:" + portListen)
var idDevice = 'houseDevice-1', temperature = 0 , humidity = 0 , windSpeed = 0 , windDirection = 0, luxIntensity = 0;

var h14data1 = 0, h14data2 = 0, h14data3 = 0, h14data4 = 0, h14data5 = 0, h14data6 = 0, h14data7 = 0, h14data8 = 0, h14data9 = 0, h14data10 = 0;
var h14data11 = 0, h14data12 = 0, h14data13 = 0, h14data14 = 0, h14data15 = 0, h14data16 = 0, h14data17 = 0, h14data18 = 0, h14data19 = 0, h14data20 = 0;
var h14data21 = 0, h14data22 = 0, h14data23 = 0, h14data24 = 0, h14data25 = 0, h14data26 = 0, h14data27 = 0, h14data28 = 0, h14data29 = 0, h14data30 = 0;
var h14data31 = 0, h14data32 = 0, h14data33 = 0, h14data34 = 0, h14data35 = 0, h14data36 = 0, h14data37 = 0, h14data38 = 0, h14data39 = 0, h14data40 = 0;

/*
Bismillah
Phase 1 :
a. Config MQTT
b. Susun datanya
c. Tes lempar datanya ke web

Phase 2 : 
d. Desain UI
e. Parse ke satu page dulu, page terdiri data angka dan data grafis
f. Lanjut buat page selanjutnya
g. Buat indeks
next. coba mysql
 
Phase 3 :
h. Hosting
g. setting setting tipis
i. buat data csv
*/
/*=====================================
=            Mysql SQL            =
=====================================*/
var mysql = require('mysql');
var conn = mysql.createConnection({
	//all mysql information from hosting goes here
	host     : 'localhost', 
	user     : 'root',
	password : '',
	database : 'mydb'
});

//connection to mysql
// conn.connect(function(err){
// 	if (err) {
// 		console.error('Error...' + err.stack);
// 		return;
// 	}
// 	console.log('Sukses...terkoneksi pada ' + conn.threadId)
// });

// function insertData(data){
// 	console.log(data);
// 	var dataInsert = {
// 		data1 : data1,
// 		data2 : data2,
// 		data3 : data3,
// 		data4 : data4,
// 		data5 : data5,
// 		data6 : data6,
// 		data7 : data7,
// 		data8 : data8,
// 		data9 : data9,
// 		data10 : data10,
// 		data11 : data11,
// 		data12 : data12,
// 		data13 : data13,
// 		data14 : data14,
// 		data15 : data15,
// 		data16 : data16,
// 		data17 : data17,
// 		data18 : data18,
// 		data19 : data19,
// 		data20 : data20,
// 		data21 : data21,
// 		data22 : data22,
// 		data23 : data23,
// 		data24 : data24,
// 		data25 : data25,
// 		data26 : data26,
// 		data27 : data27,
// 		data28 : data28,
// 		data29 : data29,
// 		data30 : data30,
// 		data31 : data31,
// 		data32 : data32,
// 		data33 : data33,
// 		data34 : data34,
// 		data35 : data35,
// 		data36 : data36,
// 		data37 : data37,
// 		data38 : data38,
// 		data39 : data39,
// 		data40 : data40
// 	};
// 	conn.query('INSERT INTO dataCloud SET?', dataInsert, function(err,result){
// 		if (err) {
// 			console.log(err);
// 		}else{
// 			console.log('Data masuk.....');
// 		}
// 	})
// };


/*===================================
=            API Express            =
===================================*/

app.get('/api/getCloud', (req,res,next) => {

})



// /*============================
// =            MQTT            =
// ============================*/
const mqtt = require('mqtt');
// const topic1 = 'DL1';
const topic1 = 'DL1'; //dummy topic
const topic2 = 'DL2'; //dummy topic
const topic3 = 'DL3'; //dummy topic
const topic4 = 'DL4'; //dummy topic
const topic5 = 'DL5'; //dummy topic
const topic6 = 'DL6'; //dummy topic
const topic7 = 'DL7'; //dummy topic
const topic8 = 'DL8'; //dummy topic
const topic9 = 'DL9'; //dummy topic
const topic10 = 'DL10'; //dummy topic
const topic11 = 'DL11'; //dummy topic
const topic12 = 'DL12'; //dummy topic
const topic13 = 'DL13'; //dummy topic
const topic14 = 'DL14'; //dummy topic
// const broker_server = 'mqtt://10.20.56.107'; //dummy broker
const broker_server = 'mqtt://platform.antares.id'; //broker darisananya

const options = {
	clientId : 'house_device' + Math.random().toString(16).substr(2, 8),
	port : 1883,
	keepalive : 60
}
const clientMqtt = mqtt.connect(broker_server,options);
clientMqtt.on('connect', mqtt_connect);
clientMqtt.on('reconnect', mqtt_reconnect);
clientMqtt.on('error', mqtt_error);
clientMqtt.on('message', mqtt_messageReceived);

function mqtt_connect() {
	console.log('MQTT Connected');
	clientMqtt.subscribe(topic1);
	clientMqtt.subscribe(topic2);
	clientMqtt.subscribe(topic3);
	clientMqtt.subscribe(topic4);
	clientMqtt.subscribe(topic5);
	clientMqtt.subscribe(topic6);
	clientMqtt.subscribe(topic7);
	clientMqtt.subscribe(topic8);
	clientMqtt.subscribe(topic9);
	clientMqtt.subscribe(topic10);
	clientMqtt.subscribe(topic11);
	clientMqtt.subscribe(topic12);
	clientMqtt.subscribe(topic13);
	clientMqtt.subscribe(topic14);
}

function mqtt_reconnect(err){
	console.log(err);
	console.log('MQTT reconnect');
	//clientMqtt = mqtt.connect(broker_server, options); // reconnect
}

function mqtt_error(err){
	console.log(err);
}

function after_publish() {
	console.log('MQTT Publish');
	//call after publish
}


var listMessage1 = [];
var listMessage2 = [];
var listMessage3 = [];
var listMessage4 = [];
var listMessage5 = [];
var listMessage6 = [];
var listMessage7 = [];
var listMessage8 = [];
var listMessage9 = [];
var listMessage10 = [];
var listMessage11 = [];
var listMessage12 = [];
var listMessage13 = [];
var listMessage14 = [];

// pesan keterima dari broker dan diteruskan ke client
function mqtt_messageReceived(topic , message , packet){
	//console.log('Message received : ' + message);
	//console.log('Topic :' + topic);
	//var stringBuf = packet.payload.toString('utf-8');
    //var obj = JSON.parse(message.toString());
    console.log('====================================');
  	console.log('Topic : ' + topic );
  	console.log('Payload : ' + message);


  	//will use later
	if (topic == topic1){
		// message 
		var h1data1 = 0, h1data2 = 0, h1data3 = 0, h1data4 = 0, h1data5 = 0, h1data6 = 0, h1data7 = 0, h1data8 = 0, h1data9 = 0, h1data10 = 0;
		var h1data11 = 0, h1data12 = 0, h1data13 = 0, h1data14 = 0, h1data15 = 0, h1data16 = 0, h1data17 = 0, h1data18 = 0, h1data19 = 0, h1data20 = 0;
		var h1data21 = 0, h1data22 = 0, h1data23 = 0, h1data24 = 0, h1data25 = 0, h1data26 = 0, h1data27 = 0, h1data28 = 0, h1data29 = 0, h1data30 = 0;
		var h1data31 = 0, h1data32 = 0, h1data33 = 0, h1data34 = 0, h1data35 = 0, h1data36 = 0, h1data37 = 0, h1data38 = 0, h1data39 = 0, h1data40 = 0;
		listMessage1 = parsingRAWData(message,","); //parse the message by comma
		console.log("Pesan : " +listMessage1);
		// set message to var
		h1data1 = listMessage1[0];
		console.log("pesan : "+ h1data1);

  		console.log('====================================');

		io.sockets.emit('house-dataone', {
									//json
									// call in client h1data.topic , h1data.windSpeeds....
									// topic : topic1 ,
									h1data1 : listMessage1[0],
									h1data2 : listMessage1[1],
									h1data3 : listMessage1[2],
									h1data4 : listMessage1[3],
									h1data5 : listMessage1[4],
									h1data6 : listMessage1[5],
									h1data7 : listMessage1[6],
									h1data8 : listMessage1[7],
									h1data9 : listMessage1[8],
									h1data10 : listMessage1[9],
									h1data11 : listMessage1[10],
									h1data12 : listMessage1[11],
									h1data13 : listMessage1[12],
									h1data14 : listMessage1[13],
									h1data15 : listMessage1[14],
									h1data16 : listMessage1[15],
									h1data17 : listMessage1[16],
									h1data18 : listMessage1[17],
									h1data19 : listMessage1[18],
									h1data20 : listMessage1[19],
									h1data21 : listMessage1[20],
									h1data22 : listMessage1[21],
									h1data23 : listMessage1[22],
									h1data24 : listMessage1[23],
									h1data25 : listMessage1[24],
									h1data26 : listMessage1[25],
									h1data27 : listMessage1[26],
									h1data28 : listMessage1[27],
									h1data29 : listMessage1[28],
									h1data30 : listMessage1[29],
									h1data31 : listMessage1[30],
									h1data32 : listMessage1[31],
									h1data33 : listMessage1[32],
									h1data34 : listMessage1[33],
									h1data35 : listMessage1[34],
									h1data36 : listMessage1[35],
									h1data37 : listMessage1[36],
									h1data38 : listMessage1[37],
									h1data39 : listMessage1[38],
									h1data40 : listMessage1[39]
								});
	} 
	if (topic == topic2){
		// message  
		var h2data1 = 0, h2data2 = 0, h2data3 = 0, h2data4 = 0, h2data5 = 0, h2data6 = 0, h2data7 = 0, h2data8 = 0, h2data9 = 0, h2data10 = 0;
		var h2data11 = 0, h2data12 = 0, h2data13 = 0, h2data14 = 0, h2data15 = 0, h2data16 = 0, h2data17 = 0, h2data18 = 0, h2data19 = 0, h2data20 = 0;
		var h2data21 = 0, h2data22 = 0, h2data23 = 0, h2data24 = 0, h2data25 = 0, h2data26 = 0, h2data27 = 0, h2data28 = 0, h2data29 = 0, h2data30 = 0;
		var h2data31 = 0, h2data32 = 0, h2data33 = 0, h2data34 = 0, h2data35 = 0, h2data36 = 0, h2data37 = 0, h2data38 = 0, h2data39 = 0, h2data40 = 0;
		
		listMessage2 = parsingRAWData(message,","); //parse the message by comma
		console.log("Pesan : " +listMessage2);
		// set message to var
		h2data1 = listMessage2[0];
		console.log("pesan : "+ h2data1);
  		console.log('====================================');

		io.sockets.emit('house-datatwo', {
									//json
									// call in client h2data.topic , h2data.windSpeeds....
									// topic : topic1 ,
									h2data1 : listMessage2[0],
									h2data2 : listMessage2[1],
									h2data3 : listMessage2[2],
									h2data4 : listMessage2[3],
									h2data5 : listMessage2[4],
									h2data6 : listMessage2[5],
									h2data7 : listMessage2[6],
									h2data8 : listMessage2[7],
									h2data9 : listMessage2[8],
									h2data10 : listMessage2[9],
									h2data11 : listMessage2[10],
									h2data12 : listMessage2[11],
									h2data13 : listMessage2[12],
									h2data14 : listMessage2[13],
									h2data15 : listMessage2[14],
									h2data16 : listMessage2[15],
									h2data17 : listMessage2[16],
									h2data18 : listMessage2[17],
									h2data19 : listMessage2[18],
									h2data20 : listMessage2[19],
									h2data21 : listMessage2[20],
									h2data22 : listMessage2[21],
									h2data23 : listMessage2[22],
									h2data24 : listMessage2[23],
									h2data25 : listMessage2[24],
									h2data26 : listMessage2[25],
									h2data27 : listMessage2[26],
									h2data28 : listMessage2[27],
									h2data29 : listMessage2[28],
									h2data30 : listMessage2[29],
									h2data31 : listMessage2[30],
									h2data32 : listMessage2[31],
									h2data33 : listMessage2[32],
									h2data34 : listMessage2[33],
									h2data35 : listMessage2[34],
									h2data36 : listMessage2[35],
									h2data37 : listMessage2[36],
									h2data38 : listMessage2[37],
									h2data39 : listMessage2[38],
									h2data40 : listMessage2[39]
								});
	} 
	if (topic == topic3){
		// message  
		var h3data1 = 0, h3data2 = 0, h3data3 = 0, h3data4 = 0, h3data5 = 0, h3data6 = 0, h3data7 = 0, h3data8 = 0, h3data9 = 0, h3data10 = 0;
		var h3data11 = 0, h3data12 = 0, h3data13 = 0, h3data14 = 0, h3data15 = 0, h3data16 = 0, h3data17 = 0, h3data18 = 0, h3data19 = 0, h3data20 = 0;
		var h3data21 = 0, h3data22 = 0, h3data23 = 0, h3data24 = 0, h3data25 = 0, h3data26 = 0, h3data27 = 0, h3data28 = 0, h3data29 = 0, h3data30 = 0;
		var h3data31 = 0, h3data32 = 0, h3data33 = 0, h3data34 = 0, h3data35 = 0, h3data36 = 0, h3data37 = 0, h3data38 = 0, h3data39 = 0, h3data40 = 0;
		
		listMessage3 = parsingRAWData(message,","); //parse the message by comma
		console.log("Pesan : " +listMessage3);
		// set message to var
		h3data1 = listMessage3[0];
		console.log("pesan : "+ h3data1);
  		console.log('====================================');

		io.sockets.emit('house-datath', {
									//json
									// call in client data.topic , data.windSpeeds....
									// topic : topic1 ,
									h3data1 : listMessage3[0],
									h3data2 : listMessage3[1],
									h3data3 : listMessage3[2],
									h3data4 : listMessage3[3],
									h3data5 : listMessage3[4],
									h3data6 : listMessage3[5],
									h3data7 : listMessage3[6],
									h3data8 : listMessage3[7],
									h3data9 : listMessage3[8],
									h3data10 : listMessage3[9],
									h3data11 : listMessage3[10],
									h3data12 : listMessage3[11],
									h3data13 : listMessage3[12],
									h3data14 : listMessage3[13],
									h3data15 : listMessage3[14],
									h3data16 : listMessage3[15],
									h3data17 : listMessage3[16],
									h3data18 : listMessage3[17],
									h3data19 : listMessage3[18],
									h3data20 : listMessage3[19],
									h3data21 : listMessage3[20],
									h3data22 : listMessage3[21],
									h3data23 : listMessage3[22],
									h3data24 : listMessage3[23],
									h3data25 : listMessage3[24],
									h3data26 : listMessage3[25],
									h3data27 : listMessage3[26],
									h3data28 : listMessage3[27],
									h3data29 : listMessage3[28],
									h3data30 : listMessage3[29],
									h3data31 : listMessage3[30],
									h3data32 : listMessage3[31],
									h3data33 : listMessage3[32],
									h3data34 : listMessage3[33],
									h3data35 : listMessage3[34],
									h3data36 : listMessage3[35],
									h3data37 : listMessage3[36],
									h3data38 : listMessage3[37],
									h3data39 : listMessage3[38],
									h3data40 : listMessage3[39]
								});
	} 
	if (topic == topic4){
		// message  
		var h4data1 = 0, h4data2 = 0, h4data3 = 0, h4data4 = 0, h4data5 = 0, h4data6 = 0, h4data7 = 0, h4data8 = 0, h4data9 = 0, h4data10 = 0;
		var h4data11 = 0, h4data12 = 0, h4data13 = 0, h4data14 = 0, h4data15 = 0, h4data16 = 0, h4data17 = 0, h4data18 = 0, h4data19 = 0, h4data20 = 0;
		var h4data21 = 0, h4data22 = 0, h4data23 = 0, h4data24 = 0, h4data25 = 0, h4data26 = 0, h4data27 = 0, h4data28 = 0, h4data29 = 0, h4data30 = 0;
		var h4data31 = 0, h4data32 = 0, h4data33 = 0, h4data34 = 0, h4data35 = 0, h4data36 = 0, h4data37 = 0, h4data38 = 0, h4data39 = 0, h4data40 = 0;
		
		listMessage4 = parsingRAWData(message,","); //parse the message by comma
		console.log("Pesan : " +listMessage4);
		// set message to var
		h4data1 = listMessage4[0];
		console.log("pesan : "+ h4data1);
  		console.log('====================================');

		io.sockets.emit('house-datafour', {
									//json
									// call in client data.topic , data.windSpeeds....
									// topic : topic1 ,
									h4data1 : listMessage4[0],
									h4data2 : listMessage4[1],
									h4data3 : listMessage4[2],
									h4data4 : listMessage4[3],
									h4data5 : listMessage4[4],
									h4data6 : listMessage4[5],
									h4data7 : listMessage4[6],
									h4data8 : listMessage4[7],
									h4data9 : listMessage4[8],
									h4data10 : listMessage4[9],
									h4data11 : listMessage4[10],
									h4data12 : listMessage4[11],
									h4data13 : listMessage4[12],
									h4data14 : listMessage4[13],
									h4data15 : listMessage4[14],
									h4data16 : listMessage4[15],
									h4data17 : listMessage4[16],
									h4data18 : listMessage4[17],
									h4data19 : listMessage4[18],
									h4data20 : listMessage4[19],
									h4data21 : listMessage4[20],
									h4data22 : listMessage4[21],
									h4data23 : listMessage4[22],
									h4data24 : listMessage4[23],
									h4data25 : listMessage4[24],
									h4data26 : listMessage4[25],
									h4data27 : listMessage4[26],
									h4data28 : listMessage4[27],
									h4data29 : listMessage4[28],
									h4data30 : listMessage4[29],
									h4data31 : listMessage4[30],
									h4data32 : listMessage4[31],
									h4data33 : listMessage4[32],
									h4data34 : listMessage4[33],
									h4data35 : listMessage4[34],
									h4data36 : listMessage4[35],
									h4data37 : listMessage4[36],
									h4data38 : listMessage4[37],
									h4data39 : listMessage4[38],
									h4data40 : listMessage4[39]
								});
	} 
	if (topic == topic5){
		// message  
		var h5data1 = 0, h5data2 = 0, h5data3 = 0, h5data4 = 0, h5data5 = 0, h5data6 = 0, h5data7 = 0, h5data8 = 0, h5data9 = 0, h5data10 = 0;
		var h5data11 = 0, h5data12 = 0, h5data13 = 0, h5data14 = 0, h5data15 = 0, h5data16 = 0, h5data17 = 0, h5data18 = 0, h5data19 = 0, h5data20 = 0;
		var h5data21 = 0, h5data22 = 0, h5data23 = 0, h5data24 = 0, h5data25 = 0, h5data26 = 0, h5data27 = 0, h5data28 = 0, h5data29 = 0, h5data30 = 0;
		var h5data31 = 0, h5data32 = 0, h5data33 = 0, h5data34 = 0, h5data35 = 0, h5data36 = 0, h5data37 = 0, h5data38 = 0, h5data39 = 0, h5data40 = 0;
		
		listMessage5 = parsingRAWData(message,","); //parse the message by comma
		console.log("Pesan : " +listMessage5);
		// set message to var
		h5data1 = listMessage5[0];
		console.log("pesan : "+ h5data1);
  		console.log('====================================');

		io.sockets.emit('house-datafive', {
									//json
									// call in client data.topic , data.windSpeeds....
									// topic : topic1 ,
									h5data1 : listMessage5[0],
									h5data2 : listMessage5[1],
									h5data3 : listMessage5[2],
									h5data4 : listMessage5[3],
									h5data5 : listMessage5[4],
									h5data6 : listMessage5[5],
									h5data7 : listMessage5[6],
									h5data8 : listMessage5[7],
									h5data9 : listMessage5[8],
									h5data10 : listMessage5[9],
									h5data11 : listMessage5[10],
									h5data12 : listMessage5[11],
									h5data13 : listMessage5[12],
									h5data14 : listMessage5[13],
									h5data15 : listMessage5[14],
									h5data16 : listMessage5[15],
									h5data17 : listMessage5[16],
									h5data18 : listMessage5[17],
									h5data19 : listMessage5[18],
									h5data20 : listMessage5[19],
									h5data21 : listMessage5[20],
									h5data22 : listMessage5[21],
									h5data23 : listMessage5[22],
									h5data24 : listMessage5[23],
									h5data25 : listMessage5[24],
									h5data26 : listMessage5[25],
									h5data27 : listMessage5[26],
									h5data28 : listMessage5[27],
									h5data29 : listMessage5[28],
									h5data30 : listMessage5[29],
									h5data31 : listMessage5[30],
									h5data32 : listMessage5[31],
									h5data33 : listMessage5[32],
									h5data34 : listMessage5[33],
									h5data35 : listMessage5[34],
									h5data36 : listMessage5[35],
									h5data37 : listMessage5[36],
									h5data38 : listMessage5[37],
									h5data39 : listMessage5[38],
									h5data40 : listMessage5[39]
								});
	} 
	if (topic == topic6){
		// message 
		var h6data1 = 0, h6data2 = 0, h6data3 = 0, h6data4 = 0, h6data5 = 0, h6data6 = 0, h6data7 = 0, h6data8 = 0, h6data9 = 0, h6data10 = 0;
		var h6data11 = 0, h6data12 = 0, h6data13 = 0, h6data14 = 0, h6data15 = 0, h6data16 = 0, h6data17 = 0, h6data18 = 0, h6data19 = 0, h6data20 = 0;
		var h6data21 = 0, h6data22 = 0, h6data23 = 0, h6data24 = 0, h6data25 = 0, h6data26 = 0, h6data27 = 0, h6data28 = 0, h6data29 = 0, h6data30 = 0;
		var h6data31 = 0, h6data32 = 0, h6data33 = 0, h6data34 = 0, h6data35 = 0, h6data36 = 0, h6data37 = 0, h6data38 = 0, h6data39 = 0, h6data40 = 0;
		 
		listMessage6 = parsingRAWData(message,","); //parse the message by comma
		console.log("Pesan : " +listMessage6);
		// set message to var
		h6data1 = listMessage6[0];
		console.log("pesan : "+ h6data1);
  		console.log('====================================');

		io.sockets.emit('house-datasix', {
									//json
									// call in client data.topic , data.windSpeeds....
									// topic : topic1 ,
									h6data1 : listMessage6[0],
									h6data2 : listMessage6[1],
									h6data3 : listMessage6[2],
									h6data4 : listMessage6[3],
									h6data5 : listMessage6[4],
									h6data6 : listMessage6[5],
									h6data7 : listMessage6[6],
									h6data8 : listMessage6[7],
									h6data9 : listMessage6[8],
									h6data10 : listMessage6[9],
									h6data11 : listMessage6[10],
									h6data12 : listMessage6[11],
									h6data13 : listMessage6[12],
									h6data14 : listMessage6[13],
									h6data15 : listMessage6[14],
									h6data16 : listMessage6[15],
									h6data17 : listMessage6[16],
									h6data18 : listMessage6[17],
									h6data19 : listMessage6[18],
									h6data20 : listMessage6[19],
									h6data21 : listMessage6[20],
									h6data22 : listMessage6[21],
									h6data23 : listMessage6[22],
									h6data24 : listMessage6[23],
									h6data25 : listMessage6[24],
									h6data26 : listMessage6[25],
									h6data27 : listMessage6[26],
									h6data28 : listMessage6[27],
									h6data29 : listMessage6[28],
									h6data30 : listMessage6[29],
									h6data31 : listMessage6[30],
									h6data32 : listMessage6[31],
									h6data33 : listMessage6[32],
									h6data34 : listMessage6[33],
									h6data35 : listMessage6[34],
									h6data36 : listMessage6[35],
									h6data37 : listMessage6[36],
									h6data38 : listMessage6[37],
									h6data39 : listMessage6[38],
									h6data40 : listMessage6[39]
								});
	} 
	if (topic == topic7){
		// message 
		var h7data1 = 0, h7data2 = 0, h7data3 = 0, h7data4 = 0, h7data5 = 0, h7data6 = 0, h7data7 = 0, h7data8 = 0, h7data9 = 0, h7data10 = 0;
		var h7data11 = 0, h7data12 = 0, h7data13 = 0, h7data14 = 0, h7data15 = 0, h7data16 = 0, h7data17 = 0, h7data18 = 0, h7data19 = 0, h7data20 = 0;
		var h7data21 = 0, h7data22 = 0, h7data23 = 0, h7data24 = 0, h7data25 = 0, h7data26 = 0, h7data27 = 0, h7data28 = 0, h7data29 = 0, h7data30 = 0;
		var h7data31 = 0, h7data32 = 0, h7data33 = 0, h7data34 = 0, h7data35 = 0, h7data36 = 0, h7data37 = 0, h7data38 = 0, h7data39 = 0, h7data40 = 0;
		 
		listMessage7 = parsingRAWData(message,","); //parse the message by comma
		console.log("Pesan : " +listMessage7);
		// set message to var
		h7data1 = listMessage7[0];
		console.log("pesan : "+ h7data1);
  		console.log('====================================');

		io.sockets.emit('house-seven', {
									//json
									// call in client data.topic , data.windSpeeds....
									// topic : topic1 ,
									h7data1 : listMessage7[0],
									h7data2 : listMessage7[1],
									h7data3 : listMessage7[2],
									h7data4 : listMessage7[3],
									h7data5 : listMessage7[4],
									h7data6 : listMessage7[5],
									h7data7 : listMessage7[6],
									h7data8 : listMessage7[7],
									h7data9 : listMessage7[8],
									h7data10 : listMessage7[9],
									h7data11 : listMessage7[10],
									h7data12 : listMessage7[11],
									h7data13 : listMessage7[12],
									h7data14 : listMessage7[13],
									h7data15 : listMessage7[14],
									h7data16 : listMessage7[15],
									h7data17 : listMessage7[16],
									h7data18 : listMessage7[17],
									h7data19 : listMessage7[18],
									h7data20 : listMessage7[19],
									h7data21 : listMessage7[20],
									h7data22 : listMessage7[21],
									h7data23 : listMessage7[22],
									h7data24 : listMessage7[23],
									h7data25 : listMessage7[24],
									h7data26 : listMessage7[25],
									h7data27 : listMessage7[26],
									h7data28 : listMessage7[27],
									h7data29 : listMessage7[28],
									h7data30 : listMessage7[29],
									h7data31 : listMessage7[30],
									h7data32 : listMessage7[31],
									h7data33 : listMessage7[32],
									h7data34 : listMessage7[33],
									h7data35 : listMessage7[34],
									h7data36 : listMessage7[35],
									h7data37 : listMessage7[36],
									h7data38 : listMessage7[37],
									h7data39 : listMessage7[38],
									h7data40 : listMessage7[39]
								});
	} 
	if (topic == topic8){
		// message  
		var h8data1 = 0, h8data2 = 0, h8data3 = 0, h8data4 = 0, h8data5 = 0, h8data6 = 0, h8data7 = 0, h8data8 = 0, h8data9 = 0, h8data10 = 0;
		var h8data11 = 0, h8data12 = 0, h8data13 = 0, h8data14 = 0, h8data15 = 0, h8data16 = 0, h8data17 = 0, h8data18 = 0, h8data19 = 0, h8data20 = 0;
		var h8data21 = 0, h8data22 = 0, h8data23 = 0, h8data24 = 0, h8data25 = 0, h8data26 = 0, h8data27 = 0, h8data28 = 0, h8data29 = 0, h8data30 = 0;
		var h8data31 = 0, h8data32 = 0, h8data33 = 0, h8data34 = 0, h8data35 = 0, h8data36 = 0, h8data37 = 0, h8data38 = 0, h8data39 = 0, h8data40 = 0;
		
		listMessage8 = parsingRAWData(message,","); //parse the message by comma
		console.log("Pesan : " +listMessage8);
		// set message to var
		h8data1 = listMessage8[0];
		console.log("pesan : "+ h8data1);
  		console.log('====================================');

		io.sockets.emit('house-dataeight', {
									//json
									// call in client data.topic , data.windSpeeds....
									// topic : topic1 ,
									h8data1 : listMessage8[0],
									h8data2 : listMessage8[1],
									h8data3 : listMessage8[2],
									h8data4 : listMessage8[3],
									h8data5 : listMessage8[4],
									h8data6 : listMessage8[5],
									h8data7 : listMessage8[6],
									h8data8 : listMessage8[7],
									h8data9 : listMessage8[8],
									h8data10 : listMessage8[9],
									h8data11 : listMessage8[10],
									h8data12 : listMessage8[11],
									h8data13 : listMessage8[12],
									h8data14 : listMessage8[13],
									h8data15 : listMessage8[14],
									h8data16 : listMessage8[15],
									h8data17 : listMessage8[16],
									h8data18 : listMessage8[17],
									h8data19 : listMessage8[18],
									h8data20 : listMessage8[19],
									h8data21 : listMessage8[20],
									h8data22 : listMessage8[21],
									h8data23 : listMessage8[22],
									h8data24 : listMessage8[23],
									h8data25 : listMessage8[24],
									h8data26 : listMessage8[25],
									h8data27 : listMessage8[26],
									h8data28 : listMessage8[27],
									h8data29 : listMessage8[28],
									h8data30 : listMessage8[29],
									h8data31 : listMessage8[30],
									h8data32 : listMessage8[31],
									h8data33 : listMessage8[32],
									h8data34 : listMessage8[33],
									h8data35 : listMessage8[34],
									h8data36 : listMessage8[35],
									h8data37 : listMessage8[36],
									h8data38 : listMessage8[37],
									h8data39 : listMessage8[38],
									h8data40 : listMessage8[39]
								});
	} 
	if (topic == topic9){
		// message  
		var h9data1 = 0, h9data2 = 0, h9data3 = 0, h9data4 = 0, h9data5 = 0, h9data6 = 0, h9data7 = 0, h9data8 = 0, h9data9 = 0, h9data10 = 0;
		var h9data11 = 0, h9data12 = 0, h9data13 = 0, h9data14 = 0, h9data15 = 0, h9data16 = 0, h9data17 = 0, h9data18 = 0, h9data19 = 0, h9data20 = 0;
		var h9data21 = 0, h9data22 = 0, h9data23 = 0, h9data24 = 0, h9data25 = 0, h9data26 = 0, h9data27 = 0, h9data28 = 0, h9data29 = 0, h9data30 = 0;
		var h9data31 = 0, h9data32 = 0, h9data33 = 0, h9data34 = 0, h9data35 = 0, h9data36 = 0, h9data37 = 0, h9data38 = 0, h9data39 = 0, h9data40 = 0;
		
		listMessage9 = parsingRAWData(message,","); //parse the message by comma
		console.log("Pesan : " +listMessage9);
		// set message to var
		h9data1 = listMessage9[0];
		console.log("pesan : "+ h9data1);
  		console.log('====================================');

		io.sockets.emit('house-datanine', {
									//json
									// call in client data.topic , data.windSpeeds....
									// topic : topic1 ,
									h9data1 : listMessage9[0],
									h9data2 : listMessage9[1],
									h9data3 : listMessage9[2],
									h9data4 : listMessage9[3],
									h9data5 : listMessage9[4],
									h9data6 : listMessage9[5],
									h9data7 : listMessage9[6],
									h9data8 : listMessage9[7],
									h9data9 : listMessage9[8],
									h9data10 : listMessage9[9],
									h9data11 : listMessage9[10],
									h9data12 : listMessage9[11],
									h9data13 : listMessage9[12],
									h9data14 : listMessage9[13],
									h9data15 : listMessage9[14],
									h9data16 : listMessage9[15],
									h9data17 : listMessage9[16],
									h9data18 : listMessage9[17],
									h9data19 : listMessage9[18],
									h9data20 : listMessage9[19],
									h9data21 : listMessage9[20],
									h9data22 : listMessage9[21],
									h9data23 : listMessage9[22],
									h9data24 : listMessage9[23],
									h9data25 : listMessage9[24],
									h9data26 : listMessage9[25],
									h9data27 : listMessage9[26],
									h9data28 : listMessage9[27],
									h9data29 : listMessage9[28],
									h9data30 : listMessage9[29],
									h9data31 : listMessage9[30],
									h9data32 : listMessage9[31],
									h9data33 : listMessage9[32],
									h9data34 : listMessage9[33],
									h9data35 : listMessage9[34],
									h9data36 : listMessage9[35],
									h9data37 : listMessage9[36],
									h9data38 : listMessage9[37],
									h9data39 : listMessage9[38],
									h9data40 : listMessage9[39]
								});
	} 
	if (topic == topic10){
		// message  
		var h10data1 = 0, h10data2 = 0, h10data3 = 0, h10data4 = 0, h10data5 = 0, h10data6 = 0, h10data7 = 0, h10data8 = 0, h10data9 = 0, h10data10 = 0;
		var h10data11 = 0, h10data12 = 0, h10data13 = 0, h10data14 = 0, h10data15 = 0, h10data16 = 0, h10data17 = 0, h10data18 = 0, h10data19 = 0, h10data20 = 0;
		var h10data21 = 0, h10data22 = 0, h10data23 = 0, h10data24 = 0, h10data25 = 0, h10data26 = 0, h10data27 = 0, h10data28 = 0, h10data29 = 0, h10data30 = 0;
		var h10data31 = 0, h10data32 = 0, h10data33 = 0, h10data34 = 0, h10data35 = 0, h10data36 = 0, h10data37 = 0, h10data38 = 0, h10data39 = 0, h10data40 = 0;
		
		listMessage10 = parsingRAWData(message,","); //parse the message by comma
		console.log("Pesan : " +listMessage10);
		// set message to var
		h10data1 = listMessage10[0];
		console.log("pesan : "+  h10data1);
  		console.log('====================================');

		io.sockets.emit('house-dataten', {
									//json
									// call in client data.topic , data.windSpeeds....
									// topic : topic1 ,
									h10data1 : listMessage10[0],
									h10data2 : listMessage10[1],
									h10data3 : listMessage10[2],
									h10data4 : listMessage10[3],
									h10data5 : listMessage10[4],
									h10data6 : listMessage10[5],
									h10data7 : listMessage10[6],
									h10data8 : listMessage10[7],
									h10data9 : listMessage10[8],
									h10data10 : listMessage10[9],
									h10data11 : listMessage10[10],
									h10data12 : listMessage10[11],
									h10data13 : listMessage10[12],
									h10data14 : listMessage10[13],
									h10data15 : listMessage10[14],
									h10data16 : listMessage10[15],
									h10data17 : listMessage10[16],
									h10data18 : listMessage10[17],
									h10data19 : listMessage10[18],
									h10data20 : listMessage10[19],
									h10data21 : listMessage10[20],
									h10data22 : listMessage10[21],
									h10data23 : listMessage10[22],
									h10data24 : listMessage10[23],
									h10data25 : listMessage10[24],
									h10data26 : listMessage10[25],
									h10data27 : listMessage10[26],
									h10data28 : listMessage10[27],
									h10data29 : listMessage10[28],
									h10data30 : listMessage10[29],
									h10data31 : listMessage10[30],
									h10data32 : listMessage10[31],
									h10data33 : listMessage10[32],
									h10data34 : listMessage10[33],
									h10data35 : listMessage10[34],
									h10data36 : listMessage10[35],
									h10data37 : listMessage10[36],
									h10data38 : listMessage10[37],
									h10data39 : listMessage10[38],
									h10data40 : listMessage10[39]
								});
	} 
	if (topic == topic11){
		// message  
		var h11data1 = 0, h11data2 = 0, h11data3 = 0, h11data4 = 0, h11data5 = 0, h11data6 = 0, h11data7 = 0, h11data8 = 0, h11data9 = 0, h11data10 = 0;
		var h11data11 = 0, h11data12 = 0, h11data13 = 0, h11data14 = 0, h11data15 = 0, h11data16 = 0, h11data17 = 0, h11data18 = 0, h11data19 = 0, h11data20 = 0;
		var h11data21 = 0, h11data22 = 0, h11data23 = 0, h11data24 = 0, h11data25 = 0, h11data26 = 0, h11data27 = 0, h11data28 = 0, h11data29 = 0, h11data30 = 0;
		var h11data31 = 0, h11data32 = 0, h11data33 = 0, h11data34 = 0, h11data35 = 0, h11data36 = 0, h11data37 = 0, h11data38 = 0, h11data39 = 0, h11data40 = 0;
		
		listMessage11 = parsingRAWData(message,","); //parse the message by comma
		console.log("Pesan : " +listMessage11);
		// set message to var
		h11data1 = listMessage11[0];
		console.log("pesan : "+h11data1);
  		console.log('====================================');

		io.sockets.emit('house-dataeleven', {
									//json
									// call in client data.topic , data.windSpeeds....
									// topic : topic1 ,
									h11data1 : listMessage11[0],
									h11data2 : listMessage11[1],
									h11data3 : listMessage11[2],
									h11data4 : listMessage11[3],
									h11data5 : listMessage11[4],
									h11data6 : listMessage11[5],
									h11data7 : listMessage11[6],
									h11data8 : listMessage11[7],
									h11data9 : listMessage11[8],
									h11data10 : listMessage11[9],
									h11data11 : listMessage11[10],
									h11data12 : listMessage11[11],
									h11data13 : listMessage11[12],
									h11data14 : listMessage11[13],
									h11data15 : listMessage11[14],
									h11data16 : listMessage11[15],
									h11data17 : listMessage11[16],
									h11data18 : listMessage11[17],
									h11data19 : listMessage11[18],
									h11data20 : listMessage11[19],
									h11data21 : listMessage11[20],
									h11data22 : listMessage11[21],
									h11data23 : listMessage11[22],
									h11data24 : listMessage11[23],
									h11data25 : listMessage11[24],
									h11data26 : listMessage11[25],
									h11data27 : listMessage11[26],
									h11data28 : listMessage11[27],
									h11data29 : listMessage11[28],
									h11data30 : listMessage11[29],
									h11data31 : listMessage11[30],
									h11data32 : listMessage11[31],
									h11data33 : listMessage11[32],
									h11data34 : listMessage11[33],
									h11data35 : listMessage11[34],
									h11data36 : listMessage11[35],
									h11data37 : listMessage11[36],
									h11data38 : listMessage11[37],
									h11data39 : listMessage11[38],
									h11data40 : listMessage11[39]
								});
	} 
	if (topic == topic12){
		// message  
		var h12data1 = 0, h12data2 = 0, h12data3 = 0, h12data4 = 0, h12data5 = 0, h12data6 = 0, h12data7 = 0, h12data8 = 0, h12data9 = 0, h12data10 = 0;
		var h12data11 = 0, h12data12 = 0, h12data13 = 0, h12data14 = 0, h12data15 = 0, h12data16 = 0, h12data17 = 0, h12data18 = 0, h12data19 = 0, h12data20 = 0;
		var h12data21 = 0, h12data22 = 0, h12data23 = 0, h12data24 = 0, h12data25 = 0, h12data26 = 0, h12data27 = 0, h12data28 = 0, h12data29 = 0, h12data30 = 0;
		var h12data31 = 0, h12data32 = 0, h12data33 = 0, h12data34 = 0, h12data35 = 0, h12data36 = 0, h12data37 = 0, h12data38 = 0, h12data39 = 0, h12data40 = 0;
		
		listMessage12 = parsingRAWData(message,","); //parse the message by comma
		console.log("Pesan : " +listMessage12);
		// set message to var
		h12data1 = listMessage12[0];
		console.log("pesan : "+h12data1);
  		console.log('====================================');

		io.sockets.emit('house-datatwelve', {
									//json
									// call in client data.topic , data.windSpeeds....
									// topic : topic1 ,
									h12data1 : listMessage12[0],
									h12data2 : listMessage12[1],
									h12data3 : listMessage12[2],
									h12data4 : listMessage12[3],
									h12data5 : listMessage12[4],
									h12data6 : listMessage12[5],
									h12data7 : listMessage12[6],
									h12data8 : listMessage12[7],
									h12data9 : listMessage12[8],
									h12data10 : listMessage12[9],
									h12data11 : listMessage12[10],
									h12data12 : listMessage12[11],
									h12data13 : listMessage12[12],
									h12data14 : listMessage12[13],
									h12data15 : listMessage12[14],
									h12data16 : listMessage12[15],
									h12data17 : listMessage12[16],
									h12data18 : listMessage12[17],
									h12data19 : listMessage12[18],
									h12data20 : listMessage12[19],
									h12data21 : listMessage12[20],
									h12data22 : listMessage12[21],
									h12data23 : listMessage12[22],
									h12data24 : listMessage12[23],
									h12data25 : listMessage12[24],
									h12data26 : listMessage12[25],
									h12data27 : listMessage12[26],
									h12data28 : listMessage12[27],
									h12data29 : listMessage12[28],
									h12data30 : listMessage12[29],
									h12data31 : listMessage12[30],
									h12data32 : listMessage12[31],
									h12data33 : listMessage12[32],
									h12data34 : listMessage12[33],
									h12data35 : listMessage12[34],
									h12data36 : listMessage12[35],
									h12data37 : listMessage12[36],
									h12data38 : listMessage12[37],
									h12data39 : listMessage12[38],
									h12data40 : listMessage12[39]
								});
	} 
	if (topic == topic13){
		// message  
		var h13data1 = 0, h13data2 = 0, h13data3 = 0, h13data4 = 0, h13data5 = 0, h13data6 = 0, h13data7 = 0, h13data8 = 0, h13data9 = 0, h13data10 = 0;
		var h13data11 = 0, h13data12 = 0, h13data13 = 0, h13data14 = 0, h13data15 = 0, h13data16 = 0, h13data17 = 0, h13data18 = 0, h13data19 = 0, h13data20 = 0;
		var h13data21 = 0, h13data22 = 0, h13data23 = 0, h13data24 = 0, h13data25 = 0, h13data26 = 0, h13data27 = 0, h13data28 = 0, h13data29 = 0, h13data30 = 0;
		var h13data31 = 0, h13data32 = 0, h13data33 = 0, h13data34 = 0, h13data35 = 0, h13data36 = 0, h13data37 = 0, h13data38 = 0, h13data39 = 0, h13data40 = 0;
		
		listMessage13 = parsingRAWData(message,","); //parse the message by comma
		console.log("Pesan : " +listMessage13);
		// set message to var
		h13data1 = listMessage13[0];
		console.log("pesan : "+h13data1)
  		console.log('====================================');

		io.sockets.emit('datathreeteen', {
									//json
									// call in client data.topic , data.windSpeeds....
									// topic : topic1 ,
									h13data1 : listMessage13[0],
									h13data2 : listMessage13[1],
									h13data3 : listMessage13[2],
									h13data4 : listMessage13[3],
									h13data5 : listMessage13[4],
									h13data6 : listMessage13[5],
									h13data7 : listMessage13[6],
									h13data8 : listMessage13[7],
									h13data9 : listMessage13[8],
									h13data10 : listMessage13[9],
									h13data11 : listMessage13[10],
									h13data12 : listMessage13[11],
									h13data13 : listMessage13[12],
									h13data14 : listMessage13[13],
									h13data15 : listMessage13[14],
									h13data16 : listMessage13[15],
									h13data17 : listMessage13[16],
									h13data18 : listMessage13[17],
									h13data19 : listMessage13[18],
									h13data20 : listMessage13[19],
									h13data21 : listMessage13[20],
									h13data22 : listMessage13[21],
									h13data23 : listMessage13[22],
									h13data24 : listMessage13[23],
									h13data25 : listMessage13[24],
									h13data26 : listMessage13[25],
									h13data27 : listMessage13[26],
									h13data28 : listMessage13[27],
									h13data29 : listMessage13[28],
									h13data30 : listMessage13[29],
									h13data31 : listMessage13[30],
									h13data32 : listMessage13[31],
									h13data33 : listMessage13[32],
									h13data34 : listMessage13[33],
									h13data35 : listMessage13[34],
									h13data36 : listMessage13[35],
									h13data37 : listMessage13[36],
									h13data38 : listMessage13[37],
									h13data39 : listMessage13[38],
									h13data40 : listMessage13[39]
								});
	} 
	if (topic == topic14){
		// message  
		var h14data1 = 0, h14data2 = 0, h14data3 = 0, h14data4 = 0, h14data5 = 0, h14data6 = 0, h14data7 = 0, h14data8 = 0, h14data9 = 0, h14data10 = 0;
		var h14data11 = 0, h14data12 = 0, h14data13 = 0, h14data14 = 0, h14data15 = 0, h14data16 = 0, h14data17 = 0, h14data18 = 0, h14data19 = 0, h14data20 = 0;
		var h14data21 = 0, h14data22 = 0, h14data23 = 0, h14data24 = 0, h14data25 = 0, h14data26 = 0, h14data27 = 0, h14data28 = 0, h14data29 = 0, h14data30 = 0;
		var h14data31 = 0, h14data32 = 0, h14data33 = 0, h14data34 = 0, h14data35 = 0, h14data36 = 0, h14data37 = 0, h14data38 = 0, h14data39 = 0, h14data40 = 0;
		
		listMessage14 = parsingRAWData(message,","); //parse the message by comma
		console.log("Pesan 14: " +listMessage14);
		// set message to var
		h14data1 = listMessage14[0];
		console.log("pesan : "+h14data1)
		
  		console.log('====================================');

		io.sockets.emit('house-datafouteen', {
									//json
									// call in client data.topic , data.windSpeeds....
									// topic : topic1 ,
									h14data1 : listMessage14[0],
									h14data2 : listMessage14[1],
									h14data3 : listMessage14[2],
									h14data4 : listMessage14[3],
									h14data5 : listMessage14[4],
									h14data6 : listMessage14[5],
									h14data7 : listMessage14[6],
									h14data8 : listMessage14[7],
									h14data9 : listMessage14[8],
									h14data10 : listMessage14[9],
									h14data11 : listMessage14[10],
									h14data12 : listMessage14[11],
									h14data13 : listMessage14[12],
									h14data14 : listMessage14[13],
									h14data15 : listMessage14[14],
									h14data16 : listMessage14[15],
									h14data17 : listMessage14[16],
									h14data18 : listMessage14[17],
									h14data19 : listMessage14[18],
									h14data20 : listMessage14[19],
									h14data21 : listMessage14[20],
									h14data22 : listMessage14[21],
									h14data23 : listMessage14[22],
									h14data24 : listMessage14[23],
									h14data25 : listMessage14[24],
									h14data26 : listMessage14[25],
									h14data27 : listMessage14[26],
									h14data28 : listMessage14[27],
									h14data29 : listMessage14[28],
									h14data30 : listMessage14[29],
									h14data31 : listMessage14[30],
									h14data32 : listMessage14[31],
									h14data33 : listMessage14[32],
									h14data34 : listMessage14[33],
									h14data35 : listMessage14[34],
									h14data36 : listMessage14[35],
									h14data37 : listMessage14[36],
									h14data38 : listMessage14[37],
									h14data39 : listMessage14[38],
									h14data40 : listMessage14[39]
								});
	} 
}
// /*=====  End of MQTT  ======*/

/*=================================
=            Socket IO            =
=================================*/
let jumlahClient = 0;
io.on('connection' , (socket)=> {
	jumlahClient++;
	console.log('New Client Connected');

	// socket.on('ctrl-led1', (data) => {
	// 	// receive from web and publish mqtt to turn LED1
	// 	clientMqtt.publish(topic2, data.data.toString());
	// 	console.log('publish message to ' + topic1 + ' - message ' + data.data);
	// });


	socket.on('disconnect' , ()=> {
		jumlahClient--;
		console.log('Client disconnected \n' + 'Total :' + jumlahClient);
	});

});


/*=====  End of Socket IO  ======*/



// FUNCTION UNTUK PARSING
// argument 1 : data yang diparsing ex: 123 434 5334
// argument 2 : pemisah
// return array data [0] =123 [1] =434 [2] =5334
function parsingRAWData(data,delimiter){
	let result;
	result = data.toString().replace(/(\r\n|\n|\r)/gm,"").split(delimiter);

	return result;
}
