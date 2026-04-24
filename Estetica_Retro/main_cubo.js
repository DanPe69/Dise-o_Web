import * as THREE from 'three';

const contenedor = document.getElementById('visor-cubo'); // ID que coincide con el HTML

if (contenedor) {
    const W = contenedor.clientWidth;
    const H = contenedor.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, W / H, 0.1, 100);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(W, H);
    renderer.setAnimationLoop(animate);
    contenedor.appendChild(renderer.domElement);

    // Geometría del cubo - Estética retro
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff41, wireframe: true }); // Cambié a verde retro
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    let scrollY = 0;

    // Interacción 1: Scroll mueve posición en X
    window.addEventListener('scroll', () => {
        scrollY = window.scrollY;
        cube.position.x = 2 * Math.sin(scrollY * 0.01); // Ajustado para que no se salga tan rápido
    });

    // Interacción 2: Click cambia color
    window.addEventListener('click', () => {
        cube.material.color.setHex(0xffb000); // Naranja ámbar al click
    });

    // Interacción 3: Mouse rota en Z
    var moveMouse = 0;
    window.addEventListener('mousemove', () => {
        moveMouse += 0.01;
        cube.rotation.z = moveMouse;
    });

    function animate(time) {
        // Animación adicional para que no sea estático
        cube.rotation.x = time / 2000;
        cube.rotation.y = time / 1000;
        renderer.render(scene, camera);
    }
}