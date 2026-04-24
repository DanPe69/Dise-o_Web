const s = (p) => {
    p.setup = function() {
        const contenedor = document.getElementById('visor-cono');
        // Creamos el canvas del tamaño del contenedor aside
        let canvas = p.createCanvas(contenedor.clientWidth, contenedor.clientHeight);
        canvas.parent('visor-cono'); 
    };

    p.draw = function() {
        p.background(20, 20, 20); // Fondo oscuro para estética retro

        // El suelo
        p.fill(22, 69, 0);
        p.rect(0, p.height - 50, p.width, 50);

        // Edificio 1
        p.stroke(0, 255, 65);
        p.fill(40);
        p.rect(50, 50, 80, 250);
        
        // Ventanas Edificio 1
        p.fill(255, 255, 242);
        p.rect(65, 80, 15, 20);
        p.rect(95, 80, 15, 20);
        p.rect(65, 120, 15, 20);
        p.rect(95, 120, 15, 20);

        // Puerta Edificio 1
        p.fill(255, 100, 0, 200);
        p.rect(75, 260, 30, 40);

        // Edificio 2
        p.fill(115, 111, 111);
        p.rect(160, 100, 80, 200); 

        // Puerta Edificio 2
        p.fill(255, 100, 0, 200);
        p.rect(185, 260, 30, 40);
    };
};

// Iniciamos p5 en el div correspondiente
new p5(s);