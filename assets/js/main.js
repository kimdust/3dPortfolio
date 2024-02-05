import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

const scene = new THREE.Scene();

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
renderer.outputEncoding = THREE.sRGBEncoding;
renderer.setPixelRatio(window.devicePixelRatio);

const camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  1,
  10000
);
camera.position.set(0, 0, 150);
let light = new THREE.DirectionalLight(0xffffff, 10); //조명
scene.add(light);
scene.background = new THREE.Color("white");

let loader = new GLTFLoader(); //gltf 파일은 GLTFLoader 로 가져와야됨

loader.load("/images/blender/title.glb", function (gltf) {
  scene.add(gltf.scene);
  function animate() {
    requestAnimationFrame(animate);

    gltf.scene.rotation.y += 0.01;
    renderer.render(scene, camera);
  }
  animate();
});
