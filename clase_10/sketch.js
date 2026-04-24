function setup() {
    /*
    var canvas = createCanvas(600, 400);
    framerate(30);
    colormode(HSB);
    */
    createCanvas(600, 400);
}

function draw() {
  background(39, 152, 245); 

    //Edificio 1
    rect(100, 50, 100, 300)
    
    /*
    for(i=0; i<6; i++){
        for(j=0; j<6; j++){
            fill(60, 200, 150)
            //rect(120, 170, 20, 20);
            //rect(120+(i*40), 170(j*60), 20, 20)
        }
    }
    */
   
    // El suelo
    fill(22, 69, 0);
    rect(0, 350, 400, 50);

        //Puerta
    fill(255, 100, 0, 100)
    rect(135, 310, 30, 40);


    //Edificio 2
    fill(115, 111, 111)
    rect(250, 100, 100, 250); 

    //Ventanas
    fill(255, 255, 242)
    rect(120, 120, 20, 30);
    rect(160, 120, 20, 30);

    fill(255, 255, 242)
    rect(120, 180, 20, 30);
    rect(160, 180, 20, 30);

    //Puerta
    fill(255, 100, 0, 100)
    rect(280, 310, 30, 40);




}

/*
    function sun() {
    // Draw the sun.
    fill(255, 135, 5, 60);
    circle(300, sunHeight, 180);
    fill(255, 100, 0, 100);
    circle(300, sunHeight, 140);
}
*/