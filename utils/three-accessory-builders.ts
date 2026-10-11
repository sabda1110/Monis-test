import * as THREE from 'three';
import { WorkspaceItem } from '@/types/workspace';

export interface AccessoryLayoutContext {
  numMonitors: number;
  hasLaptopStand: boolean;
  hasLamp: boolean;
  hasCoffeeMachine: boolean;
  isNight: boolean;
}

export const buildLampGroup = (
  lamp: WorkspaceItem,
  ctx: AccessoryLayoutContext
): THREE.Group => {
  const group = new THREE.Group();
  const lightIntensity = ctx.isNight ? 2.2 : 0.85;

  if (lamp.id === 'lamp-minimal-screenbar') {
    const isDual = ctx.numMonitors === 2;
    const barX = isDual ? -0.54 : 0;
    const barZ = isDual ? -0.12 : -0.14;
    const barRotY = isDual ? 0.16 : 0;

    const barGroup = new THREE.Group();
    barGroup.position.set(barX, 1.98, barZ);
    barGroup.rotation.y = barRotY;

    const bar = new THREE.Mesh(
      new THREE.BoxGeometry(0.58, 0.024, 0.032),
      new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.3 })
    );
    bar.castShadow = true;
    barGroup.add(bar);

    const lightStrip = new THREE.Mesh(
      new THREE.PlaneGeometry(0.54, 0.015),
      new THREE.MeshBasicMaterial({ color: 0xffedd5 })
    );
    lightStrip.position.set(0, -0.014, 0.005);
    lightStrip.rotation.x = Math.PI / 2;
    barGroup.add(lightStrip);

    const downLight = new THREE.PointLight(0xffedd5, lightIntensity, 2.8);
    downLight.position.set(0, -0.05, 0.05);
    barGroup.add(downLight);

    group.add(barGroup);
    return group;
  }

  const isWide = ctx.numMonitors >= 2;
  const baseX = isWide ? 1.14 : 0.88;
  const baseZ = isWide ? -0.18 : -0.22;
  const stemHeight = isWide ? 0.72 : 0.55;
  const stemY = 1.25 + stemHeight / 2;
  const arcY = 1.25 + stemHeight + 0.16;
  const arcZ = baseZ + 0.12;
  const shadeX = isWide ? 1.0 : 0.68;
  const shadeY = isWide ? 2.04 : 1.82;
  const shadeZ = baseZ + 0.24;

  const base = new THREE.Mesh(
    new THREE.CylinderGeometry(0.08, 0.08, 0.04, 20),
    new THREE.MeshStandardMaterial({ color: 0xf1f5f9, roughness: 0.3, metalness: 0.1 })
  );
  base.position.set(baseX, 1.25, baseZ);
  base.castShadow = true;
  group.add(base);

  const brassMat = new THREE.MeshStandardMaterial({ color: 0xd97706, roughness: 0.25, metalness: 0.8 });
  const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.014, 0.014, stemHeight, 12), brassMat);
  stem.position.set(baseX, stemY, baseZ);
  stem.castShadow = true;
  group.add(stem);

  const arc = new THREE.Mesh(new THREE.CylinderGeometry(0.014, 0.014, 0.42, 12), brassMat);
  arc.position.set(baseX - 0.08, arcY, arcZ);
  arc.rotation.z = Math.PI / 3.5;
  arc.rotation.y = 0.2;
  arc.castShadow = true;
  group.add(arc);

  const shade = new THREE.Mesh(new THREE.ConeGeometry(0.12, 0.14, 20, 1, true), brassMat);
  shade.position.set(shadeX, shadeY, shadeZ);
  shade.rotation.x = Math.PI;
  shade.castShadow = true;
  group.add(shade);

  const bulb = new THREE.Mesh(
    new THREE.SphereGeometry(0.035, 12, 12),
    new THREE.MeshBasicMaterial({ color: 0xffedd5 })
  );
  bulb.position.set(shadeX, shadeY - 0.04, shadeZ);
  group.add(bulb);

  const lampLight = new THREE.PointLight(0xffedd5, lightIntensity, 3.4);
  lampLight.position.set(shadeX, shadeY - 0.06, shadeZ);
  group.add(lampLight);

  return group;
};

