import * as THREE from 'three';
import { WorkspaceItem } from '@/types/workspace';

const createStarBase = (hubY: number): THREE.Group => {
  const baseGroup = new THREE.Group();
  const hub = new THREE.Mesh(
    new THREE.CylinderGeometry(0.065, 0.08, 0.05, 16),
    new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.3, metalness: 0.7 })
  );
  hub.position.y = hubY;
  baseGroup.add(hub);

  const numLegs = 5;
  for (let i = 0; i < numLegs; i++) {
    const angle = (i * 2 * Math.PI) / numLegs;
    const legGeo = new THREE.BoxGeometry(0.04, 0.03, 0.36);
    const leg = new THREE.Mesh(
      legGeo,
      new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.4, metalness: 0.6 })
    );
    leg.position.set(Math.sin(angle) * 0.18, hubY - 0.04, Math.cos(angle) * 0.18);
    leg.rotation.y = angle;
    leg.rotation.x = 0.08;
    leg.castShadow = true;
    baseGroup.add(leg);

    const wheel = new THREE.Mesh(
      new THREE.CylinderGeometry(0.03, 0.03, 0.035, 12),
      new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.2 })
    );
    wheel.position.set(Math.sin(angle) * 0.34, 0.03, Math.cos(angle) * 0.34);
    wheel.rotation.z = Math.PI / 2;
    wheel.castShadow = true;
    baseGroup.add(wheel);
  }

  return baseGroup;
};

