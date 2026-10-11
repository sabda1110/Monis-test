import { PresetType, WorkspaceSetup } from '@/types/workspace';
import { CATALOG_ITEMS } from '@/data/catalog';

function findItemById(id: string) {
  return CATALOG_ITEMS.find((item) => item.id === id) ?? null;
}

export interface PresetDefinition {
  id: PresetType;
  label: string;
  tagline: string;
  buildSetup: () => WorkspaceSetup;
}

export const PRESET_DEFINITIONS: readonly PresetDefinition[] = [
  {
    id: 'solo_dev',
    label: 'Solo Dev',
    tagline: 'Dual-motor stand, 4K screen, and tactile typing focus.',
    buildSetup: (): WorkspaceSetup => {
      const desk = findItemById('desk-standing-pro');
      const chair = findItemById('chair-ergo-mesh');
      const monitor = findItemById('monitor-27-4k');
      const lamp = findItemById('lamp-minimal-screenbar');
      const plant = findItemById('plant-snake');
      const keyboard = findItemById('extra-mech-keyboard');
      const mouse = findItemById('extra-ergo-mouse');
      const coffee = findItemById('lifestyle-coffee-machine');

      return {
        desk,
        chair,
        monitors: monitor ? [monitor] : [],
        lamp,
        plant,
        extras: [keyboard, mouse].filter((item): item is NonNullable<typeof item> => item !== null),
        lifestyle: coffee ? [coffee] : []
      };
    }
  },
  {
    id: 'minimalist',
    label: 'Minimalist',
    tagline: 'Solid teak wood, compact screen, and zero clutter.',
    buildSetup: (): WorkspaceSetup => {
      const desk = findItemById('desk-compact-wood');
      const chair = findItemById('chair-classic-task');
      const monitor = findItemById('monitor-24-ips');
      const plant = findItemById('plant-succulent-set');
      const stand = findItemById('extra-laptop-stand');

      return {
        desk,
        chair,
        monitors: monitor ? [monitor] : [],
        lamp: null,
        plant,
        extras: stand ? [stand] : [],
        lifestyle: []
      };
    }
  },
  {
    id: 'power_setup',
    label: 'Power Setup',
    tagline: 'Ultrawide panoramic display, corner L-desk, and studio acoustics.',
    buildSetup: (): WorkspaceSetup => {
      const desk = findItemById('desk-executive-l');
      const chair = findItemById('chair-ergo-mesh');
      const ultrawide = findItemById('monitor-34-ultrawide');
      const secondMon = findItemById('monitor-27-4k');
      const lamp = findItemById('lamp-arc-desk');
      const plant = findItemById('plant-monstera');
      const keyboard = findItemById('extra-mech-keyboard');
      const mouse = findItemById('extra-ergo-mouse');
      const headphones = findItemById('extra-headphones');
      const surfboard = findItemById('lifestyle-surfboard');
      const coffee = findItemById('lifestyle-coffee-machine');

      return {
        desk,
        chair,
        monitors: [ultrawide, secondMon].filter(
          (item): item is NonNullable<typeof item> => item !== null
        ),
        lamp,
        plant,
        extras: [keyboard, mouse, headphones].filter(
          (item): item is NonNullable<typeof item> => item !== null
        ),
        lifestyle: [surfboard, coffee].filter(
          (item): item is NonNullable<typeof item> => item !== null
        )
      };
    }
  }
];
