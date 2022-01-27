import "./style.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
// import {model} from "./model.js"
// Setup
const loader = new GLTFLoader();
var clock = new THREE.Clock();
let model ;
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

camera.position.z = 8;
const controls = new OrbitControls(camera, renderer.domElement);

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(20, 20,20);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
directionalLight.position.set(200, 500, 300);

const light = new THREE.AmbientLight( 0xffffff ); // soft white light
light.position.set(20, 20,20);
scene.add(pointLight,directionalLight, light);

// const lightHelper = new THREE.PointLightHelper(pointLight)
// const gridHelper = new THREE.GridHelper(200, 50);
// scene.add(lightHelper, gridHelper)

let count = 0;
let up = true;
 var t = 0;
 
function animate() {
  requestAnimationFrame(animate);
  t += 0.01;   


  // cube.rotation.x += 0.01;
  //  cube.rotation.y += 0.01;
  cube.position.x = 2*Math.cos(t) +0;
   cube.position.z = 2*Math.sin(t) +0 ;

  //  model.rotation.y += 0.01;

  
          //  model.rotation.x = 1
          model.rotation.y += 0.01;
          if (up) {
             model.translateOnAxis(new THREE.Vector3(0, 9, 0).normalize(),
                                 0.1)
             if (model.position.y > 4.4 - count) {
                up = false;
                count ++;
                if(count == 9){
                  count = 0
                }
             }
          }
          else if (!up) {
             model.translateOnAxis(new THREE.Vector3(0, 1, 0).normalize(),  
                                 -0.1)
             if (model.position.y < -4.4 ) {
                 up = true
                 if(count == 9){
                  count = 0
                }
             }
          }
          else {
             model.position.set(0, 0, 0)
             count =0;
          }
        
       
  controls.update();

  renderer.render(scene, camera);
}

// let random = Math.random(10);
// let bounceControl = true;
// let up = true;
// let animate = () => {
//    requestAnimationFrame(animate)
//    obj.rotation.y += 0.01
//    if (bounceControl) {
//       obj.rotation.x = 0
//       obj.rotation.y = 0
//       if (up) {
//          obj.translateOnAxis(new THREE.Vector3(0, 7, 0).normalize(),
//                              0.1)
//          if (obj.position.y > 3.4) {
//             up = false
//          }
//       }
//       else if (!up) {
//          obj.translateOnAxis(new THREE.Vector3(random, 1, 0).normalize(),  
//                              -0.1)
//          if (obj.position.y < -3.4) {
//              up = true
//          }
//       }
//       else {
//          obj.position.set(0, 0, 0)
//       }
//    }
//    renderer.render(scene, camera)
// }

animate();