export const buildChairMesh = (chair: WorkspaceItem): THREE.Group => {
  const group = new THREE.Group();
  group.position.set(0, 0, 0.72);
  group.rotation.y = Math.PI - 0.25;

  if (chair.id === 'chair-ergo-mesh') {
    const seatMat = new THREE.MeshStandardMaterial({ color: 0x2563eb, roughness: 0.45 });
    const frameMat = new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.3, metalness: 0.5 });
    const trimMat = new THREE.MeshStandardMaterial({ color: 0x334155, roughness: 0.4 });

    const seat = new THREE.Mesh(new THREE.BoxGeometry(0.66, 0.08, 0.62), seatMat);
    seat.position.set(0, 0.68, 0);
    seat.castShadow = true;
    group.add(seat);

    const seatTray = new THREE.Mesh(new THREE.BoxGeometry(0.64, 0.03, 0.6), frameMat);
    seatTray.position.set(0, 0.63, 0);
    group.add(seatTray);

    const backGeo = new THREE.BoxGeometry(0.58, 0.68, 0.05);
    const back = new THREE.Mesh(backGeo, seatMat);
    back.position.set(0, 1.08, -0.28);
    back.rotation.x = -0.08;
    back.castShadow = true;
    group.add(back);

    const spine = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.62, 0.06), frameMat);
    spine.position.set(0, 1.05, -0.32);
    spine.rotation.x = -0.08;
    spine.castShadow = true;
    group.add(spine);

    const lumbar = new THREE.Mesh(new THREE.BoxGeometry(0.52, 0.12, 0.06), trimMat);
    lumbar.position.set(0, 0.94, -0.26);
    lumbar.castShadow = true;
    group.add(lumbar);

    const headrestStem = new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.015, 0.16, 12), frameMat);
    headrestStem.position.set(0, 1.46, -0.32);
    group.add(headrestStem);

    const headrest = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.14, 0.07), seatMat);
    headrest.position.set(0, 1.54, -0.31);
    headrest.castShadow = true;
    group.add(headrest);

    [-0.35, 0.35].forEach((armX) => {
      const armStem = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.28, 0.05), frameMat);
      armStem.position.set(armX, 0.8, -0.05);
      armStem.castShadow = true;
      group.add(armStem);

      const armPad = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.035, 0.26), trimMat);
      armPad.position.set(armX, 0.94, -0.03);
      armPad.castShadow = true;
      group.add(armPad);
    });

    const cylinder = new THREE.Mesh(
      new THREE.CylinderGeometry(0.032, 0.032, 0.44, 16),
      new THREE.MeshStandardMaterial({ color: 0x475569, metalness: 0.8, roughness: 0.2 })
    );
    cylinder.position.set(0, 0.42, 0);
    cylinder.castShadow = true;
    group.add(cylinder);

    group.add(createStarBase(0.2));
    return group;
  }

  if (chair.id === 'chair-rattan-lounge') {
    const rattanMat = new THREE.MeshStandardMaterial({ color: 0xc4884d, roughness: 0.65 });
    const cushionMat = new THREE.MeshStandardMaterial({ color: 0xfdfbf7, roughness: 0.7 });
    const woodLegMat = new THREE.MeshStandardMaterial({ color: 0x451a03, roughness: 0.5 });

    const shell = new THREE.Mesh(new THREE.CylinderGeometry(0.38, 0.32, 0.56, 24, 1, true, 0, Math.PI * 1.5), rattanMat);
    shell.position.set(0, 0.92, -0.05);
    shell.rotation.y = Math.PI * 0.75;
    shell.castShadow = true;
    group.add(shell);

    const seatCushion = new THREE.Mesh(new THREE.CylinderGeometry(0.34, 0.34, 0.12, 24), cushionMat);
    seatCushion.position.set(0, 0.68, 0);
    seatCushion.castShadow = true;
    group.add(seatCushion);

    const backPillow = new THREE.Mesh(new THREE.BoxGeometry(0.48, 0.36, 0.08), cushionMat);
    backPillow.position.set(0, 0.95, -0.22);
    backPillow.rotation.x = -0.15;
    backPillow.castShadow = true;
    group.add(backPillow);

    const legPositions: [number, number, number, number][] = [
      [-0.26, -0.24, -0.1, 0.1],
      [0.26, -0.24, 0.1, 0.1],
      [-0.26, 0.24, -0.1, -0.1],
      [0.26, 0.24, 0.1, -0.1]
    ];

    legPositions.forEach(([x, z, rotZ, rotX]) => {
      const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.022, 0.015, 0.66, 12), woodLegMat);
      leg.position.set(x, 0.33, z);
      leg.rotation.z = rotZ;
      leg.rotation.x = rotX;
      leg.castShadow = true;
      group.add(leg);

      const brassTip = new THREE.Mesh(
        new THREE.CylinderGeometry(0.017, 0.017, 0.04, 12),
        new THREE.MeshStandardMaterial({ color: 0xd97706, metalness: 0.8, roughness: 0.2 })
      );
      brassTip.position.set(x + rotZ * 0.3, 0.02, z + rotX * 0.3);
      group.add(brassTip);
    });

    const crossbar = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.018, 0.44), woodLegMat);
    crossbar.position.set(0, 0.24, 0);
    group.add(crossbar);

    return group;
  }

  const taskMat = new THREE.MeshStandardMaterial({ color: 0x334155, roughness: 0.5 });
  const frameMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.3, metalness: 0.5 });

  const seat = new THREE.Mesh(new THREE.BoxGeometry(0.62, 0.08, 0.58), taskMat);
  seat.position.set(0, 0.68, 0);
  seat.castShadow = true;
  group.add(seat);

  const back = new THREE.Mesh(new THREE.BoxGeometry(0.54, 0.62, 0.06), taskMat);
  back.position.set(0, 1.05, -0.26);
  back.rotation.x = -0.06;
  back.castShadow = true;
  group.add(back);

  [-0.33, 0.33].forEach((armX) => {
    const loop = new THREE.Mesh(new THREE.TorusGeometry(0.12, 0.018, 8, 16, Math.PI), frameMat);
    loop.position.set(armX, 0.86, -0.04);
    loop.rotation.z = armX < 0 ? Math.PI / 2 : -Math.PI / 2;
    loop.castShadow = true;
    group.add(loop);
  });

  const cylinder = new THREE.Mesh(
    new THREE.CylinderGeometry(0.032, 0.032, 0.44, 16),
    new THREE.MeshStandardMaterial({ color: 0x475569, metalness: 0.8, roughness: 0.2 })
  );
  cylinder.position.set(0, 0.42, 0);
  cylinder.castShadow = true;
  group.add(cylinder);

  group.add(createStarBase(0.2));
  return group;
};
