var data, first, middle, last, primo, secondo, terzo, ansiami, ansia1, num1, num2, num3, fast1, fast2, fast3;

/* Retrieving data from model */
function getphrases() {
	request = new XMLHttpRequest();
	request.open('GET', 'phrases.json', true);

	request.onload = function() {
		if (request.status >= 200 && request.status < 400){
			// Success!
			data = JSON.parse(request.responseText);

			first = data.qualifica.first;
			middle = data.qualifica.middle;
			last = data.qualifica.last;

			primo = data.fastidio.primo;
			secondo = data.fastidio.secondo;
			terzo = data.fastidio.terzo;

			ansiami = data.ansia;

			num1 = first.length;
			num2 = middle.length;
			num3 = last.length;

			fast1 = primo.length;
			fast2 = secondo.length;
			fast3 = terzo.length;

			ansia1 = ansiami.length;
		} else {
			document.getElementById('job_title_gen').innerHTML = "Ooops, something went wrong: I couldn't get any data";
		}
	};

	request.onerror = function() {
				document.getElementById('job_title_gen').innerHTML = "Ooops, something went wrong: I couldn't get any data";
	};

	request.send();
}

getphrases();

/* Randomly choosing an array value */
function pick(array, length){
	// var chosenNumber = (Math.round(Math.random() * value));
	var chosenNumber = array[Math.floor(Math.random()*length)];
	console.log(chosenNumber);
	return chosenNumber;
}

function qualificati() {
	index1 = pick(first, num1);
	index2 = pick(middle, num2);
	index3 = pick(last, num3);
	document.getElementById('job_title_gen').innerHTML = index1 + " " + index2 + " " + index3;
}
function infastidisci() {
	fastindex1 = pick(primo, fast1);
	fastindex2 = pick(secondo, fast2);
	fastindex3 = pick(terzo, fast3);
	document.getElementById('fastidio_gen').innerHTML = fastindex1 + " " + fastindex2 + " " + fastindex3;
}
function ansiogeno() {
	ansiaindex1 = pick(ansiami, ansia1);
	document.getElementById('ansia_gen').innerHTML = ansiaindex1;
}
function tutto() {
  qualificati();
  infastidisci();
  ansiogeno();
}

/* Ready to rock! */
