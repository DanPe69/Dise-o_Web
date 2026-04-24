
let xPelota = 50;
let yPelota = 350; 
let velocidadX = 3;
let colorPelota;

function setup() {
    let canvas = createCanvas(600, 400);
    canvas.parent('canvas-holder');
    
    colorPelota = color(255, 100, 0); 
}

function draw() {
    background(10, 10, 25); 

    
    dibujarEscenario();

    
    fill(colorPelota);
    noStroke();
    circle(xPelota, yPelota - 10, 20); 

    
    xPelota += velocidadX;

    
    if (xPelota > width || xPelota < 0) {
        velocidadX *= -1;
    }
}


function mousePressed() {
    
    colorPelota = color(random(255), random(255), random(255));
}


function dibujarEscenario() {
    // Edificio 1
    fill(30, 50, 100);
    rect(100, 50, 100, 300);
    
    // Suelo
    fill(20, 60, 20);
    rect(0, 350, width, 50);

    // Edificio 2
    fill(80, 80, 90);
    rect(250, 100, 100, 250);
}