var numeriCasuali = [];
for (var i = 1; i < 17; i++) {
  var numeroRandom = Math.floor(Math.random()* 100 + 1);
  numeriCasuali.push(numeroRandom);
}
console.log(numeriCasuali);
var sceltaUtente;
var numeriIndovinati = 0;
for (var i = 1; i < 85; i++) {
  sceltaUtente = parseInt(prompt('inserisci un numero tra 1 e 100'));
  while (sceltaUtente < 1 || sceltaUtente > 100) {
    sceltaUtente = parseInt(prompt("numero errato : inserisci un numero da 1 a 100"));
  }
  var check = numeriCasuali.includes(sceltaUtente);

  if (check == true) {
    console.log('hai perso');
    break;
  }
  else if (numeriIndovinati == 84) {
    console.log('hai vinto');
  }
  else {
    numeriIndovinati++;
    console.log(numeriIndovinati);
  }
}
