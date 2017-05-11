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
function pick(value){
	var chosenNumber = (Math.round(Math.random() * value))-1;
	return chosenNumber;
}

function qualificati() {
	index1 = pick(num1);
	index2 = pick(num2);
	index3 = pick(num3);
	document.getElementById('job_title_gen').innerHTML = first[index1] + " " + middle[index2] + " " + last[index3];
}
function infastidisci() {
	fastindex1 = pick(fast1);
	fastindex2 = pick(fast2);
	fastindex3 = pick(fast3);
	document.getElementById('fastidio_gen').innerHTML = primo[fastindex1] + " " + secondo[fastindex2] + " " + terzo[fastindex3];
}
function ansiogeno() {
	ansiaindex1 = pick(ansia1);
	document.getElementById('ansia_gen').innerHTML = ansiami[ansiaindex1];
}
function tutto() {
  qualificati();
  infastidisci();
  ansiogeno();
}

/* Ready to rock! */
