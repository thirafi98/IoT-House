'use strict';
// EXPREES DAN SOCKET IO
const express = require('express'); // import package express
const app = express(); 
const server = require('http').createServer(app);
const io = require('socket.io').listen(server); // import package socket.io
const path = require('path'); // import package path (sudah default ada)

app.use(express.static(path.join(__dirname,'public'))); // untuk nempation file web kita di folder www
const portListen = 1234;
server.listen(portListen);
console.log("Server starting...:" + portListen)
var idDevice = 'houseDevice-1', temperature = 0 , humidity = 0 , windSpeed = 0 , windDirection = 0, luxIntensity = 0;

var data1 = 0, data2 = 0, data3 = 0, data4 = 0, data5 = 0, data6 = 0, data7 = 0, data8 = 0, data9 = 0, data10 = 0;
var data11 = 0, data12 = 0, data13 = 0, data14 = 0, data15 = 0, data16 = 0, data17 = 0, data18 = 0, data19 = 0, data20 = 0;
var data21 = 0, data22 = 0, data23 = 0, data24 = 0, data25 = 0, data26 = 0, data27 = 0, data28 = 0, data29 = 0, data30 = 0;
var data31 = 0, data32 = 0, data33 = 0, data34 = 0, data35 = 0, data36 = 0, data37 = 0, data38 = 0, data39 = 0, data40 = 0;

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

Phase 3 :
h. Hosting
g. setting setting tipis
*/


// /*============================
// =            MQTT            =
// ============================*/
const mqtt = require('mqtt');
// const topic1 = 'DL1';
const topic1 = 'DL1'; //dummy topic
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


let listMessage = [];
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
		listMessage = parsingRAWData(message,","); //parse the message by comma
		console.log("MSG : " +listMessage);
		// set message to var
		data1 = listMessage[0];
		data2 = listMessage[1];
		data3 = listMessage[2];
		data4 = listMessage[3];
		data5 = listMessage[4];
		data6 = listMessage[5];
		data7 = listMessage[6];
		data8 = listMessage[7];
		data9 = listMessage[8];
		data10 = listMessage[9];
		data11 = listMessage[10];
		data12 = listMessage[11];
		data13 = listMessage[12];
		data14 = listMessage[13];
		data15 = listMessage[14];
		data16 = listMessage[15];
		data17 = listMessage[16];
		data18 = listMessage[17];
		data19 = listMessage[18];
		data20 = listMessage[19];
		data21 = listMessage[20];
		data22 = listMessage[21];
		data23 = listMessage[22];
		data24 = listMessage[23];
		data25 = listMessage[24];
		data26 = listMessage[25];
		data27 = listMessage[26];
		data28 = listMessage[27];
		data29 = listMessage[28];
		data30 = listMessage[29];
		data31 = listMessage[30];
		data32 = listMessage[31];
		data33 = listMessage[32];
		data34 = listMessage[33];
		data35 = listMessage[34];
		data36 = listMessage[35];
		data37 = listMessage[36];
		data38 = listMessage[37];
		data39 = listMessage[38];
		data40 = listMessage[39];
  		console.log('====================================');

		io.sockets.emit('house-data', {
									//json
									// call in client data.topic , data.windSpeeds....
									// topic : topic1 ,
									data1 : listMessage[0],
									data2 : listMessage[1],
									data3 : listMessage[2],
									data4 : listMessage[3],
									data5 : listMessage[4],
									data6 : listMessage[5],
									data7 : listMessage[6],
									data8 : listMessage[7],
									data9 : listMessage[8],
									data10 : listMessage[9],
									data11 : listMessage[10],
									data12 : listMessage[11],
									data13 : listMessage[12],
									data14 : listMessage[13],
									data15 : listMessage[14],
									data16 : listMessage[15],
									data17 : listMessage[16],
									data18 : listMessage[17],
									data19 : listMessage[18],
									data20 : listMessage[19],
									data21 : listMessage[20],
									data22 : listMessage[21],
									data23 : listMessage[22],
									data24 : listMessage[23],
									data25 : listMessage[24],
									data26 : listMessage[25],
									data27 : listMessage[26],
									data28 : listMessage[27],
									data29 : listMessage[28],
									data30 : listMessage[29],
									data31 : listMessage[30],
									data32 : listMessage[31],
									data33 : listMessage[32],
									data34 : listMessage[33],
									data35 : listMessage[34],
									data36 : listMessage[35],
									data37 : listMessage[36],
									data38 : listMessage[37],
									data39 : listMessage[38],
									data40 : listMessage[39]
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
