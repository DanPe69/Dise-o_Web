import * as THREE from 'three';

const visor = document.getElementById("visor-cono");
let W = visor.clientWidth;
let H = visor.clientHeight;

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera( 75, W / H, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(W, H);


visor.appendChild( renderer.domElement );


const geometry = new THREE.ConeGeometry( 1, 2, 32 ); 
const material = new THREE.MeshStandardMaterial( { 
    color: 0xD4AF37, 
    metalness: 0.8,
    roughness: 0.2 
} );
const cono = new THREE.Mesh( geometry, material );
scene.add( cono );


const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(1, 1, 1);
scene.add(light);
scene.add(new THREE.AmbientLight(0x404040));

camera.position.z = 2;


renderer.setAnimationLoop( animate );

function animate( time ) {
  
  cono.rotation.x = time / 2000;
  cono.rotation.y = time / 1000;

  renderer.render( scene, camera );
}