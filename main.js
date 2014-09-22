$

$(document).on('ready', function() {
	var outershell = $('<div class="outer-shell"></div>');
	var innershell = $('<div class="inner-shell"></div>');
	var left = $('<div class = "leftlabels"></div>');
	var pm = $('<p class="pmauto">PM</p>');
	var auto = $('<p class="pmauto">AUTO</>');
	var clockscreen = $('<div class="clockscreen"></div>');
	var ampm = $('<div class="ampm"></div>');
	var clocktext = $('<div class="clocktext">11:11</div>');
	var amlabel = $('<div class="radiolabel">AM  53  60  70  90  110  140  170</div>');
	var fmlabel = $('<div class="radiolabel">FM  88  92  96  102  106  108</div>');
	

	
	$('.container').append(outershell);
	outershell.append(innershell);
	innershell.append(left);
	left.append(pm);
	left.append(auto);
	innershell.append(clockscreen);
	clockscreen.append(ampm);
	clockscreen.append(clocktext);
	innershell.append(amlabel);
	innershell.append(fmlabel);

	var intervalID = setInterval(function(){
		clockYAY();
	}, 1000);	
});


function clockYAY () {
	var currentTime = new Date();
	var currentHours = currentTime.getHours();
	var currentMinutes = currentTime.getMinutes();
	var currentSeconds = currentTime.getSeconds();
	if (currentMinutes < 10) {
		currentMinutes = "0" + currentMinutes;
		currentSeconds = "0" + currentSeconds;
	}
	var isAMPM = true;
	$('ampm').css('background', '#E33131');
	if (currentHours < 12){
		isAMPM = false;
		$('ampm').css('background', '#673E3E');
	}
	if (currentHours > 12) {
		currentHours = currentHours - 12;
		if (currentHours < 10) {
			currentHours = "&nbsp;" + currentHours;
		};
	};
	var currentTimeString = currentHours+":"+currentMinutes;
	$('.clocktext').html(currentTimeString);
};

