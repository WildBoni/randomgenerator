var data, first, middle, last, primo, secondo, terzo, ansiami, ansia1, num1, num2, num3;

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
		// We reached our target server, but it returned an error
	}
};

request.onerror = function() {
	// There was a connection error of some sort
};

request.send();

function generate() {
	index1 = (Math.round(Math.random() * num1))-1;
	index2 = (Math.round(Math.random() * num2))-1;
	index3 = (Math.round(Math.random() * num3))-1;
	document.getElementById('job_title_gen').innerHTML = first[index1] + " " + middle[index2] + " " + last[index3];
}
function infastidisci() {
	fastindex1 = (Math.round(Math.random() * fast1))-1;
	fastindex2 = (Math.round(Math.random() * fast2))-1;
	fastindex3 = (Math.round(Math.random() * fast3))-1;
	document.getElementById('fastidio_gen').innerHTML = primo[fastindex1] + " " + secondo[fastindex2] + " " + terzo[fastindex3];
}
function ansiogeno() {
	ansiaindex1 = (Math.round(Math.random() * ansia1))-1;
	document.getElementById('ansia_gen').innerHTML = ansiami[ansiaindex1];
}
function tutto() {
  generate();
  infastidisci();
  ansiogeno();
}
