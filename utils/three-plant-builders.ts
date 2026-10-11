import * as THREE from 'three';
import { WorkspaceItem } from '@/types/workspace';
import { AccessoryLayoutContext } from '@/utils/three-accessory-builders';

export const buildPlantGroup = (
  plant: WorkspaceItem,
  ctx: AccessoryLayoutContext
): THREE.Group => {
  const group = new THREE.Group();

  if (plant.id === 'plant-monstera') {
    const pot = new THREE.Mesh(
      new THREE.CylinderGeometry(0.24, 0.18, 0.44, 24),
      new THREE.MeshStandardMaterial({ color: 0xe2e8f0, roughness: 0.35 })
    );
    pot.position.set(-1.5, 0.22, 0.1);
    pot.castShadow = true;
    pot.receiveShadow = true;
    group.add(pot);

    const soil = new THREE.Mesh(
      new THREE.CylinderGeometry(0.22, 0.22, 0.02, 24),
      new THREE.MeshStandardMaterial({ color: 0x3e2723, roughness: 0.9 })
    );
    soil.position.set(-1.5, 0.43, 0.1);
    group.add(soil);

    const leafMat = new THREE.MeshStandardMaterial({ color: 0x166534, roughness: 0.4, side: THREE.DoubleSide });
    const leafAngles = [0, 1.2, 2.3, 3.6, 4.8];
    leafAngles.forEach((angle, idx) => {
      const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, 0.55, 8), leafMat);
      stem.position.set(-1.5 + Math.cos(angle) * 0.12, 0.65 + idx * 0.06, 0.1 + Math.sin(angle) * 0.12);
      stem.rotation.z = Math.cos(angle) * 0.35;
      stem.rotation.x = Math.sin(angle) * 0.35;
      stem.castShadow = true;
      group.add(stem);

      const leaf = new THREE.Mesh(new THREE.PlaneGeometry(0.26, 0.36), leafMat);
      leaf.position.set(-1.5 + Math.cos(angle) * 0.28, 0.9 + idx * 0.06, 0.1 + Math.sin(angle) * 0.28);
      leaf.rotation.y = angle;
      leaf.rotation.x = 0.4;
      leaf.castShadow = true;
      group.add(leaf);
    });

    return group;
  }

  const plantX = ctx.hasLamp ? (ctx.numMonitors >= 2 ? -1.08 : -0.86) : 0.86;
  const plantZ = ctx.numMonitors >= 2 ? -0.28 : -0.22;

  if (plant.id === 'plant-snake') {
    const pot = new THREE.Mesh(
      new THREE.CylinderGeometry(0.12, 0.09, 0.22, 16),
      new THREE.MeshStandardMaterial({ color: 0xc2410c, roughness: 0.6 })
    );
    pot.position.set(plantX, 1.34, plantZ);
    pot.castShadow = true;
    group.add(pot);

    const leafMat = new THREE.MeshStandardMaterial({ color: 0x15803d, roughness: 0.5 });
    for (let i = 0; i < 5; i++) {
      const leaf = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.38 + i * 0.04, 0.015), leafMat);
      leaf.position.set(plantX + (i - 2) * 0.035, 1.56 + i * 0.02, plantZ + (i % 2 === 0 ? 0.02 : -0.02));
      leaf.rotation.z = (i - 2) * 0.06;
      leaf.castShadow = true;
      group.add(leaf);
    }
    return group;
  }

  const tray = new THREE.Mesh(
    new THREE.BoxGeometry(0.36, 0.02, 0.16),
    new THREE.MeshStandardMaterial({ color: 0xd4a373, roughness: 0.5 })
  );
  tray.position.set(plantX, 1.25, plantZ);
  tray.castShadow = true;
  group.add(tray);

  const succMat = new THREE.MeshStandardMaterial({ color: 0x10b981, roughness: 0.4 });
  [-0.1, 0, 0.1].forEach((xOff, idx) => {
    const miniPot = new THREE.Mesh(
      new THREE.CylinderGeometry(0.035, 0.028, 0.06, 12),
      new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.3 })
    );
    miniPot.position.set(plantX + xOff, 1.29, plantZ);
    miniPot.castShadow = true;
    group.add(miniPot);

    const succ = new THREE.Mesh(new THREE.SphereGeometry(0.035, 8, 8), succMat);
    succ.scale.set(1.2, 0.7 + idx * 0.2, 1.2);
    succ.position.set(plantX + xOff, 1.34, plantZ);
    succ.castShadow = true;
    group.add(succ);
  });

  return group;
};
