import "./style.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

// Setup
const loader = new GLTFLoader();


loader.load(
  "/rb.glb",
  function (gltf) {
    const model = gltf.scene;
    const animations = gltf.animations;
   
    // model.position.set(0, 0, 0);
    // model.scale.set(2, 2, 2);
    // cube.position.x = 2*Math.cos(t) +0;
    // cube.position.z = 2*Math.sin(t) +0 ;
   model.rotation.y += Date.now()*.002;
    scene.add(model);
    export default model;
  },
  undefined,
  function (error) {
    console.error(error);
  }
);
