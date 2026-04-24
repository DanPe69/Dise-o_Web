import * as THREE from 'three';

const contenedor = document.getElementById('contenedor-threejs');

const W = contenedor.clientWidth;
const H = contenedor.clientHeight;

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xf8f9fa); 

const camera = new THREE.PerspectiveCamera( 60, W / H, 0.1, 100);
camera.position.z = 4;

const renderer = new THREE.WebGLRenderer({ antialias: true }); 
renderer.setSize(W, H);
renderer.setAnimationLoop( animate );
contenedor.appendChild(renderer.domElement);


const geometry = new THREE.SphereGeometry( 1.5, 32, 32 ); 
const material = new THREE.MeshStandardMaterial( { color: 0xff0000 } ); 
const sphere = new THREE.Mesh( geometry, material );
scene.add( sphere );


const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);
const pointLight = new THREE.PointLight(0xffffff, 15);
pointLight.position.set(5, 5, 5);
scene.add(pointLight);


window.addEventListener('scroll', () => {
    let scrollY = window.scrollY;
    
    sphere.position.x = Math.sin(scrollY / 200) * 1.2; 
});

window.addEventListener('click', () => {
    sphere.material.color.setHex(0xffbc0d); 
});

let moveMouse = 0;
window.addEventListener('mousemove', () => {
    moveMouse += 0.05;
    sphere.rotation.y = moveMouse; 
});

function animate( time ){
    renderer.render(scene, camera);
}