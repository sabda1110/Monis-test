import * as THREE from 'three';
import { WorkspaceItem } from '@/types/workspace';
import { AccessoryLayoutContext } from '@/utils/three-accessory-builders';
import { createSurfboardMesh } from '@/utils/three-surfboard-builders';

const createEspressoMachineMesh = (): THREE.Group => {
  const machine = new THREE.Group();

  const steelMat = new THREE.MeshStandardMaterial({
    color: 0xe2e8f0,
    metalness: 0.85,
    roughness: 0.2
  });
  const darkMat = new THREE.MeshStandardMaterial({
    color: 0x1e293b,
    roughness: 0.4,
    metalness: 0.5
  });
  const chromeMat = new THREE.MeshStandardMaterial({
    color: 0xf1f5f9,
    metalness: 0.95,
    roughness: 0.1
  });

  const base = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.036, 0.26), darkMat);
  base.position.set(0, 0.018, 0.01);
  base.castShadow = true;
  machine.add(base);

  const grill = new THREE.Mesh(new THREE.BoxGeometry(0.21, 0.01, 0.14), steelMat);
  grill.position.set(0, 0.041, 0.06);
  grill.receiveShadow = true;
  machine.add(grill);

  const backColumn = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.32, 0.12), darkMat);
  backColumn.position.set(0, 0.16, -0.06);
  backColumn.castShadow = true;
  machine.add(backColumn);

  const waterTank = new THREE.Mesh(
    new THREE.BoxGeometry(0.2, 0.25, 0.04),
    new THREE.MeshStandardMaterial({
      color: 0x93c5fd,
      roughness: 0.15,
      transparent: true,
      opacity: 0.55
    })
  );
  waterTank.position.set(0, 0.165, -0.125);
  machine.add(waterTank);

  const topHeader = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.09, 0.24), steelMat);
  topHeader.position.set(0, 0.295, 0.01);
  topHeader.castShadow = true;
  machine.add(topHeader);

  const cupWarmer = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.008, 0.2), chromeMat);
  cupWarmer.position.set(0, 0.344, 0.01);
  machine.add(cupWarmer);

  const gauge = new THREE.Mesh(
    new THREE.CylinderGeometry(0.022, 0.022, 0.006, 16),
    new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.2 })
  );
  gauge.position.set(0, 0.295, 0.133);
  gauge.rotation.x = Math.PI / 2;
  machine.add(gauge);

  const gaugeRing = new THREE.Mesh(
    new THREE.TorusGeometry(0.022, 0.003, 8, 16),
    chromeMat
  );
  gaugeRing.position.set(0, 0.295, 0.134);
  machine.add(gaugeRing);

  [-0.065, 0.065].forEach((btnX, idx) => {
    const btn = new THREE.Mesh(
      new THREE.CylinderGeometry(0.01, 0.01, 0.006, 12),
      new THREE.MeshBasicMaterial({ color: idx === 0 ? 0x34d399 : 0x38bdf8 })
    );
    btn.position.set(btnX, 0.295, 0.133);
    btn.rotation.x = Math.PI / 2;
    machine.add(btn);
  });

  const groupHead = new THREE.Mesh(new THREE.CylinderGeometry(0.038, 0.038, 0.024, 16), chromeMat);
  groupHead.position.set(0, 0.238, 0.06);
  machine.add(groupHead);

  const portafilter = new THREE.Mesh(new THREE.CylinderGeometry(0.034, 0.034, 0.02, 16), chromeMat);
  portafilter.position.set(0, 0.22, 0.06);
  machine.add(portafilter);

  const handle = new THREE.Mesh(
    new THREE.CylinderGeometry(0.01, 0.008, 0.12, 12),
    darkMat
  );
  handle.position.set(0.05, 0.22, 0.13);
  handle.rotation.x = Math.PI / 2;
  handle.rotation.z = -0.4;
  handle.castShadow = true;
  machine.add(handle);

  const cup = new THREE.Mesh(
    new THREE.CylinderGeometry(0.026, 0.02, 0.038, 16),
    new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.3 })
  );
  cup.position.set(0, 0.065, 0.06);
  cup.castShadow = true;
  machine.add(cup);

  const crema = new THREE.Mesh(
    new THREE.CircleGeometry(0.023, 12),
    new THREE.MeshBasicMaterial({ color: 0x3e2723 })
  );
  crema.position.set(0, 0.082, 0.06);
  crema.rotation.x = -Math.PI / 2;
  machine.add(crema);

  const wand = new THREE.Mesh(
    new THREE.CylinderGeometry(0.005, 0.005, 0.13, 10),
    chromeMat
  );
  wand.position.set(0.092, 0.16, 0.07);
  wand.rotation.x = 0.25;
  wand.rotation.z = -0.15;
  wand.castShadow = true;
  machine.add(wand);

  const steamKnob = new THREE.Mesh(
    new THREE.CylinderGeometry(0.016, 0.016, 0.012, 12),
    darkMat
  );
  steamKnob.position.set(0.124, 0.295, 0.02);
  steamKnob.rotation.z = Math.PI / 2;
  machine.add(steamKnob);

  return machine;
};

export const buildLifestyleGroup = (
  lifestyle: readonly WorkspaceItem[],
  ctx?: AccessoryLayoutContext
): THREE.Group => {
  const group = new THREE.Group();

  lifestyle.forEach((life) => {
    if (life.id === 'lifestyle-surfboard') {
      const surfboard = createSurfboardMesh();
      surfboard.position.set(-1.86, 1.05, -0.48);
      surfboard.rotation.set(-0.14, 0.38, -0.18);
      group.add(surfboard);
    } else if (life.id === 'lifestyle-bean-bag') {
      const bag = new THREE.Mesh(
        new THREE.SphereGeometry(0.55, 16, 16),
        new THREE.MeshStandardMaterial({ color: 0x0d9488, roughness: 0.75 })
      );
      bag.scale.set(1.15, 0.65, 1.15);
      bag.position.set(1.75, 0.32, 0.45);
      bag.castShadow = true;
      group.add(bag);
    } else if (life.id === 'lifestyle-coffee-machine') {
      const machine = createEspressoMachineMesh();
      const hasManyMonitors = ctx ? ctx.numMonitors >= 2 : false;
      const posX = ctx?.hasLaptopStand ? -1.06 : (hasManyMonitors ? -0.98 : -0.88);
      const posZ = hasManyMonitors ? 0.28 : 0.2;
      machine.position.set(posX, 1.24, posZ);
      machine.rotation.y = 0.32;
      group.add(machine);
    }
  });

  return group;
};
