import * as THREE from 'three';
import { StageLightingMode, WorkspaceSetup } from '@/types/workspace';
import { populateWorkspaceGroup } from '@/utils/three-mesh-builders';

export interface ThreeSceneController {
  update: (setup: WorkspaceSetup, lighting: StageLightingMode) => void;
  resetView: () => void;
  dispose: () => void;
}

export const createThreeWorkspaceScene = (
  container: HTMLDivElement,
  initialSetup: WorkspaceSetup,
  initialLighting: StageLightingMode
): ThreeSceneController => {
  const width = container.clientWidth || 640;
  const height = container.clientHeight || 420;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 100);
  camera.position.set(0, 2.4, 4.9);
  camera.lookAt(0, 0.92, 0);

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  container.appendChild(renderer.domElement);

  const ambientLight = new THREE.AmbientLight(0xfffbeb, 0.9);
  scene.add(ambientLight);

  const keyLight = new THREE.DirectionalLight(0xfff7ed, 1.25);
  keyLight.position.set(3.5, 6.5, 4.5);
  keyLight.castShadow = true;
  keyLight.shadow.mapSize.width = 1024;
  keyLight.shadow.mapSize.height = 1024;
  keyLight.shadow.bias = -0.001;
  scene.add(keyLight);

  const fillLight = new THREE.DirectionalLight(0xe0f2fe, 0.4);
  fillLight.position.set(-3.5, 4.0, -2.5);
  scene.add(fillLight);

  const platformGeo = new THREE.BoxGeometry(6.4, 0.08, 4.4);
  const platformMat = new THREE.MeshStandardMaterial({
    color: 0xeadcc8,
    roughness: 0.65,
    metalness: 0.05
  });
  const platform = new THREE.Mesh(platformGeo, platformMat);
  platform.position.set(0, -0.04, 0);
  platform.receiveShadow = true;
  scene.add(platform);

  const rugGeo = new THREE.BoxGeometry(3.6, 0.012, 2.6);
  const rugMat = new THREE.MeshStandardMaterial({
    color: 0xdbcbb4,
    roughness: 0.85
  });
  const rug = new THREE.Mesh(rugGeo, rugMat);
  rug.position.set(0, 0.006, 0.15);
  rug.receiveShadow = true;
  scene.add(rug);

  const itemsGroup = new THREE.Group();
  scene.add(itemsGroup);

  const applyLighting = (mode: StageLightingMode) => {
    const isNight = mode === 'night';
    scene.background = new THREE.Color(isNight ? 0x0f172a : 0xfaf7f2);
    ambientLight.color.setHex(isNight ? 0x38bdf8 : 0xfffbeb);
    ambientLight.intensity = isNight ? 0.4 : 0.9;
    keyLight.color.setHex(isNight ? 0x818cf8 : 0xfff7ed);
    keyLight.intensity = isNight ? 0.45 : 1.25;
    fillLight.color.setHex(isNight ? 0x1e3a8a : 0xe0f2fe);
    fillLight.intensity = isNight ? 0.3 : 0.4;
    platformMat.color.setHex(isNight ? 0x1e293b : 0xeadcc8);
    rugMat.color.setHex(isNight ? 0x0f172a : 0xdbcbb4);
  };

  applyLighting(initialLighting);
  populateWorkspaceGroup(itemsGroup, initialSetup, initialLighting);

  let isDragging = false;
  let prevMouseX = 0;
  let prevMouseY = 0;
  let targetRotationY = 0;
  let targetRotationX = 0.24;

  const onMouseDown = (e: MouseEvent) => {
    isDragging = true;
    prevMouseX = e.clientX;
    prevMouseY = e.clientY;
  };

  const onMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    const deltaX = e.clientX - prevMouseX;
    const deltaY = e.clientY - prevMouseY;
    prevMouseX = e.clientX;
    prevMouseY = e.clientY;
    targetRotationY += deltaX * 0.008;
    targetRotationX = Math.max(0.04, Math.min(0.85, targetRotationX + deltaY * 0.005));
  };

  const onMouseUp = () => {
    isDragging = false;
  };

  const onWheel = (e: WheelEvent) => {
    e.preventDefault();
    const newZ = camera.position.z + e.deltaY * 0.003;
    camera.position.z = Math.max(3.2, Math.min(7.5, newZ));
  };

  const canvas = renderer.domElement;
  canvas.addEventListener('mousedown', onMouseDown);
  window.addEventListener('mousemove', onMouseMove);
  window.addEventListener('mouseup', onMouseUp);
  canvas.addEventListener('wheel', onWheel, { passive: false });

  let animationId = 0;
  const animate = () => {
    animationId = requestAnimationFrame(animate);
    itemsGroup.rotation.y += (targetRotationY - itemsGroup.rotation.y) * 0.08;
    platform.rotation.y = itemsGroup.rotation.y;
    rug.rotation.y = itemsGroup.rotation.y;
    camera.position.y += (targetRotationX * 5.0 - camera.position.y) * 0.08;
    camera.lookAt(0, 0.92, 0);
    renderer.render(scene, camera);
  };
  animate();

  const handleResize = () => {
    const w = container.clientWidth || 640;
    const h = container.clientHeight || 420;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
  };
  window.addEventListener('resize', handleResize);

  return {
    update: (setup: WorkspaceSetup, lighting: StageLightingMode) => {
      applyLighting(lighting);
      populateWorkspaceGroup(itemsGroup, setup, lighting);
    },
    resetView: () => {
      targetRotationY = 0;
      targetRotationX = 0.24;
      camera.position.set(0, 2.4, 4.9);
    },
    dispose: () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      canvas.removeEventListener('wheel', onWheel);
      renderer.dispose();
      if (container.contains(canvas)) {
        container.removeChild(canvas);
      }
    }
  };
};
