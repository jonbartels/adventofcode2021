var lineReader = require('readline').createInterface({
  input: require('fs').createReadStream('day3.input')
});

var width = 12;
var columns = [];
var mostCommon = [];
var leastCommon = [];


	for(var i = 0; i < width; i++){
		columns.push('');
		mostCommon.push(null)
		leastCommon.push(null)
		}

var gamma = '';
var epsilon = '';

lineReader.on('line', function (line) {
	// Each line in input.txt will be successively available here as `line`.
	// /(forward|up|down)\s\d{1}
	console.log({line})

	for(var i = 0; i < width; i++){
		columns[i] += line[i];
	}
});


lineReader.on('close', function() {
	for(var i = 0; i < width; i++){
		var arr = columns[i].split('');
		let counts = {};
		arr.forEach(el => counts[el] = 1  + (counts[el] || 0))
		console.log({counts});

		if(counts['0'] > counts['1']){
			//zero is more common
			gamma += '0'
			epsilon += '1'
		} else {
			gamma += '1'
			epsilon += '0'
		}
	}

	console.log({gamma})
	console.log({epsilon})

	gamma = parseInt(gamma, 2);
	epsilon = parseInt(epsilon, 2);

	console.log({gamma})
	console.log({epsilon})

	console.log(gamma*epsilon)

	console.log("done!")
})
