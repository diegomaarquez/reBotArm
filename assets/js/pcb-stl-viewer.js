import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { STLLoader } from "three/addons/loaders/STLLoader.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

const viewer = document.querySelector("[data-stl-viewer]");

if (viewer) {
  const canvas = viewer.querySelector(".pcb-stl-viewer__canvas");
  const status = viewer.querySelector("[data-viewer-status]");
  const viewport = viewer.querySelector(".pcb-stl-viewer__viewport");
  let renderer;

  try {
    renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
  } catch {
    status.textContent = "Este navegador no pudo iniciar el visor 3D. Puedes descargar el archivo del modelo.";
    viewer.dataset.viewerState = "error";
  }

  if (renderer) {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x1a2530);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.12;

    const camera = new THREE.PerspectiveCamera(40, 1, 0.01, 10000);
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.055;
    controls.enablePan = false;
    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    controls.autoRotate = !motionPreference.matches;
    controls.autoRotateSpeed = 0.3;
    motionPreference.addEventListener("change", (event) => {
      controls.autoRotate = !event.matches;
    });

    scene.add(new THREE.HemisphereLight(0xe6f1f8, 0x334655, 2.1));

    const keyLight = new THREE.DirectionalLight(0xffffff, 2.4);
    keyLight.position.set(3, 5, 4);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0x9dc9e8, 1.25);
    fillLight.position.set(-4, 1, -3);
    scene.add(fillLight);

    let modelRadius = 1;
    const modelCenter = new THREE.Vector3();

    const setDefaultView = () => {
      camera.position.set(
        modelCenter.x + modelRadius * 2.8,
        modelCenter.y + modelRadius * 2.4,
        modelCenter.z + modelRadius * 2.8,
      );
      camera.near = modelRadius / 100;
      camera.far = modelRadius * 30;
      camera.updateProjectionMatrix();
      controls.target.copy(modelCenter);
      controls.minDistance = modelRadius * 0.65;
      controls.maxDistance = modelRadius * 8;
      controls.update();
    };

    const modelUrl = viewer.dataset.modelUrl || "";
    const isGlb = /\.(gltf|glb)$/i.test(modelUrl);

    const addModel = (object) => {
      object.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = false;
          child.receiveShadow = false;
        }
      });

      scene.add(object);
      const box = new THREE.Box3().setFromObject(object);
      const size = box.getSize(new THREE.Vector3());
      box.getCenter(modelCenter);
      modelRadius = Math.max(size.x, size.y, size.z) * 0.6 || 1;
      setDefaultView();
      status.hidden = true;
    };

    const handleLoadError = () => {
      status.textContent = "No se pudo cargar el modelo 3D. Puedes descargar el archivo del modelo.";
      viewer.dataset.viewerState = "error";
    };

    if (isGlb) {
      const gltfLoader = new GLTFLoader();
      gltfLoader.load(
        modelUrl,
        (gltf) => addModel(gltf.scene),
        undefined,
        handleLoadError,
      );
    } else {
      const stlLoader = new STLLoader();
      stlLoader.load(
        modelUrl,
        (geometry) => {
          geometry.computeVertexNormals();
          geometry.computeBoundingBox();
          const center = geometry.boundingBox.getCenter(new THREE.Vector3());
          geometry.translate(-center.x, -center.y, -center.z);
          geometry.computeBoundingSphere();
          modelRadius = geometry.boundingSphere.radius || 1;

          const material = new THREE.MeshStandardMaterial({
            color: 0x789cb8,
            metalness: 0.24,
            roughness: 0.46,
          });
          scene.add(new THREE.Mesh(geometry, material));
          setDefaultView();
          status.hidden = true;
        },
        undefined,
        handleLoadError,
      );
    }

    viewer.querySelectorAll("[data-viewer-action]").forEach((button) => {
      button.addEventListener("click", () => {
        if (button.dataset.viewerAction === "reset") {
          setDefaultView();
        } else {
          controls.dollyIn(button.dataset.viewerAction === "zoom-in" ? 1.25 : 0.8);
          controls.update();
        }
      });
    });

    const resizeObserver = new ResizeObserver(() => {
      const { width, height } = viewport.getBoundingClientRect();
      if (!width || !height) return;
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    });
    resizeObserver.observe(viewport);

    const render = () => {
      controls.update();
      renderer.render(scene, camera);
      requestAnimationFrame(render);
    };
    render();
  }
}