import * as THREE from 'three';

const contenedor = document.getElementById('cubo3D');
const W = contenedor.clientWidth;
const H = contenedor.clientHeight;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(60, W / H, 0.1, 100);
const renderer = new THREE.WebGLRenderer({ antialias: true });

renderer.setSize(W, H);
contenedor.appendChild(renderer.domElement);

// Crear el Cubo
const geometry = new THREE.BoxGeometry(1.5, 1.5, 1.5);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

// --- LÓGICA DE MOVIMIENTO ---

// 1. Movimiento con Scroll (como te enseñaron)
window.addEventListener('scroll', () => {
    let scrollY = window.scrollY;
    // El cubo se mueve horizontalmente según bajas la página
    cube.position.x = Math.sin(scrollY * 0.005) * 2;
});

// 2. Cambio de color al Click
window.addEventListener('click', () => {
    cube.material.color.setHex(Math.random() * 0xffffff); // Color aleatorio
});

// 3. Rotación con el Mouse
let moveMouse = 0;
window.addEventListener('mousemove', (event) => {
    moveMouse += 0.05;
    cube.rotation.z = moveMouse;
    cube.rotation.y += 0.01;
});

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

animate();