function setup() {
    // Conectamos el canvas al div del HTML
    let canvas = createCanvas(600, 400);
    canvas.parent('canvas-holder');
}

function draw() {
    background(10, 10, 25); // Cielo nocturno profundo

    // Estrellas aleatorias simples (solo para decorar)
    fill(255, 255, 255, 150);
    noStroke();
    ellipse(100, 80, 2, 2);
    ellipse(400, 50, 3, 3);
    ellipse(550, 120, 2, 2);

    // --- Edificio 1 (Cian) ---
    fill(20, 40, 80);
    stroke(0, 255, 255);
    strokeWeight(2);
    rect(100, 80, 120, 270); 

    // Ventanas automáticas con bucles
    fill(0, 255, 255, 100); // Cian brillante
    noStroke();
    for(let i = 0; i < 3; i++){
        for(let j = 0; j < 5; j++){
            rect(115 + (i * 35), 100 + (j * 40), 20, 25);
        }
    }

    // --- Edificio 2 (Magenta) ---
    fill(40, 20, 40);
    stroke(255, 0, 127);
    strokeWeight(2);
    rect(280, 140, 150, 210);

    // Puerta neón
    fill(255, 0, 127);
    rect(340, 310, 30, 40);

    // --- Suelo ---
    fill(15, 15, 30);
    noStroke();
    rect(0, 350, width, 50);
    
    // Línea de horizonte brillante
    stroke(0, 255, 204);
    strokeWeight(4);
    line(0, 350, width, 350);

    // Sol / Luna futurista
    dibujarSol(500, 80);
}

function dibujarSol(x, y) {
    noStroke();
    fill(255, 0, 127, 50);
    circle(x, y, 90);
    fill(255, 0, 127, 150);
    circle(x, y, 60);
}