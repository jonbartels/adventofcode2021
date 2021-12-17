var lineReader = require('readline').createInterface({
  input: require('fs').createReadStream('day1.input.short')
});

var windowSize = 3;
var lineNumber = 0;
var letterCode = 65;
var windows = {};
var windowMin = 0;

lineReader.on('line', function (line) {
	// Each line in input.txt will be successively available here as `line`.
	var current = parseInt(line.trim());
	
	var window = lineNumber % windowSize;
	console.log({lineNumber})
	console.log({window})
	console.log({current});
	console.log(String.fromCharCode(windowMin + 65));

	if(!windows[String.fromCharCode(windowMin + 65)]){
		windows[String.fromCharCode(windowMin + 65)] = [];
	}
	windows[String.fromCharCode(windowMin + 65)].push(current);

	lineNumber++;
});

var biggerCount = 0;

lineReader.on('close', function() {
	console.log({biggerCount})
	console.log({windows})
})