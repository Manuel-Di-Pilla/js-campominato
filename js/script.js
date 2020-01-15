var numeriCasuali = [];
var numeroUtente = [];
while (numeriCasuali.length < 16) {
  var numeroRandom = randomNumber(1, 100);
  var cerca = isInArray(numeriCasuali, numeroRandom);
  if(cerca == false) {
    numeriCasuali.push(numeroRandom);
  }
}
var numMinCheck;
var numMaxCheck;
var tentativi;
var tentativiDifficoltà = 0;
var numeriInseriti;

do {
  var difficoltà = parseInt(prompt('seleziona il livello di difficoltà : da 0 a 2'));
  tentativiDifficoltà++;
} while (checkNumber(0, 2 , difficoltà) == false && tentativiDifficoltà < 3);

if (difficoltà == 0) {
  tentavi = 84;
  numMinCheck = 1;
  numMaxCheck = 100;
} else if (difficoltà == 1) {
  tentavi = 64;
  numMinCheck = 1;
  numMaxCheck = 80;
} else if (difficoltà == 2) {
  tentavi = 34;
  numMinCheck = 1;
  numMaxCheck = 50;
}

var bomba = false;
var numeriIndovinati = 0;
var messaggio = 'hai vinto';
while (numeroUtente.length < tentativi && bomba == false) {
  var numUtente = false;
  do{
    var numUtente = parseInt(prompt('inserisci un numero da 1 a 100'));
    console.log('numero inserito' + checkNumber(numMinChek, numMaxChek, numUtente));
  } while(checkNumber(numMinChek, numMaxChek, numUtente) == false)
  if(isInArray(numeroUtente, numUtente) == false) {
    numeroUtente.push(numUtente);
    if(isInArray(numeriCasuali, numUtente) == true){
      messaggio = 'hai perso';
      bomba = true;
    } else {
      numeriIndovinati++;
    }
  }
}
console.log(messaggio);
console.log('hai indovinato' + ' ' + numeriIndovinati + ' ' + 'numeri');

function randomNumber(numMin, numMax) {
  numMin = Math.ceil(numMin);
  numMax = Math.floor(numMax);
  var result = Math.floor(Math.random() * (numMax - numMin + 1)) + numMin;
  return  result;
}
function checkNumber(min, max, number) {
  var result = false;
  if(number >= min && number <= max) {
    result = true;
  }
  return result;
}
function isInArray(array, element) {
  var i = 0;
  var result = false;
  while (i < array.length && result == false) {
    if (array[i] == element) {
      result = true;
    }
    i++;
  }
  return result;
}
