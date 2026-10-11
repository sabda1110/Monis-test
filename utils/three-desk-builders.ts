import * as THREE from 'three';
import { WorkspaceItem } from '@/types/workspace';

export const buildDeskMesh = (desk: WorkspaceItem): THREE.Group => {
  const group = new THREE.Group();

  if (desk.id === 'desk-standing-pro') {
    const topGeo = new THREE.BoxGeometry(2.4, 0.08, 1.15);
    const topMat = new THREE.MeshStandardMaterial({
      color: 0xd4a373,
      roughness: 0.35,
      metalness: 0.05
    });
    const top = new THREE.Mesh(topGeo, topMat);
    top.position.set(0, 1.2, 0);
    top.castShadow = true;
    top.receiveShadow = true;
    group.add(top);

    const chamferGeo = new THREE.BoxGeometry(2.38, 0.02, 1.13);
    const chamferMat = new THREE.MeshStandardMaterial({ color: 0x9c6b3b, roughness: 0.5 });
    const chamfer = new THREE.Mesh(chamferGeo, chamferMat);
    chamfer.position.set(0, 1.15, 0);
    group.add(chamfer);

    const beamGeo = new THREE.BoxGeometry(1.7, 0.06, 0.12);
    const frameMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.4, metalness: 0.5 });
    const beam = new THREE.Mesh(beamGeo, frameMat);
    beam.position.set(0, 1.12, 0);
    beam.castShadow = true;
    group.add(beam);

    const legPositions: number[] = [-0.85, 0.85];
    legPositions.forEach((xPos) => {
      const lowerCol = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.58, 0.12), frameMat);
      lowerCol.position.set(xPos, 0.33, 0);
      lowerCol.castShadow = true;
      group.add(lowerCol);

      const upperCol = new THREE.Mesh(
        new THREE.BoxGeometry(0.1, 0.54, 0.1),
        new THREE.MeshStandardMaterial({ color: 0x334155, roughness: 0.3, metalness: 0.6 })
      );
      upperCol.position.set(xPos, 0.85, 0);
      upperCol.castShadow = true;
      group.add(upperCol);

      const foot = new THREE.Mesh(
        new THREE.BoxGeometry(0.15, 0.07, 0.96),
        new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.5, metalness: 0.6 })
      );
      foot.position.set(xPos, 0.035, 0);
      foot.castShadow = true;
      foot.receiveShadow = true;
      group.add(foot);
    });

    const keypad = new THREE.Mesh(
      new THREE.BoxGeometry(0.16, 0.03, 0.08),
      new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.2 })
    );
    keypad.position.set(0.96, 1.145, 0.52);
    group.add(keypad);

    const screen = new THREE.Mesh(
      new THREE.PlaneGeometry(0.06, 0.015),
      new THREE.MeshBasicMaterial({ color: 0x34d399 })
    );
    screen.position.set(0.96, 1.145, 0.562);
    group.add(screen);

    return group;
  }

  if (desk.id === 'desk-compact-wood') {
    const topGeo = new THREE.BoxGeometry(2.1, 0.07, 1.05);
    const teakMat = new THREE.MeshStandardMaterial({
      color: 0xb45309,
      roughness: 0.4,
      metalness: 0.05
    });
    const top = new THREE.Mesh(topGeo, teakMat);
    top.position.set(0, 1.2, 0);
    top.castShadow = true;
    top.receiveShadow = true;
    group.add(top);

    const apronGeo = new THREE.BoxGeometry(1.9, 0.1, 0.88);
    const apronMat = new THREE.MeshStandardMaterial({ color: 0x92400e, roughness: 0.5 });
    const apron = new THREE.Mesh(apronGeo, apronMat);
    apron.position.set(0, 1.12, 0);
    group.add(apron);

    const drawer = new THREE.Mesh(
      new THREE.BoxGeometry(0.52, 0.08, 0.02),
      new THREE.MeshStandardMaterial({ color: 0x78350f, roughness: 0.4 })
    );
    drawer.position.set(0.55, 1.12, 0.45);
    group.add(drawer);

    const knob = new THREE.Mesh(
      new THREE.SphereGeometry(0.018, 12, 12),
      new THREE.MeshStandardMaterial({ color: 0xfef3c7, metalness: 0.8, roughness: 0.2 })
    );
    knob.position.set(0.55, 1.12, 0.47);
    group.add(knob);

    const legPositions: [number, number, number, number][] = [
      [-0.88, 0.55, -0.38, 0.06],
      [0.88, 0.55, -0.38, -0.06],
      [-0.88, 0.55, 0.38, 0.06],
      [0.88, 0.55, 0.38, -0.06]
    ];

    legPositions.forEach(([x, y, z, zTilt]) => {
      const leg = new THREE.Mesh(
        new THREE.CylinderGeometry(0.035, 0.022, 1.14, 16),
        new THREE.MeshStandardMaterial({ color: 0x78350f, roughness: 0.45 })
      );
      leg.position.set(x, y, z);
      leg.rotation.z = zTilt;
      leg.castShadow = true;
      group.add(leg);

      const cap = new THREE.Mesh(
        new THREE.CylinderGeometry(0.024, 0.024, 0.04, 16),
        new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.2 })
      );
      cap.position.set(x + zTilt * 0.4, 0.02, z);
      group.add(cap);
    });

    return group;
  }

  const topGeo = new THREE.BoxGeometry(2.5, 0.08, 1.25);
  const execMat = new THREE.MeshStandardMaterial({
    color: 0x3e2723,
    roughness: 0.35,
    metalness: 0.1
  });
  const top = new THREE.Mesh(topGeo, execMat);
  top.position.set(0, 1.2, 0);
  top.castShadow = true;
  top.receiveShadow = true;
  group.add(top);

  const modesty = new THREE.Mesh(
    new THREE.BoxGeometry(1.2, 0.65, 0.04),
    new THREE.MeshStandardMaterial({ color: 0x2e1c14, roughness: 0.6 })
  );
  modesty.position.set(0, 0.82, -0.38);
  modesty.castShadow = true;
  group.add(modesty);

  const pedestalPositions: number[] = [-0.94, 0.94];
  pedestalPositions.forEach((xPos) => {
    const pedestal = new THREE.Mesh(
      new THREE.BoxGeometry(0.54, 1.12, 1.05),
      new THREE.MeshStandardMaterial({ color: 0x4e342e, roughness: 0.4 })
    );
    pedestal.position.set(xPos, 0.6, 0);
    pedestal.castShadow = true;
    pedestal.receiveShadow = true;
    group.add(pedestal);

    for (let i = 0; i < 3; i++) {
      const handle = new THREE.Mesh(
        new THREE.BoxGeometry(0.14, 0.02, 0.02),
        new THREE.MeshStandardMaterial({ color: 0xd1d5db, metalness: 0.85, roughness: 0.2 })
      );
      handle.position.set(xPos, 0.32 + i * 0.32, 0.54);
      group.add(handle);
    }
  });

  return group;
};
