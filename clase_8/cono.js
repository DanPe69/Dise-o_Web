import * as THREE from 'three';

const banner = document.getElementById("nanner");

// Obtenemos medidas reales del contenedor
let W = banner.clientWidth;
let H = banner.clientHeight;

const scene = new THREE.Scene();
// Ajustamos el aspect ratio (W / H)
const camera = new THREE.PerspectiveCamera( 75, W / H, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer;
renderer.setSize(W, H);
banner.appendChild(renderer.domElement);

// Geometría más pequeña para que quepa en pantalla
// ConeGeometry(radio, altura, segmentos)
const geometry1 = new THREE.ConeGeometry( 1.5, 3, 32 ); 
const material1 = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
const cone = new THREE.Mesh(geometry1, material1 );
scene.add( cone );

// Alejamos la cámara lo suficiente para ver el cono de 3 unidades de alto
camera.position.z = 7;

function animate(time) {
    // Animación suave
    cone.rotation.y = time / 1000;
    cone.rotation.x = time / 2000;
    
    renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);
