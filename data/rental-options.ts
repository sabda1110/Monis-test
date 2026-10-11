import { DeliveryArea, RentalDuration } from '@/types/workspace';

export interface DurationOption {
  id: RentalDuration;
  label: string;
  weeks: number;
  discountPercentage: number;
  discountLabel: string;
}

export const DURATION_OPTIONS: readonly DurationOption[] = [
  { id: '1_week', label: '1 Week', weeks: 1, discountPercentage: 0, discountLabel: 'Standard rate' },
  { id: '2_weeks', label: '2 Weeks', weeks: 2, discountPercentage: 5, discountLabel: '5% off weekly rate' },
  { id: '1_month', label: '1 Month', weeks: 4, discountPercentage: 15, discountLabel: '15% nomad discount' },
  { id: '3_months', label: '3 Months', weeks: 12, discountPercentage: 25, discountLabel: '25% season saver' }
];

export interface DeliveryAreaOption {
  id: DeliveryArea;
  label: string;
  fee: number;
  estimate: string;
}

export const DELIVERY_AREAS: readonly DeliveryAreaOption[] = [
  { id: 'canggu', label: 'Canggu & Berawa', fee: 50000, estimate: 'Same-day delivery available' },
  { id: 'seminyak', label: 'Seminyak & Kerobokan', fee: 50000, estimate: 'Same-day delivery available' },
  { id: 'ubud', label: 'Ubud & Penestanan', fee: 75000, estimate: 'Delivered in 24 hours' },
  { id: 'uluwatu', label: 'Uluwatu & Bingin', fee: 90000, estimate: 'Delivered in 24 hours' },
  { id: 'sanur', label: 'Sanur & Ketewel', fee: 60000, estimate: 'Delivered in 24 hours' }
];
