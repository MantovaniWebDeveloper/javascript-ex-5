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
/* MODALITA' AGGIUNTA STATICA
var nuovoStudente = {
  "nome" : "Fernando",
  "cognome" : "Alonso",
  "eta" : 37
}*/
/*** MODALITA' AGGIUNTA DINAMICA***/
/*CREO OGGETO VUOTO*/
var nuovoStudente = {

}
//RIEMPIO L'OGGETTO DA PROMPT
var nomeInserito = prompt("Inserisci il tuo nome");
nuovoStudente.nome = nomeInserito;
console.log("nome inserito " + nuovoStudente.nome);
var cognomeInserito = prompt("Inserisci il tuo cognome");
nuovoStudente.cognome = cognomeInserito;
console.log("cognome inserito " + nuovoStudente.cognome);
var etaInserita = parseInt(prompt("Inserisci la tua eta"));
nuovoStudente.eta = etaInserita;
console.log("eta inserita " + nuovoStudente.eta);

//ARRAY PRIMA DELLA MODIFICA
for (var i = 0; i < studenti.length; i++) {
  console.log("senza aggiunta: " + studenti[i].nome);
  console.log("senza aggiunta: " + studenti[i].cognome);
  console.log("senza aggiunta: " + studenti[i].eta);
  console.log("")
}
//popolo di oggetti nuovi
studenti.push(nuovoStudente);
//ARRAY DOPO MODIFICA
for (var i = 0; i < studenti.length; i++) {
  console.log("con aggiunta: " + studenti[i].nome);
  console.log("con aggiunta: " + studenti[i].cognome);
  console.log("con aggiunta: " + studenti[i].eta);
  console.log("")
}
