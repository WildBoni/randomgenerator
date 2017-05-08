var data, first, middle, last, primo, secondo, terzo, ansiami, ansia1, num1, num2, num3;

request = new XMLHttpRequest();
request.open('GET', 'phrases.json', true);

request.onload = function() {
	if (request.status >= 200 && request.status < 400){
		// Success!
		data = JSON.parse(request.responseText);

		first = [data.qualifica[0]];
		middle = [data.qualifica[1]];
		last = [data.qualifica[2]];

		primo = [data.fastidio[0]];
		secondo = [data.fastidio[1]];
		terzo = [data.fastidio[2]];

		ansiami = [data.ansia];

		num1 = first[0].first.length;
		num2 = middle[0].middle.length;
		num3 = last[0].last.length;

		fast1 = primo[0].primo.length;
		fast2 = secondo[0].secondo.length;
		fast3 = terzo[0].terzo.length;

		ansia1 = ansiami[0].length;
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
	document.getElementById('job_title_gen').innerHTML = first[0].first[index1] + " " + middle[0].middle[index2] + " " + last[0].last[index3];
}
function infastidisci() {
	fastindex1 = (Math.round(Math.random() * fast1))-1;
	fastindex2 = (Math.round(Math.random() * fast2))-1;
	fastindex3 = (Math.round(Math.random() * fast3))-1;
	document.getElementById('fastidio_gen').innerHTML = primo[0].primo[fastindex1] + " " + secondo[0].secondo[fastindex2] + " " + terzo[0].terzo[fastindex3];
}
function ansiogeno() {
	ansiaindex1 = (Math.round(Math.random() * ansia1))-1;
	document.getElementById('ansia_gen').innerHTML = ansiami[0][ansiaindex1];
}
function tutto() {
  generate();
  infastidisci();
  ansiogeno();
}
