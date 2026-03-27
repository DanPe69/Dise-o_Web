var lifeplayer = 30;
var AtkPlayer = 5;
var DescansarPlayer = 4;

var lifeEnemy = 30;
var AtkEnemigo = 8;


function EjecutarAccion(danioBotón) {
    AtkPlayer = danioBotón; 
    Atacar();
}


function Atacar(){
    ATK_Player();
    ATK_Enemigo();
    ActualizarPantalla();
}

function Descansar(){
    Descansar_Player();
    ATK_Enemigo();
    ActualizarPantalla();
}

function ATK_Player(){
    var Bonus = Math.random()*2;
    lifeEnemy -= (AtkPlayer + Bonus);
    
    if(lifeEnemy <= 0){
        lifeEnemy = 0; 
        FinalizarJuego("GANASTE");
    }
}

function Descansar_Player(){
    lifeplayer += DescansarPlayer;
    console.log("Te has curado. Vida: " + lifeplayer);
}

function ATK_Enemigo(){
    // Solo ataca si el enemigo sigue vivo
    if (lifeEnemy > 0) {
        var isEnemy = Math.random()*10;
        if(isEnemy >= 2){
           lifeplayer -= AtkEnemigo;
        }
        
        if(lifeplayer <= 0){
            lifeplayer = 0;
            FinalizarJuego("PERDISTE");
        }
    }
}

function ActualizarPantalla() {
    document.getElementById("lifeEnemy").innerHTML = "Vida Enemigo: " + Math.round(lifeEnemy);
    document.getElementById("lifePlayer").innerHTML = "Tu Vida: " + Math.round(lifeplayer);
}

function FinalizarJuego(estado) {
    var elementoMensaje = document.getElementById("mensaje");
    var elementoImg = document.getElementById("imgFinal");

    elementoMensaje.innerHTML = "<h1>" + estado + "</h1>";
    elementoImg.style.display = "block";

    if (estado === "GANASTE") {
        //victoria
        elementoImg.src = "./assets/ganaste.png";
    } else {
        //derrota
        elementoImg.src = "./assets/perdiste.png";
    }
}