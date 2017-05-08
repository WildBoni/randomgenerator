var first = ["Lead", "Senior", "Direct", "Corporate", "Dynamic", "Future", "Product", "National", "District", "Central", "Regional", "Global", "Customer",
"Junior", "Investor", "Dynamic", "International", "Legacy", "Forward", "Internal", "Human", "Chief", "Principal", "Social", "Local"];
var middle = ["Solutions", "Program", "Research", "Brand", "Security", "Marketing", "Print", "Implementation", "Integration", "Functionality",
"Response", "Copyright", "Art", "Identity", "Markets", "Photography", "Division", "Applications", "Optimization", "Visual", "Infrastructure", "Intranet",
"Communications", "Web", "Branding", "Quality", "Merchandise", "Mobility", "Accounts", "Data", "Creative", "Configuration", "Styling", "Interactions",
"Digital", "Usability", "Metrics", "System", "Connectivity", "Impagination", "Media", "Front End", "Back End", "Responsive", "Technologies"];
var last = ["Supervisor", "Associate", "Executive", "Liason", "Officer", "Manager", "Engineer", "Specialist", "Director", "Coordinator", "Administrator",
"Architect", "Analyst", "Designer", "Planner", "Orchestrator", "Technician", "Developer", "Producer", "Consultant", "Assistant", "Facilitator", "Agent",
"Representative", "Strategist", "Guru", "Evangelist", "Ninja", "Advisor", "Copywriter"];

var num1 = first.length;
var num2 = middle.length;
var num3 = last.length;

var fast1 = 21;
var fast2 = 20;
var fast3 = 20;

primo = new Array("assistere", "digitalizzare", "risolvere", "instradare", "calibrare", "ricalcolare", "profilare", "catalogare", "riprogrammare", "aggiornare", "formattare",
"customizzare", "duplicare", "azzerare", "resettare", "implementare", "backuppare", "masterizzare", "schedulare", "rapportare", "inserire", "ricalcolare");
secondo = new Array("l'inceppamento", "il blocco", "il crash", "la problematica", "l'aggiornamento", "la feature", "la sincronizzazione", "il rendering", "la finestra",
"la funzionalità", "la criticità", "il ticket", "la rotazione", "l'errore", "la tempistica", "il bug", "la notifica", "la ricezione", "la release", "la visualizzazione", "la cache");
terzo = new Array("della stampante", "della multifunzione", "sul router", "dello switch", "dei pacchetti di rete", "sulla porta 80", "del server", "del database", "da remoto",
"del gateway", "di Photoshop", "di Illustrator", "di Xpress", "di Adobe", "sul Mac", "del disco esterno", "della casella di posta", "di rete", "nel refresh del browser",
"in locale", "per l'impaginazione");

var ansia1 = 11;

ansiami = new Array("il prima possibile", "e siamo già in ritardo", "ma la deadline era ieri", "in mattinata", "in mezz'ora", "su un piede solo", "senza mani",
"senza toccare il mouse", "con il monitor spento", "con il System 9", "con carta e penna", "con le mani legate");

function generate() {
	index1 = Math.round(Math.random() * num1);
	index2 = Math.round(Math.random() * num2);
	index3 = Math.round(Math.random() * num3);
	document.getElementById('job_title_gen').innerHTML = first[index1] + " " + middle[index2] + " " + last[index3];
}
function infastidisci() {
	fastindex1 = Math.round(Math.random() * fast1);
	fastindex2 = Math.round(Math.random() * fast2);
	fastindex3 = Math.round(Math.random() * fast3);
	document.getElementById('fastidio_gen').innerHTML = primo[fastindex1] + " " + secondo[fastindex2] + " " + terzo[fastindex3];
}
function ansiogeno() {
	ansiaindex1 = Math.round(Math.random() * ansia1);
	document.getElementById('ansia_gen').innerHTML = ansiami[ansiaindex1];
}
function tutto() {
  generate();
  infastidisci();
  ansiogeno();
}
