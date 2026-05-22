import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);

const container = document.getElementById('three-container');

const renderer = new THREE.WebGLRenderer();
renderer.setSize(600, 500);
renderer.setClearColor(0xf8f9fa);
container.appendChild(renderer.domElement);

const geometry = new THREE.SphereGeometry(1,32,32,0,Math.PI * 2,0,Math.PI / 2);
const material = new THREE.MeshBasicMaterial({ color: 0xffc76a });
const esfera1 = new THREE.Mesh(geometry, material);
scene.add(esfera1);

const geometry2 = new THREE.CylinderGeometry(1, 1, 0.25, 32);
const material2 = new THREE.MeshBasicMaterial({ color: 0x8b4513 });
const cilindro1 = new THREE.Mesh(geometry2, material2);
cilindro1.position.y = -0.2;
scene.add(cilindro1);

const geometry3 = new THREE.CylinderGeometry(0.2, 0.2, 0.1, 32);
const material3 = new THREE.MeshBasicMaterial({ color: 0x006400 });
const caja1 = new THREE.Mesh(geometry3, material3);
caja1.position.y = -0.5;
caja1.position.x = 0.2;
scene.add(caja1);

const geometry4 = new THREE.CylinderGeometry(0.2, 0.2, 0.1, 32);
const material4 = new THREE.MeshBasicMaterial({ color: 0x006400 });
const caja2 = new THREE.Mesh(geometry4, material4);
caja2.position.y = -0.5;
caja2.position.x = 0.7;
scene.add(caja2);

const geometry5 = new THREE.CylinderGeometry(0.2, 0.2, 0.1, 32);
const material5 = new THREE.MeshBasicMaterial({ color: 0x006400 });
const caja3 = new THREE.Mesh(geometry5, material5);
caja3.position.y = -0.5;
caja3.position.x = -0.3;
scene.add(caja3);

const geometry6 = new THREE.CylinderGeometry(0.2, 0.2, 0.1, 32);
const material6 = new THREE.MeshBasicMaterial({ color: 0x006400 });
const caja4 = new THREE.Mesh(geometry6, material6);
caja4.position.y = -0.5;
caja4.position.x = -0.75;
scene.add(caja4);

const geometry7 = new THREE.BoxGeometry(2, 0.1, 1);
const material7 = new THREE.MeshBasicMaterial({ color: 0xFFA500 });
const caja5 = new THREE.Mesh(geometry7, material7);
caja5.position.y = -0.7;
caja5.position.x = 0;
caja5.position.z = -0.4;
scene.add(caja5);

const geometry8 = new THREE.SphereGeometry(1, 32, 32, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2);
const material8 = new THREE.MeshBasicMaterial({ color: 0xffc76a });

const pan_abajo = new THREE.Mesh(geometry8, material8);
pan_abajo.scale.y = 0.3;
pan_abajo.position.y = -0.6;
scene.add(pan_abajo);

const phoneGeometry = new THREE.BoxGeometry(1, 2, 0.1);
const phoneMaterial = new THREE.MeshBasicMaterial({ color: 0x1c1c1c });

const phone = new THREE.Mesh(phoneGeometry, phoneMaterial);
scene.add(phone);
phone.position.x = 2;

const screenGeometry = new THREE.PlaneGeometry(0.8, 1.7);
const screenMaterial = new THREE.MeshBasicMaterial({ color: 0x9c9c9c });

const screen = new THREE.Mesh(screenGeometry, screenMaterial);
screen.position.z = 0.08;
screen.position.y = -0.05;

phone.add(screen);

const cameraGeometry = new THREE.CircleGeometry(0.08, 32);
const cameraMaterial = new THREE.MeshBasicMaterial({ color: 0x66ccff });

const phoneCamera = new THREE.Mesh(cameraGeometry, cameraMaterial);

// posición en la parte superior del teléfono
phoneCamera.position.y = 0.8;
phoneCamera.position.z = 0.06;

phone.add(phoneCamera);


camera.position.z = 4;

function animate(time) {

    phone.rotation.y = Math.sin(time / 1000) * 0.5;

  renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);