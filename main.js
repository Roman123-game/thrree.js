import "./style.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
// import {model} from "./model.js"
// Setup
const loader = new GLTFLoader();

var model ;
loader.load(
  "/rb.glb",
  function (gltf) {
   model = gltf.scene;
  const animations = gltf.animations;
    scene.add(model);
  
  },
  undefined,
  function (error) {
    console.error(error);
  }
);




const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.SphereGeometry();
const material = new THREE.MeshBasicMaterial({
  color: 0xffff00,
  // wireframe: true,
});
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;
const controls = new OrbitControls(camera, renderer.domElement);

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(20, 20,20);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
directionalLight.position.set(200, 500, 300);

const light = new THREE.AmbientLight( 0x404040 ); // soft white light
light.position.set(20, 20,20);
scene.add(pointLight,directionalLight, light);

// const lightHelper = new THREE.PointLightHelper(pointLight)
// const gridHelper = new THREE.GridHelper(200, 50);
// scene.add(lightHelper, gridHelper)

var t = 0;

function animate() {
  requestAnimationFrame(animate);
  t += 0.01;   
  // cube.rotation.x += 0.01;
   cube.rotation.y += 0.01;
  cube.position.x = 2*Math.cos(t) +0;
   cube.position.z = 2*Math.sin(t) +0 ;
   model.rotation.y += 0.01;
  controls.update();

  renderer.render(scene, camera);
}

animate();

