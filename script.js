import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.158/build/three.module.js';

const canvas = document.querySelector('#webgl');
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.z = 5;
scene.add(camera);

const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// Geometry
const geometry = new THREE.TorusKnotGeometry(1, 0.3, 100, 16);
const material = new THREE.MeshStandardMaterial({ color: 0x6366f1, metalness: 0.7, roughness: 0.2 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Lights
const light1 = new THREE.PointLight(0xffffff, 2);
light1.position.set(2, 3, 4);
scene.add(light1);

const light2 = new THREE.PointLight(0x6366f1, 1);
light2.position.set(-2, -1, 2);
scene.add(light2);

// Resize
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// Animation
const clock = new THREE.Clock();

const animate = () => {
  const elapsedTime = clock.getElapsedTime();

  mesh.rotation.x = elapsedTime * 0.3;
  mesh.rotation.y = elapsedTime * 0.5;

  renderer.render(scene, camera);
  requestAnimationFrame(animate);
};

animate();
