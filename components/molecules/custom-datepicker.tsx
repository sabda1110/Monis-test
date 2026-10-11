'use client';

import { FC, useState, useRef, useEffect, useMemo } from 'react';
import { ArrowLeftIcon, ArrowRightIcon, CalendarIcon, CheckIcon } from '@/components/atoms/icons';
import {
  MONTH_NAMES,
  WEEKDAY_NAMES,
  formatDisplayDate,
  getDaysInMonth,
  getFirstDayOfWeek,
  getRelativeDateString,
  isMonthInPast,
  isPastDay
} from '@/utils/date';

export interface CustomDatePickerProps {
  value: string;
  onChange: (date: string) => void;
  className?: string;
}

export const CustomDatePicker: FC<CustomDatePickerProps> = ({
  value,
  onChange,
  className = ''
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const initialDate = useMemo(() => {
    if (value) {
      const parts = value.split('-');
      if (parts.length === 3) {
        return new Date(Number(parts[0]), Number(parts[1]) - 1, Number(parts[2]));
      }
    }
    return new Date();
  }, [value]);

  const [currentYear, setCurrentYear] = useState<number>(initialDate.getFullYear());
  const [currentMonth, setCurrentMonth] = useState<number>(initialDate.getMonth());

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
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

  const daysInMonth = useMemo(() => {
    return getDaysInMonth(currentYear, currentMonth);
  }, [currentYear, currentMonth]);

  const firstDayOfWeek = useMemo(() => {
    return getFirstDayOfWeek(currentYear, currentMonth);
  }, [currentYear, currentMonth]);

  const isPrevMonthDisabled = useMemo(() => {
    return isMonthInPast(currentYear, currentMonth);
  }, [currentYear, currentMonth]);

  const handlePrevMonth = () => {
    if (isPrevMonthDisabled) return;
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear((prev) => prev - 1);
    } else {
      setCurrentMonth((prev) => prev - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear((prev) => prev + 1);
    } else {
      setCurrentMonth((prev) => prev + 1);
    }
  };

  const handleSelectDay = (day: number) => {
    const m = String(currentMonth + 1).padStart(2, '0');
    const d = String(day).padStart(2, '0');
    onChange(`${currentYear}-${m}-${d}`);
    setIsOpen(false);
  };

  const formattedDisplay = useMemo(() => {
    return formatDisplayDate(value);
  }, [value]);

  const setRelativeDays = (offset: number) => {
    const dateString = getRelativeDateString(offset);
    onChange(dateString);
    const parts = dateString.split('-');
    if (parts.length === 3) {
      setCurrentYear(Number(parts[0]));
      setCurrentMonth(Number(parts[1]) - 1);
    }
    setIsOpen(false);
  };

  return (
    <div className={`relative select-none ${className}`} ref={containerRef}>
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-haspopup="dialog"
        className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl border bg-neutral-50 text-xs font-semibold transition-all cursor-pointer shadow-2xs ${
          isOpen
            ? 'border-black ring-2 ring-neutral-200 bg-white'
            : 'border-neutral-200 hover:border-black text-neutral-900'
        }`}
      >
        <span className={value ? 'text-neutral-900' : 'text-neutral-400'}>
          {formattedDisplay}
        </span>
        <CalendarIcon size={15} className="text-neutral-700 shrink-0" />
      </button>

      {isOpen && (
        <div
          role="dialog"
          aria-label="Delivery Calendar"
          className="absolute left-0 right-0 sm:left-auto sm:right-0 top-full mt-2 z-50 w-full sm:w-[310px] bg-white border border-neutral-200 rounded-2xl shadow-xl p-3.5 space-y-3"
        >
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 border-b border-neutral-100">
            <button
              type="button"
              onClick={() => setRelativeDays(1)}
              className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-neutral-100 hover:bg-black text-neutral-800 hover:text-white border border-neutral-200 whitespace-nowrap cursor-pointer transition-colors"
            >
              Tomorrow
            </button>
            <button
              type="button"
              onClick={() => setRelativeDays(3)}
              className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-neutral-100 hover:bg-black text-neutral-800 hover:text-white border border-neutral-200 whitespace-nowrap cursor-pointer transition-colors"
            >
              In 3 Days
            </button>
            <button
              type="button"
              onClick={() => setRelativeDays(7)}
              className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-neutral-100 hover:bg-black text-neutral-800 hover:text-white border border-neutral-200 whitespace-nowrap cursor-pointer transition-colors"
            >
              Next Week
            </button>
          </div>

          <div className="flex items-center justify-between px-1">
            <span className="text-xs font-extrabold text-neutral-900">
              {MONTH_NAMES[currentMonth]} {currentYear}
            </span>

            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={handlePrevMonth}
                disabled={isPrevMonthDisabled}
                aria-label="Previous month"
                className={`w-7 h-7 rounded-lg flex items-center justify-center transition-colors ${
                  isPrevMonthDisabled
                    ? 'text-neutral-300 cursor-not-allowed opacity-40'
                    : 'hover:bg-neutral-100 text-neutral-600 cursor-pointer'
                }`}
              >
                <ArrowLeftIcon size={14} />
              </button>
              <button
                type="button"
                onClick={handleNextMonth}
                aria-label="Next month"
                className="w-7 h-7 rounded-lg hover:bg-neutral-100 text-neutral-600 flex items-center justify-center cursor-pointer transition-colors"
              >
                <ArrowRightIcon size={14} />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-7 gap-1 text-center">
            {WEEKDAY_NAMES.map((name) => (
              <span key={name} className="text-[10px] font-bold text-neutral-400 py-0.5">
                {name}
              </span>
            ))}

            {Array.from({ length: firstDayOfWeek }).map((_, i) => (
              <div key={`empty-${i}`} className="h-8" />
            ))}

            {Array.from({ length: daysInMonth }).map((_, i) => {
              const day = i + 1;
              const dateKey = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
              const isSelected = value === dateKey;
              const isPast = isPastDay(currentYear, currentMonth, day);

              return (
                <button
                  key={day}
                  type="button"
                  disabled={isPast}
                  onClick={() => !isPast && handleSelectDay(day)}
                  className={`h-8 rounded-xl text-xs font-bold transition-all flex items-center justify-center ${
                    isPast
                      ? 'text-neutral-300 cursor-not-allowed bg-transparent'
                      : isSelected
                      ? 'bg-black text-white shadow-xs cursor-pointer'
                      : 'hover:bg-neutral-100 hover:text-black text-neutral-800 cursor-pointer'
                  }`}
                >
                  {day}
                </button>
              );
            })}
          </div>

          <div className="pt-2 border-t border-neutral-100 flex items-center justify-between text-[11px]">
            <span className="text-neutral-500 font-medium">Island Setup Guarantee</span>
            <span className="text-neutral-900 font-bold flex items-center gap-1">
              <CheckIcon size={12} />
              48h Free Swap
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
