import * as THREE from 'three';

const contenedor = document.getElementById('cubo3D');

const W = contenedor.clientWidth;
const H = contenedor.clientHeight;

const scene = new THREE.Scene();
//const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const camera = new THREE.PerspectiveCamera( 60, W / H, 0.1, 100);

const renderer = new THREE.WebGLRenderer();
//renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setSize(W, H);
renderer.setAnimationLoop( animate );
//document.body.appendChild( renderer.domElement );
contenedor.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

let scrollY = 0;

window.addEventListener('scroll', () => {
  scrollY = window.scrollY;
  cube.position.x = 4 * Math.sin(scrollY)
});

window.addEventListener('click', () => {
    cube.material.color.setHex(0xff6b35);
});

 var moveMouse = 0;
 window.addEventListener('mousemove', () => {
    moveMouse += 0.01;
    cube.rotation.z = moveMouse
});

/*function animate( time ) {

    cube.position.x = Math.sin(time*0.01)
    cube.rotation.x = time / 2000;
    cube.rotation.y = time / 1000;

    renderer.render( scene, camera );

}*/

function animate( time ){
    renderer.render(scene, camera);
}
