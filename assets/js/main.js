import * as THREE from "three";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader.js";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
import gsap from "gsap";

let camera, scene, renderer;

init();
animate();

function init() {
  camera = new THREE.PerspectiveCamera(
    8,
    window.innerWidth / window.innerHeight,
    0.1,
    10
  );
  camera.position.z = 2;

  // scene
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0xeae8e0);

  const ambientLight = new THREE.AmbientLight(0xffffff);
  scene.add(ambientLight);

  const pointLight = new THREE.PointLight(0xffffff, 60);
  camera.add(pointLight);
  scene.add(camera);

  // models
  const modelsToLoad = [
    {
      mtl: "portfolio.mtl",
      obj: "portfolio.obj",
      position: new THREE.Vector3(0, -1.1, -6),
    },
  ];

  const loader = new THREE.ObjectLoader();

  modelsToLoad.forEach((modelInfo) => {
    const { mtl, obj, position } = modelInfo;

    const onProgress = function (xhr) {
      if (xhr.lengthComputable) {
        const percentComplete = (xhr.loaded / xhr.total) * 100;
        console.log(percentComplete.toFixed(2) + "% downloaded");
      }
    };

    new MTLLoader().setPath("images/3d/").load(mtl, function (materials) {
      materials.preload();

      new OBJLoader()
        .setMaterials(materials)
        .setPath("images/3d/")
        .load(
          obj,
          function (object) {
            object.position.copy(position);
            object.scale.setScalar(0.01);
            scene.add(object);

            gsap.to(object.position, {
              y: object.position.y + 0.05,
              duration: 1,
              yoyo: true,
              repeat: -1,
              ease: "power1.inOut",
            });
          },
          onProgress
        );
    });
  });

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  window.addEventListener("resize", onWindowResize);
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
