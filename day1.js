var lineReader = require('readline').createInterface({
  input: require('fs').createReadStream('day1.input')
});

var previous = null;
var biggerCount = 0;

lineReader.on('close', function() {
	console.log({biggerCount})
})

lineReader.on('line', function (line) {
	// Each line in input.txt will be successively available here as `line`.
	var current = parseInt(line.trim());
	console.log({previous})
	console.log({current})
	console.log(typeof current)
	console.log(current > previous);
	console.log('---')
	if (previous && current > previous) { 
		biggerCount++ 
	}
	previous = current
});

