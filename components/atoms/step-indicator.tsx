import { FC } from 'react';
import { CheckIcon } from '@/components/atoms/icons';

export interface StepIndicatorProps {
  currentStep: number;
  onStepClick?: (step: number) => void;
}

const STEPS: readonly { step: number; label: string }[] = [
  { step: 1, label: 'Desk' },
  { step: 2, label: 'Chair' },
  { step: 3, label: 'Accessories' },
  { step: 4, label: 'Review' }
];

export const StepIndicator: FC<StepIndicatorProps> = ({
  currentStep,
  onStepClick
}) => {
  return (
    <div className="flex items-center gap-1 sm:gap-2">
      {STEPS.map((item, index) => {
        const isCompleted = currentStep > item.step;
        const isCurrent = currentStep === item.step;

        const circleStyle = isCompleted
          ? 'bg-black text-white border-black'
          : isCurrent
          ? 'bg-black text-white ring-4 ring-neutral-200 border-black'
          : 'bg-neutral-100 text-neutral-400 border-neutral-200';

        const labelStyle = isCurrent
          ? 'text-neutral-900 font-bold'
          : isCompleted
          ? 'text-neutral-900 font-semibold'
          : 'text-neutral-400 font-normal';

        return (
          <div key={item.step} className="flex items-center">
            <button
              type="button"
              onClick={() => onStepClick?.(item.step)}
              disabled={!onStepClick}
              className={`flex items-center gap-1.5 px-2 py-1 rounded-lg transition-colors ${
                onStepClick ? 'hover:bg-neutral-100 cursor-pointer' : 'cursor-default'
              }`}
            >
              <span
                className={`w-6 h-6 rounded-full flex items-center justify-center text-xs border ${circleStyle}`}
              >
                {isCompleted ? <CheckIcon size={12} /> : item.step}
              </span>
              <span className={`text-xs hidden md:inline ${labelStyle}`}>
                {item.label}
              </span>
            </button>
            {index < STEPS.length - 1 && (
              <span className="text-neutral-300 text-xs mx-0.5 sm:mx-1">→</span>
            )}
          </div>
        );
      })}
    </div>
  );
};