export const buildExtrasGroup = (
  extras: readonly WorkspaceItem[],
  ctx: AccessoryLayoutContext
): THREE.Group => {
  const group = new THREE.Group();

  const hasPeripherals = extras.some(
    (e) => e.id === 'extra-mech-keyboard' || e.id === 'extra-ergo-mouse'
  );
  if (hasPeripherals) {
    const mat = new THREE.Mesh(
      new THREE.BoxGeometry(1.1, 0.008, 0.48),
      new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.7 })
    );
    mat.position.set(0.05, 1.242, 0.15);
    mat.receiveShadow = true;
    group.add(mat);
  }

  extras.forEach((extra) => {
    if (extra.id === 'extra-mech-keyboard') {
      const kbBase = new THREE.Mesh(
        new THREE.BoxGeometry(0.56, 0.022, 0.19),
        new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.3 })
      );
      kbBase.position.set(-0.02, 1.256, 0.16);
      kbBase.castShadow = true;
      group.add(kbBase);

      const keys = new THREE.Mesh(
        new THREE.BoxGeometry(0.53, 0.012, 0.16),
        new THREE.MeshStandardMaterial({ color: 0x334155, roughness: 0.5 })
      );
      keys.position.set(-0.02, 1.27, 0.16);
      group.add(keys);

      const accentKey = new THREE.Mesh(
        new THREE.BoxGeometry(0.04, 0.014, 0.03),
        new THREE.MeshStandardMaterial({ color: 0x0f766e, roughness: 0.3 })
      );
      accentKey.position.set(0.22, 1.272, 0.12);
      group.add(accentKey);
    } else if (extra.id === 'extra-ergo-mouse') {
      const mouse = new THREE.Mesh(
        new THREE.SphereGeometry(0.045, 12, 12),
        new THREE.MeshStandardMaterial({ color: 0x0f766e, roughness: 0.35 })
      );
      mouse.scale.set(0.75, 0.6, 1.25);
      mouse.position.set(0.42, 1.268, 0.16);
      mouse.castShadow = true;
      group.add(mouse);
    } else if (extra.id === 'extra-laptop-stand') {
      const standX = ctx.hasCoffeeMachine ? -0.68 : (ctx.numMonitors >= 2 ? -1.04 : -0.78);
      const standZ = ctx.hasCoffeeMachine ? 0.18 : (ctx.numMonitors >= 2 ? 0.22 : 0.08);
      const standRotY = ctx.hasCoffeeMachine ? 0.2 : (ctx.numMonitors >= 2 ? 0.35 : 0.15);

      const standGroup = new THREE.Group();
      standGroup.position.set(standX, 1.3, standZ);
      standGroup.rotation.y = standRotY;

      const stand = new THREE.Mesh(
        new THREE.BoxGeometry(0.36, 0.12, 0.28),
        new THREE.MeshStandardMaterial({ color: 0x94a3b8, metalness: 0.8, roughness: 0.25 })
      );
      stand.rotation.x = -0.22;
      stand.castShadow = true;
      standGroup.add(stand);

      const laptopLid = new THREE.Mesh(
        new THREE.BoxGeometry(0.34, 0.22, 0.012),
        new THREE.MeshStandardMaterial({ color: 0x64748b, metalness: 0.8, roughness: 0.25 })
      );
      laptopLid.position.set(0, 0.14, -0.11);
      laptopLid.rotation.x = -0.55;
      laptopLid.castShadow = true;
      standGroup.add(laptopLid);

      group.add(standGroup);
    } else if (extra.id === 'extra-headphones') {
      const hpX = ctx.hasLamp ? -1.02 : 1.02;
      const hpZ = ctx.numMonitors >= 2 ? -0.28 : -0.2;

      const standPole = new THREE.Mesh(
        new THREE.CylinderGeometry(0.012, 0.012, 0.32, 12),
        new THREE.MeshStandardMaterial({ color: 0x334155, metalness: 0.8 })
      );
      standPole.position.set(hpX, 1.4, hpZ);
      standPole.castShadow = true;
      group.add(standPole);

      const band = new THREE.Mesh(
        new THREE.TorusGeometry(0.075, 0.014, 8, 16, Math.PI),
        new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.4 })
      );
      band.position.set(hpX, 1.54, hpZ);
      band.rotation.z = Math.PI;
      band.castShadow = true;
      group.add(band);
    }
  });

  return group;
};
