export type ItemCategory =
  | 'chairs'
  | 'desks'
  | 'monitors'
  | 'lamps'
  | 'plants'
  | 'extras'
  | 'lifestyle';

export type RentalDuration = '1_week' | '2_weeks' | '1_month' | '3_months';

export type DeliveryArea = 'canggu' | 'ubud' | 'seminyak' | 'uluwatu' | 'sanur';

export type BuilderScreen = 'builder' | 'checkout' | 'success';

export type StageLightingMode = 'day' | 'night';

export type StageVisualMode = '2d' | '3d';

export type PresetType = 'solo_dev' | 'minimalist' | 'power_setup';

export interface WorkspaceItem {
  id: string;
  name: string;
  category: ItemCategory;
  pricePerWeek: number;
  tag: string;
  description: string;
  specs: readonly string[];
  ergonomicsScore: number;
  zenScore: number;
}

export interface WorkspaceSetup {
  desk: WorkspaceItem | null;
  chair: WorkspaceItem | null;
  monitors: readonly WorkspaceItem[];
  lamp: WorkspaceItem | null;
  plant: WorkspaceItem | null;
  extras: readonly WorkspaceItem[];
  lifestyle: readonly WorkspaceItem[];
}

export interface RentalPricing {
  itemsSubtotalPerWeek: number;
  durationWeeks: number;
  durationLabel: string;
  grossRentalTotal: number;
  discountPercentage: number;
  discountAmount: number;
  deliveryFee: number;
  finalTotal: number;
  effectiveWeeklyRate: number;
}

export interface CustomerCheckoutDetails {
  fullName: string;
  email: string;
  whatsapp: string;
  villaAddress: string;
  startDate: string;
  specialRequests: string;
}

export interface SetupScore {
  ergonomics: number;
  zen: number;
  productivity: number;
}
