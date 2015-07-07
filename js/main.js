function convertFtoC() {
	var f = $('.userTemp').val();
	console.log(f);
	f = parseInt(f);
	console.log(f);
	console.log(100);

	//convert input to celcius

	var cTemp = (f - 32) * (5/9);
	console.log(cTemp);
	var cShort = cTemp.toFixed(1);


  	//display result

  	$('.result').html(cShort+'&deg;'+'C');
  	$('.result-f').html(f+'&deg;'+'F');
}

function convertCtoF() {
	var cel = $('.userCelcius').val();
	cel = parseInt(cel);

	//convert input to celcius

	var fTemp = cel * (9/5) + 32;
	console.log(fTemp);
	var fShort = fTemp.toFixed(1);


  	//display result

  	$('.result-f').html(fShort+'&deg;'+'F');
  	$('.result').html(cel+'&deg;'+'C');
}

$(function() {
  // Handler for .ready() called.


  //detect click
  $('.convert').click(convertFtoC);
  $('.conversion').click(convertCtoF);


  //get user input


  //





});