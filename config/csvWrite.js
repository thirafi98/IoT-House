const fs = require('fs');
const csvWrite = require('csv-write-stream');


let csv = {
	options : {
		headers : [
			"Data 1",
			"Data 2",
			"Data 3",
			"Data 4",
			"Data 5",
			"Data 6",
			"Data 7",
			"Data 8",
			"Data 9",
			"Data 10",
			"Data 11",
			"Data 12",
			"Data 13",
			"Data 14",
			"Data 15",
			"Data 16",
			"Data 17",
			"Data 18",
			"Data 19",
			"Data 20",
			"Data 21",
			"Data 22",
			"Data 23",
			"Data 24",
			"Data 25",
			"Data 26",
			"Data 27",
			"Data 28",
			"Data 29",
			"Data 30",
			"Data 31",
			"Data 32",
			"Data 33",
			"Data 34",
			"Data 35",
			"Data 36",
			"Data 37",
			"Data 38",
			"Data 39",
			"Data 40",
		]
	},

	createCSVWrite(namafile){
		let obj = csvWrite(csv.options);
		obj.pipe(fs.createWriteStream(namafile)) 
		return obj;
	},
	saveFile : (obs,data) => {
		obj.write(data);
	},
	closeFile : (obj) => {
		obj.end();
	}
}

module.exports = csv;