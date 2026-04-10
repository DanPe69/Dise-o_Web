import * as THREE from 'three';

const visorCubo = document.getElementById("visor-cubo");

const scene2 = new THREE.Scene();

const camera2 = new THREE.PerspectiveCamera(75, visorCubo.clientWidth / visorCubo.clientHeight, 0.1, 1000);

const renderer2 = new THREE.WebGLRenderer({ alpha: true });

renderer2.setSize(visorCubo.clientWidth, visorCubo.clientHeight);
visorCubo.appendChild(renderer2.domElement);

// GEOMETRÍA: CUBO
const geometry2 = new THREE.BoxGeometry(1, 1, 1);
const material2 = new THREE.MeshStandardMaterial({ color: 0x8B4513 }); // Color café piedra
const cubo = new THREE.Mesh(geometry2, material2);
scene2.add(cubo);

// Luces para la escena 2
const light2 = new THREE.DirectionalLight(0xffffff, 1);
light2.position.set(1,1,1);
scene2.add(light2);

camera2.position.z = 3;

function animate2() {
    requestAnimationFrame(animate2);
    cubo.rotation.y += 0.01;
    renderer2.render(scene2, camera2);
}
animate2();