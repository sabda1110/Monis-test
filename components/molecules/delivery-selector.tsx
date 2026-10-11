'use client';

import { FC, useState, useRef, useEffect } from 'react';
import { DeliveryArea } from '@/types/workspace';
import { DELIVERY_AREAS } from '@/data/catalog';
import { formatCurrencyIDR } from '@/utils/pricing';
import { CheckIcon, ChevronDownIcon, MapPinIcon, TruckIcon } from '@/components/atoms/icons';

export interface DeliverySelectorProps {
  selectedArea: DeliveryArea;
  onSelectArea: (area: DeliveryArea) => void;
}

export const DeliverySelector: FC<DeliverySelectorProps> = ({
  selectedArea,
  onSelectArea
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentArea =
    DELIVERY_AREAS.find((area) => area.id === selectedArea) ?? DELIVERY_AREAS[0];

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const handleSelect = (areaId: DeliveryArea) => {
    onSelectArea(areaId);
    setIsOpen(false);
  };

  return (
    <div className="space-y-1.5 select-none relative" ref={dropdownRef}>
      <div className="flex items-center justify-between">
        <label className="text-xs font-semibold text-neutral-900 flex items-center gap-1.5">
          <TruckIcon size={14} className="text-neutral-700" />
          <span>Delivery in Bali</span>
        </label>
        <span className="text-[10px] text-neutral-500 font-medium">
          {currentArea.estimate}
        </span>
      </div>

      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        className={`w-full flex items-center justify-between p-2.5 rounded-xl border bg-white transition-all cursor-pointer shadow-2xs ${
          isOpen
            ? 'border-black ring-2 ring-neutral-200 bg-neutral-50'
            : 'border-neutral-200 hover:border-black hover:bg-neutral-50/50'
        }`}
      >
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="w-7 h-7 rounded-lg bg-neutral-100 text-neutral-800 flex items-center justify-center shrink-0">
            <MapPinIcon size={14} />
          </div>
          <div className="text-left min-w-0">
            <span className="text-xs font-bold text-neutral-900 block truncate">
              {currentArea.label}
            </span>
            <span className="text-[10px] text-neutral-500 block truncate">
              Villa delivery & setup
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <span className="text-xs font-bold text-neutral-900 bg-neutral-100 px-2 py-0.5 rounded-md">
            +{formatCurrencyIDR(currentArea.fee)}
          </span>
          <ChevronDownIcon
            size={14}
            className={`text-neutral-500 transition-transform duration-200 ${
              isOpen ? 'rotate-180 text-black' : ''
            }`}
          />
        </div>
      </button>

      {isOpen && (
        <div
          role="listbox"
          className="absolute left-0 right-0 top-full mt-1.5 z-50 bg-white border border-neutral-200 rounded-2xl shadow-xl p-1.5 space-y-1 max-h-64 overflow-y-auto"
        >
          <div className="px-2 py-1 text-[10px] font-bold text-neutral-400 uppercase tracking-wider border-b border-neutral-100">
            Select Delivery Area in Bali
          </div>

          {DELIVERY_AREAS.map((area) => {
            const isSelected = area.id === selectedArea;

            return (
              <button
                key={area.id}
                type="button"
                role="option"
                aria-selected={isSelected}
                onClick={() => handleSelect(area.id)}
                className={`w-full flex items-center justify-between p-2 rounded-xl text-left transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-neutral-100 text-neutral-900 font-bold'
                    : 'hover:bg-neutral-50 text-neutral-700'
                }`}
              >
                <div className="flex items-center gap-2 min-w-0">
                  <div
                    className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 ${
                      isSelected
                        ? 'bg-black text-white'
                        : 'bg-neutral-100 text-neutral-500'
                    }`}
                  >
                    {isSelected ? <CheckIcon size={12} /> : <MapPinIcon size={11} />}
                  </div>

                  <div className="min-w-0">
                    <span className="text-xs block truncate">{area.label}</span>
                    <span className="text-[10px] text-neutral-500 block truncate">
                      {area.estimate}
                    </span>
                  </div>
                </div>

                <span
                  className={`text-xs font-bold shrink-0 ml-2 ${
                    isSelected ? 'text-black' : 'text-neutral-600'
                  }`}
                >
                  +{formatCurrencyIDR(area.fee)}
                </span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
