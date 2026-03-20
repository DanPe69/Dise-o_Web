/*
var nombre ="Danna";
const codigo = 30000098806;
var edad = 16;
var isMayor;

if(edad >= 18){
    isMayor = true;
}else{
    isMayor = true;
}

var comida = "lasagña";

let num1 = 8;
let num2 = 2;

let suma = num1 + num2;

let resta = num1 - num2;

let multi = num1 * num2;


var numero = 5;

let factorial = 1;

for(var i = 1; i <= numero; i++){
    factorial *= (numero-i)
}




console.log(nombre, codigo, edad, isMayor, comida, suma, resta, multi);

console.log("el resultado es:" + factorial);
*/

//var a = Math.random()*100;

/*
var a = (200*Math.random()-100)

console.log(a)
*/

//dos jugadores: al enemigo le va restando el ataque 

/*
function alert(){

//var jugador1 = Math.random();

//var bonus = 3;


var jugador1 = 5

var bonus = Math.random();

var jugador2 = 5;

puntaje = (jugador1 + bonus) - jugador2;

console.log("Puntaje:" + puntaje);

}

*/

var lifPlayer = 50;
var AtkPlayer = 5;

var lifEnemigo = 50;
var AtkEnemigo = 30;

function ataque(){
    Atk_Player();
    Atk_Enemigo();
}


function descansar(){
    Atk_Player();
    Atk_Enemigo();
}


function Atk_Player(){
    var Bonus = Math.random()*2;
    lifEnemigo -= AtkPlayer + Bonus;
    console.log(lifEnemigo)
}

function Atk_Enemigo(){
    var isEnemy = Math.random()*10;

    if(isEnemy >= 5){
        lifPlayer -= AtkEnemigo; //bonus
        console.log(lifPlayer);
    }
}


function descansar

//dejarlo bonito, cuantro tipos de ataques y una imagen cuando diga muerto 




