'use strict';


var slowa = ["Zajebisty", "Cougar", "Tomasz", "Maluch", "Safrane"];
var slowo = slowa[Math.floor(Math.random() * slowa.length)];
var odpowiedzi = [];
for (var i = 0;i < slowo.length;i++) {
    odpowiedzi[i] = "_";
}
var pozostaleLitery = slowo.length;
alert(odpowiedzi.join(" "));