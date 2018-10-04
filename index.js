// EXPREES DAN SOCKET IO
const express = require('express'); // import package express
const app = express(); 
const server = require('http').createServer(app);
const io = require('socket.io').listen(server); // import package socket.io
const path = require('path'); // import package path (sudah default ada)

app.use(express.static(path.join(__dirname,'www'))); // untuk nempation file web kita di folder www
const portListen = 3030;
server.listen(portListen);
console.log("Server starting... 192.168.1.2:" + portListen)

var deviceId = 'house-IOT', suhuTembok1 = 0, suhuTembok2 = 0, suhuTembok3 = 0, suhuTembok4 = 0;

/*===================================
=            API Express            =
===================================*/
app.get('/api/v1', (req,res,next) => {
	 //let result = getIndoor();
	//const results; 
	
			/*
0. BME DATA : 0, 1, 2 data bme : suhu, lembab, tekanan
1. LUX : 3
2. rainfall : 4
3. WIND DIR : 5
4. GPS : 6, 7
*/
// 			const queryString = "SELECT * FROM weather";

// 			conn.query(queryString, (err,result) => {
// 				if(err){
// 					console.log(err);
// 				} else {
// 					//console.log(result.rows);
					
// 					 res.json(result);
// 					 console.log("Get data using API...");
// 				}		
// 			});
	
// });

//Publish and subs goes here
app.get('/flyDrone-Device1', (req,res,next) => {
	clientMqtt.publish("telkomIoT/drone","fly");
	res.sendFile(__dirname + '/index.html');

	 
});
/*===================================
=            End here               =
===================================*/


/*============================
=            MQTT            =
============================*/

const mqtt = require('mqtt');
const topic1 = ''; //topic from iot.analyzer.com goes here

const broker_server = 'mqtt://'; //broker server from iot.analyzer.com goes here

const options = {
	clientId : 'house_device' + Math.random().toString(16).substr(2, 8),
	port : 1883, 
	keepalive: 60
}

const clientMqtt = mqtt.connect(broker_server, options);
clientMqtt.on('connect', mqtt_connect);
clientMqtt.on('reconnect', mqtt_reconnect);
clientMqtt.on('error', mqtt_error);
clientMqtt.on('message', mqtt_message);

function mqtt_connect(){
	console.log('Mqtt client connected');
	clientMqtt.subscribe(topic1);
}

function mqtt_reconnect(err){
	console.log(err);
	console.log('Mqtt client reconnect')
}

function mqtt_error(err){
	console.log(err);
}

function after_publish() {
	console.log('MQTT Publish');
	//call after publish
}


let listMessage = [];
function mqtt_message(topic, message, paket){
	console.log('Topik : '+ topic);
	console.log('Isi Pesan : '+ message);

	if(topic == topic1){
		listMessage = parsingRAWData(message, ",");
		console.log("Payload : " + listMessage);


	}
}



// FUNCTION UNTUK PARSING
// argument 1 : data yang diparsing ex: 123 434 5334
// argument 2 : pemisah
// return array data [0] =123 [1] =434 [2] =5334
function parsingRAWData(data,delimiter){
	let result;
	result = data.toString().replace(/(\r\n|\n|\r)/gm,"").split(delimiter);

	return result;
}
