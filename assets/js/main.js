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
const texture = textureLoader.load("/images/bgtexture.png");
scene.background = texture;

const loader = new GLTFLoader();

loader.load("/images/blender/title.glb", function (gltf) {
  const titleModel = gltf.scene;
  titleModel.rotation.set(5.9, Math.PI / 10, 0.2);
  titleModel.scale.set(1.2, 1.2, 1.2);
  titleModel.position.set(10, 2, -50);
  scene.add(titleModel);

  // titleModel.traverse((child) => {
  //   if (child.isMesh) {
  //     const textureLoader = new THREE.TextureLoader();
  //     const texture = textureLoader.load("/images/blender/texture2.jpg");
  //     const material = new THREE.MeshStandardMaterial({ map: texture });
  //     child.material = material;
  //   }
  // });

  titleModel.traverse((child) => {
    if (child.isMesh) {
      const material = new THREE.MeshStandardMaterial({
        color: 0x3682c6,
        metalness: 0.5,
        roughness: 0.3,
      });
      child.material = material;
    }
  });

  gsap.from(titleModel.position, {
    y: window.innerHeight,
    duration: 2,
    ease: "power2.inOut",
    onComplete: () => {
      animateFloat();
    },
  });

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

  heartModel.rotation.set(Math.PI / -5.5, 3, 6);
  heartModel.scale.set(0.5, 0.5, 0.5);
  heartModel.position.set(-50, 40, 0);
  scene.add(heartModel);

  heartModel.traverse((child) => {
    if (child.isMesh) {
      const material = new THREE.MeshStandardMaterial({
        color: 0xf08080,
        metalness: 0.5,
        roughness: 0.3,
      });
      child.material = material;
    }
  });

  gsap.from(heartModel.position, {
    y: window.innerHeight,
    duration: 2.1,
    ease: "power2.inOut",
    onComplete: () => {
      animateFloat();
    },
  });

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

loader.load("/images/blender/cloud.glb", function (gltf) {
  const cloudModel = gltf.scene;

  cloudModel.rotation.set(Math.PI / -2.5, 3, 6.6); // 모델의 회전 조정
  cloudModel.scale.set(0.3, 0.3, 0.3);
  cloudModel.position.set(80, -35, 0); // 모델의 위치 조정
  scene.add(cloudModel);

  cloudModel.traverse((child) => {
    if (child.isMesh) {
      const material = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        metalness: 0.65,
        roughness: 0.85,
      });
      child.material = material;
    }
  });

  gsap.from(cloudModel.position, {
    y: window.innerHeight,
    duration: 2.1,
    ease: "power2.inOut",
    onComplete: () => {
      animateFloat();
    },
  });

  function animateFloat() {
    gsap.to(cloudModel.position, {
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

  cloverModel.rotation.set(Math.PI / -8, -5, -2); // 모델의 회전 조정
  cloverModel.scale.set(0.7, 0.7, 0.7);
  cloverModel.position.set(-100, -20, 0); // 모델의 위치 조정
  scene.add(cloverModel);

  cloverModel.traverse((child) => {
    if (child.isMesh) {
      const material = new THREE.MeshStandardMaterial({
        color: 0x53b744,
        metalness: 0.5,
        roughness: 0.3,
      });
      child.material = material;
    }
  });

  gsap.from(cloverModel.position, {
    y: window.innerHeight,
    duration: 2.5,
    ease: "power2.inOut",
    onComplete: () => {
      animateFloat();
    },
  });

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

  starModel.rotation.set(Math.PI / 8, 8, -8); // 모델의 회전 조정
  starModel.scale.set(0.7, 0.7, 0.7);
  starModel.position.set(60, 30, 0); // 모델의 위치 조정
  scene.add(starModel);

  starModel.traverse((child) => {
    if (child.isMesh) {
      const material = new THREE.MeshStandardMaterial({
        color: 0xffd629,
        metalness: 0.5,
        roughness: 0.3,
      });
      child.material = material;
    }
  });

  gsap.from(starModel.position, {
    y: window.innerHeight,
    duration: 2.5,
    ease: "power2.inOut",
    onComplete: () => {
      animateFloat();
    },
  });

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
