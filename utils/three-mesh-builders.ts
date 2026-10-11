import * as THREE from 'three';
import { StageLightingMode, WorkspaceSetup } from '@/types/workspace';
import { buildDeskMesh } from '@/utils/three-desk-builders';
import { buildChairMesh } from '@/utils/three-chair-builders';
import { buildMonitorsGroup } from '@/utils/three-monitor-builders';
import {
  AccessoryLayoutContext,
  buildLampGroup,
  buildExtrasGroup
} from '@/utils/three-accessory-builders';
import { buildPlantGroup } from '@/utils/three-plant-builders';
import { buildLifestyleGroup } from '@/utils/three-lifestyle-builders';

export const populateWorkspaceGroup = (
  group: THREE.Group,
  setup: WorkspaceSetup,
  lightingMode: StageLightingMode = 'day'
): void => {
  while (group.children.length > 0) {
    const obj = group.children[0];
    group.remove(obj);
  }

  const layoutContext: AccessoryLayoutContext = {
    numMonitors: setup.monitors.length,
    hasLaptopStand: setup.extras.some((e) => e.id === 'extra-laptop-stand'),
    hasLamp: setup.lamp !== null,
    hasCoffeeMachine: setup.lifestyle.some((l) => l.id === 'lifestyle-coffee-machine'),
    isNight: lightingMode === 'night'
  };

  if (setup.desk) {
    group.add(buildDeskMesh(setup.desk));
  }
  if (setup.chair) {
    group.add(buildChairMesh(setup.chair));
  }
  if (setup.monitors.length > 0) {
    group.add(buildMonitorsGroup(setup.monitors));
  }
  if (setup.lamp) {
    group.add(buildLampGroup(setup.lamp, layoutContext));
  }
  if (setup.plant) {
    group.add(buildPlantGroup(setup.plant, layoutContext));
  }
  if (setup.extras.length > 0) {
    group.add(buildExtrasGroup(setup.extras, layoutContext));
  }
  if (setup.lifestyle.length > 0) {
    group.add(buildLifestyleGroup(setup.lifestyle, layoutContext));
  }
};
