import * as THREE from 'three';
import { WorkspaceItem } from '@/types/workspace';

const createIdeScreenTexture = (width: number, height: number, label: string): THREE.CanvasTexture => {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 288;
  const ctx = canvas.getContext('2d');

  if (ctx) {
    ctx.fillStyle = '#0F172A';
    ctx.fillRect(0, 0, 512, 288);

    ctx.fillStyle = '#1E293B';
    ctx.fillRect(0, 0, 512, 28);

    ctx.fillStyle = '#EF4444';
    ctx.beginPath();
    ctx.arc(14, 14, 4, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#F59E0B';
    ctx.beginPath();
    ctx.arc(28, 14, 4, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#10B981';
    ctx.beginPath();
    ctx.arc(42, 14, 4, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#94A3B8';
    ctx.font = 'bold 10px monospace';
    ctx.fillText(`workspace/${label}.tsx`, 60, 18);

    ctx.fillStyle = '#1E293B';
    ctx.fillRect(0, 28, 48, 260);

    const lineColors: string[] = ['#38BDF8', '#818CF8', '#34D399', '#FBBF24', '#F472B6', '#38BDF8'];
    for (let i = 0; i < 11; i++) {
      const y = 48 + i * 20;
      ctx.fillStyle = '#475569';
      ctx.font = '10px monospace';
      ctx.fillText(`${i + 1}`, 16, y);

      const color = lineColors[i % lineColors.length];
      ctx.fillStyle = color;
      const lineWidth = 60 + ((i * 47) % 220);
      ctx.fillRect(68, y - 9, lineWidth, 8);

      if (i % 2 === 0) {
        ctx.fillStyle = '#64748B';
        ctx.fillRect(72 + lineWidth, y - 9, 45, 8);
      }
    }
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
};

export const buildMonitorsGroup = (monitors: readonly WorkspaceItem[]): THREE.Group => {
  const group = new THREE.Group();
  const frameMat = new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.3, metalness: 0.4 });
  const standMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.35, metalness: 0.6 });

  monitors.forEach((m, idx) => {
    const isUltrawide = m.id === 'monitor-34-ultrawide';
    const is27Pro = m.id === 'monitor-27-4k';
    const screenWidth = isUltrawide ? 1.65 : is27Pro ? 1.05 : 0.88;
    const screenHeight = isUltrawide ? 0.62 : is27Pro ? 0.6 : 0.52;

    let xPos = 0;
    let yRot = 0;
    let zPos = -0.18;

    if (monitors.length === 2) {
      xPos = idx === 0 ? -0.56 : 0.56;
      yRot = idx === 0 ? 0.16 : -0.16;
      zPos = -0.14;
    } else if (monitors.length >= 3) {
      if (idx === 0) {
        xPos = -0.76;
        yRot = 0.28;
      } else if (idx === 1) {
        xPos = 0;
        yRot = 0;
      } else {
        xPos = 0.76;
        yRot = -0.28;
      }
    }

    const monitorUnit = new THREE.Group();
    monitorUnit.position.set(xPos, 1.65, zPos);
    monitorUnit.rotation.y = yRot;

    const bezel = new THREE.Mesh(new THREE.BoxGeometry(screenWidth, screenHeight, 0.03), frameMat);
    bezel.castShadow = true;
    monitorUnit.add(bezel);

    const screenTexture = createIdeScreenTexture(screenWidth, screenHeight, m.name.toLowerCase().replace(/[^a-z0-9]/g, '-'));
    const displayMat = new THREE.MeshBasicMaterial({ map: screenTexture });
    const screenFace = new THREE.Mesh(new THREE.PlaneGeometry(screenWidth - 0.03, screenHeight - 0.03), displayMat);
    screenFace.position.z = 0.016;
    monitorUnit.add(screenFace);

    const standStem = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.42, 0.04), standMat);
    standStem.position.set(0, -0.24, -0.04);
    standStem.castShadow = true;
    monitorUnit.add(standStem);

    if (isUltrawide) {
      const legLeft = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.02, 0.32), standMat);
      legLeft.position.set(-0.16, -0.44, 0.06);
      legLeft.rotation.y = 0.35;
      legLeft.castShadow = true;
      monitorUnit.add(legLeft);

      const legRight = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.02, 0.32), standMat);
      legRight.position.set(0.16, -0.44, 0.06);
      legRight.rotation.y = -0.35;
      legRight.castShadow = true;
      monitorUnit.add(legRight);
    } else {
      const standFoot = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.018, 0.22), standMat);
      standFoot.position.set(0, -0.44, 0.04);
      standFoot.castShadow = true;
      monitorUnit.add(standFoot);
    }

    group.add(monitorUnit);
  });

  return group;
};
