//creo l'oggetto studente
var studente = {
  //lo popolo di propietà per descrivere uno studente
  "nome" : "Dario",
  "cognome" : "Mantovani",
  "età" : 33,
  "corso" : "Boolean",
  "classe" : 3
};
//stampo tutte i valori di tutte le propietà
for (var k in studente) {
  console.log(k +" : " + " " + studente[k]);
}
