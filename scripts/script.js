//dom nodes & time variables
var time = document.querySelector('#clock'),
	colorTime = document.querySelector('#hex-color'),
	bodyNode = document.querySelector('body')


//****** get time ******
var runTime = function() {	
	var d = new Date(),
	h = d.getHours(),
	m = d.getMinutes(),
	s = d.getSeconds();
	
	//not military time; if time is 13+, subtract 12
	if (h > 12) {
	   h -= 12;
	} else if (h === 0) {
	   h = 12;
	}
	
	//adding 0 to sigle-digit hour/minute/seconds
	if (h < 10) h = "0" + h;
	if (m < 10) m = "0" + m;
	if (s < 10) s = "0" + s;
	
	//changing divs to time constants
	time.innerHTML = h + ":" + m + ":" + s
}

//****** get rgb background/convert rgb colors to hex string time ******
var hexColors = function() {
	var d = new Date(),
	h = d.getHours(),
	m = d.getMinutes(),
	s = d.getSeconds();

	//gave rgb random values and made hex string
	var r = (h * 10)
		g = (m * 4)
		b = (s * 3)
		hexValH = r.toString(16),
		hexValM = g.toString(16),
		hexValS = b.toString(16),
		hexTime = hexValH + ":" + hexValM + ":" + hexValS
		console.log(hexTime)

	//added hex color to innerHTML
	//set background color	
	colorTime.innerHTML = hexTime;
	document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
	
}
	
var mainFunction = function() {
	runTime();
	hexColors()
}

setInterval(mainFunction, 1000)






