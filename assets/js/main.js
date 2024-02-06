import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import gsap from "gsap";
import * as dat from "lil-gui";

const scene = new THREE.Scene();

const renderer = new THREE.WebGLRenderer({ antialias: true });
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

const ambientLight = new THREE.AmbientLight(0xffffff, 8);
ambientLight.position.set(0, 0, 100);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 10);
directionalLight.position.set(50, 50, 50);
scene.add(directionalLight);

const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load("/images/bgtexture.jpg");
scene.background = texture;
// scene.background = new THREE.Color(0x44b8e0);

const loader = new GLTFLoader();

loader.load("/images/blender/title.glb", function (gltf) {
  const titleModel = gltf.scene;
  titleModel.rotation.set(5.9, 0.2, 0.2);
  titleModel.scale.set(1.2, 1.2, 1.2);
  titleModel.position.set(10, 2, -50);
  scene.add(titleModel);

  titleModel.traverse((child) => {
    if (child.isMesh) {
      const material = new THREE.MeshStandardMaterial({
        color: 0x222222,
        metalness: 1,
        roughness: 0,
      });
      child.material = material;
    }
  });

  // gsap.from(titleModel.position, {
  //   y: window.innerHeight,
  //   duration: 2,
  //   ease: "power2.inOut",
  //   onComplete: () => {
  //     animateFloat();
  //   },
  // });

  function animateFloat() {
    gsap.to(titleModel.position, {
      y: "+=5",
      duration: 1,
      yoyo: true,
      repeat: -1,
      ease: "power1.inOut",
    });
  }

  function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  }
  animate();
});

loader.load("/images/blender/heart.glb", function (gltf) {
  const heartModel = gltf.scene;

  heartModel.rotation.set(Math.PI / -6.3, 3.2, 6.5);
  heartModel.scale.set(2.4, 2.4, 2.4);
  heartModel.position.set(-50, 38, 0);
  scene.add(heartModel);

  heartModel.traverse((child) => {
    if (child.isMesh) {
      const material = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        metalness: 0.7,
        roughness: 0.5,
      });
      child.material = material;
    }
  });

  // gsap.from(heartModel.position, {
  //   y: window.innerHeight,
  //   duration: 2.1,
  //   ease: "power2.inOut",
  //   onComplete: () => {
  //     animateFloat();
  //   },
  // });

  function animateFloat() {
    gsap.to(heartModel.position, {
      y: "+=5",
      duration: 1,
      yoyo: true,
      repeat: -1,
      ease: "power1.inOut",
    });
  }

  function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  }
  animate();
});

loader.load("/images/blender/clover.glb", function (gltf) {
  const cloverModel = gltf.scene;

  cloverModel.rotation.set(Math.PI / -8, -5.5, 0.5); // 모델의 회전 조정
  cloverModel.scale.set(0.7, 0.7, 0.7);
  cloverModel.position.set(-75, -50, 0); // 모델의 위치 조정
  scene.add(cloverModel);

  cloverModel.traverse((child) => {
    if (child.isMesh) {
      const material = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        metalness: 0.7,
        roughness: 0.5,
      });
      child.material = material;
    }
  });

  // gsap.from(cloverModel.position, {
  //   y: window.innerHeight,
  //   duration: 2.5,
  //   ease: "power2.inOut",
  //   onComplete: () => {
  //     animateFloat();
  //   },
  // });

  function animateFloat() {
    gsap.to(cloverModel.position, {
      y: "+=5",
      duration: 1,
      yoyo: true,
      repeat: -1,
      ease: "power1.inOut",
    });
  }

  function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  }
  animate();
});

loader.load("/images/blender/star.glb", function (gltf) {
  const starModel = gltf.scene;

  starModel.rotation.set(Math.PI / 9, 3, 3); // 모델의 회전 조정
  starModel.scale.set(0.7, 0.7, 0.7);
  starModel.position.set(100, 25, -50); // 모델의 위치 조정
  scene.add(starModel);

  starModel.traverse((child) => {
    if (child.isMesh) {
      const material = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        metalness: 0.7,
        roughness: 0.5,
      });
      child.material = material;
    }
  });

  // gsap.from(starModel.position, {
  //   y: window.innerHeight,
  //   duration: 2.5,
  //   ease: "power2.inOut",
  //   onComplete: () => {
  //     animateFloat();
  //   },
  // });

  function animateFloat() {
    gsap.to(starModel.position, {
      y: "+=5",
      duration: 1,
      yoyo: true,
      repeat: -1,
      ease: "power1.inOut",
    });
  }

  function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  }
  animate();
});

loader.load("/images/blender/cat.glb", function (gltf) {
  const starModel = gltf.scene;

  starModel.rotation.set(0.07, -1.2, 0); // 모델의 회전 조정
  starModel.scale.set(1.7, 1.7, 1.7);
  starModel.position.set(60, -20, 10); // 모델의 위치 조정
  scene.add(starModel);

  starModel.traverse((child) => {
    if (child.isMesh) {
      const material = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        metalness: 0.7,
        roughness: 0.5,
      });
      child.material = material;
      s;
    }
  });

  // gsap.from(starModel.position, {
  //   y: window.innerHeight,
  //   duration: 2.5,
  //   ease: "power2.inOut",
  //   onComplete: () => {
  //     animateFloat();
  //   },
  // });

  function animateFloat() {
    gsap.to(starModel.position, {
      y: "+=5",
      duration: 1,
      yoyo: true,
      repeat: -1,
      ease: "power1.inOut",
    });
  }

  function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  }
  animate();
});
