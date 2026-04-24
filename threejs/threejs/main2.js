import * as THREE from 'three';

const Banner = document.getElementById("Banner");
let A = Banner.clientWidth;
let F = Banner.clientHeight;

console.log(A + "," + F)

const scene2 = new THREE.Scene();
const camera2 = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer2 = new THREE.WebGLRenderer();
//renderer.setSize( window.innerWidth, window.innerHeight );
renderer2.setSize(A, F);
renderer2.setAnimationLoop( animate2 );
//document.body.appendChild( renderer.domElement );
Banner.appendChild(renderer2.domElement)

const geometry2 = new THREE.BoxGeometry( 1, 1, 1 );
const material2 = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube2 = new THREE.Mesh( geometry2, material2 );
scene2.add( cube2 );

camera2.position.z = 5;

function animate2( time2 ) {

  cube2.rotation.x = time2 / 2000;
  cube2.rotation.y = time2 / 1000;

  renderer2.render( scene2, camera2 );

}