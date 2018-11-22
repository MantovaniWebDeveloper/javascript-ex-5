//creo array
var studenti = [
  {
    "nome" : "Dario",
    "cognome" : "Mantovani",
    "eta" : 33
  },
  {
    "nome" : "Andrea",
    "cognome" : "Saltari",
    "eta" : 30
  },
  {
    "nome" : "Luca",
    "cognome" : "Caselli",
    "eta" : 40
  }
];

var nuovoStudente = {
  "nome" : "Fernando",
  "cognome" : "Alonso",
  "eta" : 37
}
for (var i = 0; i < studenti.length; i++) {
  console.log("senza aggiunta: " + studenti[i].nome);
  console.log("senza aggiunta: " + studenti[i].cognome);
  console.log("senza aggiunta: " + studenti[i].eta);
  console.log("")
}
//popolo di oggetti
studenti.push(nuovoStudente);
for (var i = 0; i < studenti.length; i++) {
  console.log("con aggiunta: " + studenti[i].nome);
  console.log("con aggiunta: " + studenti[i].cognome);
  console.log("con aggiunta: " + studenti[i].eta);
  console.log("")
}
