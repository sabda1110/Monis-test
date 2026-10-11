'use client';

import { FC, useState } from 'react';
import {
  CustomerCheckoutDetails,
  RentalPricing,
  StageLightingMode,
  WorkspaceItem,
  WorkspaceSetup
} from '@/types/workspace';
import { Button } from '@/components/atoms/button';
import { formatCurrencyIDR } from '@/utils/pricing';
import { ArrowLeftIcon } from '@/components/atoms/icons';
import { CheckoutPreviewPanel } from '@/components/molecules/checkout-preview-panel';
import { CustomDatePicker } from '@/components/molecules/custom-datepicker';
import { isAllowedPhoneKey, isValidPhoneNumber, sanitizePhoneNumber } from '@/utils/phone';
import { isPastDateString } from '@/utils/date';

export interface CheckoutViewProps {
  setup: WorkspaceSetup;
  selectedItems: readonly WorkspaceItem[];
  pricing: RentalPricing;
  lightingMode: StageLightingMode;
  customerDetails: CustomerCheckoutDetails;
  deliveryAreaLabel: string;
  onUpdateField: (field: keyof CustomerCheckoutDetails, value: string) => void;
  onBackToBuilder: () => void;
  onConfirmRental: () => void;
}

export const CheckoutView: FC<CheckoutViewProps> = ({
  setup,
  selectedItems,
  pricing,
  lightingMode,
  customerDetails,
  deliveryAreaLabel,
  onUpdateField,
  onBackToBuilder,
  onConfirmRental
}) => {
  const [formError, setFormError] = useState<string>('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!customerDetails.fullName.trim()) {
      setFormError('Please enter your full name.');
      return;
    }
    if (!customerDetails.email.trim() || !customerDetails.email.includes('@')) {
      setFormError('Please enter a valid email address.');
      return;
    }
    if (!customerDetails.whatsapp.trim()) {
      setFormError('Please provide your WhatsApp number for Bali delivery coordination.');
      return;
    }
    if (!isValidPhoneNumber(customerDetails.whatsapp)) {
      setFormError('Please enter a valid WhatsApp phone number (minimum 8 digits, numbers only).');
      return;
    }
    if (!customerDetails.villaAddress.trim()) {
      setFormError('Please provide your Villa or Hotel address in Bali.');
      return;
    }
    if (!customerDetails.startDate) {
      setFormError('Please pick your desired delivery start date.');
      return;
    }
    if (isPastDateString(customerDetails.startDate)) {
      setFormError('Delivery start date cannot be in the past. Please select today or a future date.');
      return;
    }

    setFormError('');
    onConfirmRental();
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-neutral-50 p-4 sm:p-8">
      <div className="max-w-6xl mx-auto space-y-6">
        <button
          type="button"
          onClick={onBackToBuilder}
          className="inline-flex items-center gap-2 text-xs font-bold text-neutral-700 hover:text-black cursor-pointer"
        >
          <ArrowLeftIcon size={14} />
          <span>Back to workspace builder</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-6">
            <CheckoutPreviewPanel
              setup={setup}
              selectedItems={selectedItems}
              lightingMode={lightingMode}
            />
          </div>

          <div className="lg:col-span-6 bg-white rounded-3xl border border-neutral-200 p-6 shadow-sm">
            <h2 className="text-lg font-bold text-neutral-900 mb-1">
              Complete Villa Rental Reservation
            </h2>
            <p className="text-xs text-neutral-500 mb-5">
              We deliver, assemble, and test your ergonomic setup directly inside your Bali villa.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-neutral-900 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  value={customerDetails.fullName}
                  onChange={(e) => onUpdateField('fullName', e.target.value)}
                  placeholder="e.g. Alex Morgan"
                  className="w-full bg-neutral-50 border border-neutral-200 focus:border-black rounded-xl px-3.5 py-2.5 text-xs text-neutral-900 focus:outline-none focus:ring-2 focus:ring-black/10"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-neutral-900 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={customerDetails.email}
                    onChange={(e) => onUpdateField('email', e.target.value)}
                    placeholder="alex@nomad.dev"
                    className="w-full bg-neutral-50 border border-neutral-200 focus:border-black rounded-xl px-3.5 py-2.5 text-xs text-neutral-900 focus:outline-none focus:ring-2 focus:ring-black/10"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-900 mb-1">
                    WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    inputMode="tel"
                    value={customerDetails.whatsapp}
                    onKeyDown={(e) => {
                      if (!isAllowedPhoneKey(e.key, e.ctrlKey || e.metaKey)) {
                        e.preventDefault();
                      }
                    }}
                    onChange={(e) => onUpdateField('whatsapp', sanitizePhoneNumber(e.target.value))}
                    placeholder="+62 812 3456 7890"
                    className="w-full bg-neutral-50 border border-neutral-200 focus:border-black rounded-xl px-3.5 py-2.5 text-xs text-neutral-900 focus:outline-none focus:ring-2 focus:ring-black/10"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-neutral-900 mb-1">
                    Delivery Area
                  </label>
                  <input
                    type="text"
                    readOnly
                    value={deliveryAreaLabel}
                    className="w-full bg-neutral-100 border border-neutral-200 rounded-xl px-3.5 py-2.5 text-xs text-neutral-600 font-medium cursor-not-allowed"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-900 mb-1">
                    Delivery Start Date
                  </label>
                  <CustomDatePicker
                    value={customerDetails.startDate}
                    onChange={(val) => onUpdateField('startDate', val)}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-900 mb-1">
                  Villa / Resort / Hotel Name & Address
                </label>
                <textarea
                  rows={2}
                  value={customerDetails.villaAddress}
                  onChange={(e) => onUpdateField('villaAddress', e.target.value)}
                  placeholder="e.g. Villa Lotus, Jl. Pantai Batu Bolong No. 42, Canggu"
                  className="w-full bg-neutral-50 border border-neutral-200 focus:border-black rounded-xl px-3.5 py-2 text-xs text-neutral-900 focus:outline-none focus:ring-2 focus:ring-black/10"
                />
              </div>

              {formError && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-xs text-red-600 font-medium">
                  {formError}
                </div>
              )}

              <div className="p-4 bg-neutral-50 rounded-2xl border border-neutral-200 space-y-2">
                <div className="flex justify-between text-xs text-neutral-600">
                  <span>Rental Duration</span>
                  <span className="font-semibold text-neutral-900">
                    {pricing.durationLabel} ({pricing.durationWeeks} weeks)
                  </span>
                </div>
                {pricing.discountAmount > 0 && (
                  <div className="flex justify-between text-xs text-red-500 font-semibold">
                    <span>Nomad Discount</span>
                    <span>-{formatCurrencyIDR(pricing.discountAmount)}</span>
                  </div>
                )}
                <div className="flex justify-between text-xs text-neutral-600">
                  <span>Delivery & White-Glove Setup</span>
                  <span>{formatCurrencyIDR(pricing.deliveryFee)}</span>
                </div>
                <div className="pt-2 border-t border-neutral-200 flex justify-between items-baseline">
                  <span className="text-sm font-bold text-neutral-900">Grand Total</span>
                  <span className="text-xl font-black text-neutral-900">
                    {formatCurrencyIDR(pricing.finalTotal)}
                  </span>
                </div>
              </div>

              <Button type="submit" variant="primary" size="lg" fullWidth className="rounded-full">
                Confirm Rental & Schedule Delivery
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
