import {
  DeliveryArea,
  RentalDuration,
  RentalPricing,
  SetupScore,
  WorkspaceItem,
  WorkspaceSetup
} from '@/types/workspace';
import { DELIVERY_AREAS, DURATION_OPTIONS } from '@/data/catalog';

export function getAllSelectedItems(setup: WorkspaceSetup): WorkspaceItem[] {
  const items: WorkspaceItem[] = [];

  if (setup.desk) {
    items.push(setup.desk);
  }

  if (setup.chair) {
    items.push(setup.chair);
  }

  items.push(...setup.monitors);

  if (setup.lamp) {
    items.push(setup.lamp);
  }

  if (setup.plant) {
    items.push(setup.plant);
  }

  items.push(...setup.extras);
  items.push(...setup.lifestyle);

  return items;
}

export function isSetupRentable(setup: WorkspaceSetup): boolean {
  return setup.desk !== null && setup.chair !== null;
}

export function calculateWorkspacePricing(
  setup: WorkspaceSetup,
  durationId: RentalDuration,
  areaId: DeliveryArea
): RentalPricing {
  const selectedItems = getAllSelectedItems(setup);
  const itemsSubtotalPerWeek = selectedItems.reduce(
    (accumulator, currentItem) => accumulator + currentItem.pricePerWeek,
    0
  );

  const durationOption =
    DURATION_OPTIONS.find((option) => option.id === durationId) ?? DURATION_OPTIONS[0];

  const deliveryOption =
    DELIVERY_AREAS.find((area) => area.id === areaId) ?? DELIVERY_AREAS[0];

  const durationWeeks = durationOption.weeks;
  const grossRentalTotal = itemsSubtotalPerWeek * durationWeeks;

  const discountPercentage = durationOption.discountPercentage;
  const discountAmount = Math.round((grossRentalTotal * discountPercentage) / 100);

  const deliveryFee = selectedItems.length > 0 ? deliveryOption.fee : 0;
  const finalTotal = Math.max(0, grossRentalTotal - discountAmount + deliveryFee);

  const effectiveWeeklyRate =
    durationWeeks > 0 ? Math.round((finalTotal - deliveryFee) / durationWeeks) : 0;

  return {
    itemsSubtotalPerWeek,
    durationWeeks,
    durationLabel: durationOption.label,
    grossRentalTotal,
    discountPercentage,
    discountAmount,
    deliveryFee,
    finalTotal,
    effectiveWeeklyRate
  };
}

export function calculateSetupScore(setup: WorkspaceSetup): SetupScore {
  const selectedItems = getAllSelectedItems(setup);

  if (selectedItems.length === 0) {
    return {
      ergonomics: 0,
      zen: 0,
      productivity: 0
    };
  }

  const rawErgo = selectedItems.reduce(
    (accum, item) => accum + item.ergonomicsScore,
    0
  );
  const rawZen = selectedItems.reduce(
    (accum, item) => accum + item.zenScore,
    0
  );

  const hasDesk = setup.desk !== null;
  const hasChair = setup.chair !== null;
  const monitorCount = setup.monitors.length;

  let baseProductivity = 20;
  if (hasDesk) baseProductivity += 25;
  if (hasChair) baseProductivity += 25;
  baseProductivity += Math.min(monitorCount * 15, 30);

  return {
    ergonomics: Math.min(100, Math.round(rawErgo * 0.8)),
    zen: Math.min(100, Math.round(rawZen * 0.85)),
    productivity: Math.min(100, baseProductivity)
  };
}

export function formatCurrencyIDR(amount: number): string {
  const formatted = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0
  }).format(amount);

  return formatted.replace(/\s+/g, '\u00A0');
}
