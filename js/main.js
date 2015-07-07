function convertFtoC() {
	var f = $('.userTemp').val();
	console.log(f);
	f = parseInt(f);
	console.log(f);
	console.log(100);

	//convert input to celcius

	var cTemp = (f - 32) * (5/9);
	console.log(cTemp);


  	//display result

  	$('.result').append(cTemp);
}

function convertCtoF() {
	var cel = $('.userCelcius').val();
	cel = parseInt(cel);

	//convert input to celcius

	var fTemp = cel * (9/5) + 32;
	console.log(fTemp);


  	//display result

  	$('.result-f').append(fTemp);
}

$(function() {
  // Handler for .ready() called.


  //detect click
  $('.convert').click(convertFtoC);
  $('.conversion').click(convertCtoF);


  //get user input


  //





});