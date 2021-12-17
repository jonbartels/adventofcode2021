var lineReader = require('readline').createInterface({
  input: require('fs').createReadStream('day2.input')
});

var depth = 0;
var horizontal = 0;
var aim = 0;
const regex = /(forward|up|down)\s(\d{1})/gm;

lineReader.on('line', function (line) {
	// Each line in input.txt will be successively available here as `line`.
	// /(forward|up|down)\s\d{1}
	console.log({line})
	while ((m = regex.exec(line)) !== null) {
    // This is necessary to avoid infinite loops with zero-width matches
    if (m.index === regex.lastIndex) {
        regex.lastIndex++;
    }
	
        console.log(m[0])

        var magnitude = parseInt(m[2]);

        switch(m[1]) {
        	case 'forward': 
        		horizontal += magnitude;
	        	depth += (aim * magnitude); 
	        	break;
        	case 'down': 
	        	aim += magnitude; 	
	        	break;
        	case 'up': 
	        	aim -= magnitude; 
	        	break;
        }

			console.log({depth})
			console.log({horizontal})
}

});


lineReader.on('close', function() {
	var final = depth * horizontal;
	console.log({depth})
	console.log({horizontal})
	console.log({final})
})
