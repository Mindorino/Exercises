'use strict';


var slowa = ["zajebisty", "cougar", "tomasz", "maluch", "safrane"];
var slowo = slowa[Math.floor(Math.random() * slowa.length)];
var odpowiedzi = [];
for (var i = 0; i < slowo.length; i++) {
    odpowiedzi[i] = "_";
}
var pozostaleLitery = slowo.length;
var strzaly = 20;

while (pozostaleLitery > 0 && strzaly > 0) {
    alert(odpowiedzi.join(" "));

    var strzal = prompt("Podaj Literę, lub klinij anuluj aby zakończyć.");
    if (strzal === null) {
        break;
    } else if (strzal.length !== 1) {
        alert("Proszę podaj tylko jedną literę.");
        
    } else {
        strzal = strzal.toLowerCase();
        strzaly--;
        
        for (var j = 0; j < slowo.length; j++) {
            if (slowo[j] === strzal && odpowiedzi[j] === "_") {
                odpowiedzi[j] = strzal;
                pozostaleLitery--;
            }
        }
    }
}
alert(odpowiedzi.join(" "));
if (strzaly > 0 && pozostaleLitery === 0) {
   alert("Gratulacje! Szukane słowo to " + slowo); 
}
else {
    alert("No niestety. Słowem tym było " + slowo);
}


