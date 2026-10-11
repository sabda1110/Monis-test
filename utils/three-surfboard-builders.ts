import * as THREE from 'three';

export const createSurfboardMesh = (): THREE.Group => {
  const boardGroup = new THREE.Group();

  const shape = new THREE.Shape();
  shape.moveTo(0, 0);
  shape.lineTo(0.075, 0.025);
  shape.bezierCurveTo(0.18, 0.35, 0.26, 0.95, 0.25, 1.35);
  shape.bezierCurveTo(0.24, 1.7, 0.13, 1.95, 0, 2.15);
  shape.bezierCurveTo(-0.13, 1.95, -0.24, 1.7, -0.25, 1.35);
  shape.bezierCurveTo(-0.26, 0.95, -0.18, 0.35, -0.075, 0.025);
  shape.lineTo(0, 0);

  const extrudeSettings: THREE.ExtrudeGeometryOptions = {
    depth: 0.022,
    bevelEnabled: true,
    bevelSegments: 5,
    steps: 1,
    bevelSize: 0.02,
    bevelThickness: 0.016
  };

  const boardGeo = new THREE.ExtrudeGeometry(shape, extrudeSettings);
  boardGeo.center();

  const boardMat = new THREE.MeshStandardMaterial({
    color: 0xf8fafc,
    roughness: 0.18,
    metalness: 0.05
  });

  const body = new THREE.Mesh(boardGeo, boardMat);
  body.castShadow = true;
  body.receiveShadow = true;
  boardGroup.add(body);

  const stringer = new THREE.Mesh(
    new THREE.BoxGeometry(0.007, 2.12, 0.056),
    new THREE.MeshStandardMaterial({ color: 0x9a3412, roughness: 0.4 })
  );
  boardGroup.add(stringer);

  const stripe = new THREE.Mesh(
    new THREE.BoxGeometry(0.48, 0.12, 0.056),
    new THREE.MeshStandardMaterial({ color: 0x0f766e, roughness: 0.3 })
  );
  stripe.position.set(0, 0.18, 0);
  stripe.rotation.z = -0.12;
  boardGroup.add(stripe);

  const accent = new THREE.Mesh(
    new THREE.BoxGeometry(0.46, 0.024, 0.057),
    new THREE.MeshStandardMaterial({ color: 0xf97316, roughness: 0.3 })
  );
  accent.position.set(0, 0.28, 0);
  accent.rotation.z = -0.12;
  boardGroup.add(accent);

  const padMat = new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.8 });
  const pad = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.34, 0.01), padMat);
  pad.position.set(0, -0.74, 0.03);
  pad.castShadow = true;
  boardGroup.add(pad);

  const kick = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.04, 0.024), padMat);
  kick.position.set(0, -0.89, 0.038);
  boardGroup.add(kick);

  const finMat = new THREE.MeshStandardMaterial({
    color: 0x0f766e,
    roughness: 0.25,
    metalness: 0.2
  });

  const centerFin = new THREE.Mesh(new THREE.BoxGeometry(0.008, 0.12, 0.13), finMat);
  centerFin.position.set(0, -0.84, -0.07);
  centerFin.rotation.x = -0.3;
  centerFin.castShadow = true;
  boardGroup.add(centerFin);

  const leftFin = new THREE.Mesh(new THREE.BoxGeometry(0.008, 0.11, 0.11), finMat);
  leftFin.position.set(-0.09, -0.74, -0.06);
  leftFin.rotation.x = -0.25;
  leftFin.rotation.y = 0.12;
  leftFin.rotation.z = 0.14;
  leftFin.castShadow = true;
  boardGroup.add(leftFin);

  const rightFin = new THREE.Mesh(new THREE.BoxGeometry(0.008, 0.11, 0.11), finMat);
  rightFin.position.set(0.09, -0.74, -0.06);
  rightFin.rotation.x = -0.25;
  rightFin.rotation.y = -0.12;
  rightFin.rotation.z = -0.14;
  rightFin.castShadow = true;
  boardGroup.add(rightFin);

  const plug = new THREE.Mesh(
    new THREE.CylinderGeometry(0.012, 0.012, 0.01, 12),
    new THREE.MeshStandardMaterial({ color: 0x334155, roughness: 0.3 })
  );
  plug.position.set(0, -0.95, 0.03);
  plug.rotation.x = Math.PI / 2;
  boardGroup.add(plug);

  return boardGroup;
};
