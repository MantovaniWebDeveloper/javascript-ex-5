//creo array
var studenti = [
  //lo popolo di oggetti Studente
  {
    //popolo di propieta ogni oggetto studente
    "nome" : "Dario",
    "cognome" : "Mantovani"
  },
  {
    "nome" : "Luca",
    "cognome" : "Caselli"
  },
  {
    "nome" : "Andrea",
    "cognome" : "Saltari"
  },
];
//navigo e stampo nome e cognome
var studente;
for (var i = 0; i < studenti.length; i++) {
  studente = studenti[i];
  console.log("Nome e Cognome studente: " + studente.nome + " " + studente.cognome);
  document.getElementById("boxL").innerHTML +=
  "<div class='elementoS'>" + studente.nome + "</div>";
  document.getElementById("boxR").innerHTML +=
  "<div class='elementoS'>" + studente.cognome + "</div>";
}
