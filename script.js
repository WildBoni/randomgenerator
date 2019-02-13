var data, qualificaFirst, qualificaMiddle, qualificaLast, azione, oggetto, specifica,
	ansie, battute, qualificaFirstLunghezza, qualificaMiddleLunghezza, qualificaLastLunghezza,
	azioneLunghezza, oggettoLunghezza, specificaLunghezza, ansiaLunghezza, battutaLunghezza;

/* Retrieving data from model */
function getphrases() {
	request = new XMLHttpRequest();
	request.open('GET', 'phrases.json', true);

	request.onload = function() {
		if (request.status >= 200 && request.status < 400){
			// Success!
			data = JSON.parse(request.responseText);

			qualificaFirst = data.qualifica.first;
			qualificaMiddle = data.qualifica.middle;
			qualificaLast = data.qualifica.last;

			azione = data.fastidio.azione;
			oggetto = data.fastidio.oggetto;
			specifica = data.fastidio.specifica;

			ansie = data.ansia;
			battute = data.battuta;

			qualificaFirstLunghezza = qualificaFirst.length;
			qualificaMiddleLunghezza = qualificaMiddle.length;
			qualificaLastLunghezza = qualificaLast.length;

			azioneLunghezza = azione.length;
			oggettoLunghezza = oggetto.length;
			specificaLunghezza = specifica.length;

			ansiaLunghezza = ansie.length;
			battutaLunghezza = battutona.length;

		} else {
			document.getElementById('job_title_gen').innerHTML = "Ops, abbiamo un errore! Non riesco a trovare i dati";
		}
	};

	request.onerror = function() {
				document.getElementById('job_title_gen').innerHTML = "Ops, abbiamo un errore! Non riesco a trovare i dati";
	};

	request.send();
}

// Let's start!
getphrases();

/* Randomly choosing an array value */
function pick(array, length){
	var chosenNumber = array[Math.floor(Math.random()*length)];
	console.log(chosenNumber);
	return chosenNumber;
}

function qualificati() {
	var index1 = pick(qualificaFirst, qualificaFirstLunghezza);
	var index2 = pick(qualificaMiddle, qualificaMiddleLunghezza);
	var index3 = pick(qualificaLast, qualificaLastLunghezza);
	document.getElementById('job_title_gen').innerHTML = index1 + " " + index2 + " " + index3;
}
function infastidisci() {
	var azioneIndex = pick(azione, azioneLunghezza);
	var oggettoIndex = pick(oggetto, oggettoLunghezza);
	var lunghezzaIndex = pick(specifica, specificaLunghezza);
	document.getElementById('fastidio_gen').innerHTML = azioneIndex + " " + oggettoIndex + " " + lunghezzaIndex;
}
function ansiogeno() {
	var ansia = pick(ansie, ansiaLunghezza);
	document.getElementById('ansia_gen').innerHTML = ansia;
}
function tutto() {
  qualificati();
  infastidisci();
  ansiogeno();
}
function sparabattuta() {
	var battutaccia = pick(battute, battutaLunghezza);
	document.getElementById('battuta_gen').innerHTML = battutaccia;
}
