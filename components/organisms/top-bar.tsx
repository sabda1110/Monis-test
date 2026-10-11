import { FC } from 'react';
import { Button } from '@/components/atoms/button';
import { PriceTag } from '@/components/atoms/price-tag';
import { StepIndicator } from '@/components/atoms/step-indicator';
import { ArrowRightIcon } from '@/components/atoms/icons';
import { BrandLogo } from '@/components/atoms/brand-logo';

export interface TopBarProps {
  currentStep: number;
  totalPerWeek: number;
  isRentable: boolean;
  onReviewAndRent: () => void;
  onStepClick?: (step: number) => void;
  isSuccessScreen?: boolean;
  onNewBuild?: () => void;
}

export const TopBar: FC<TopBarProps> = ({
  currentStep,
  totalPerWeek,
  isRentable,
  onReviewAndRent,
  onStepClick,
  isSuccessScreen = false,
  onNewBuild
}) => {
  return (
    <header className="h-16 bg-white border-b border-neutral-200 px-4 sm:px-6 flex items-center justify-between sticky top-0 z-30 select-none">
      <div className="flex items-center gap-4 sm:gap-6">
        <BrandLogo size="md" />

        <div className="hidden md:block h-6 w-px bg-neutral-200" />

        <div className="hidden sm:block">
          <StepIndicator
            currentStep={isSuccessScreen ? 5 : currentStep}
            onStepClick={isSuccessScreen ? undefined : onStepClick}
          />
        </div>
      </div>

      <div className="flex items-center gap-3 sm:gap-5 shrink-0">
        {isSuccessScreen ? (
          <>
            <div className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
              <span>Paid & Confirmed</span>
            </div>

            <Button
              variant="secondary"
              size="md"
              onClick={onNewBuild}
              className="shadow-xs cursor-pointer font-bold text-xs sm:text-sm px-3 sm:px-4 rounded-full"
            >
              Build New Workspace
            </Button>
          </>
        ) : (
          <>
            <div className="text-right whitespace-nowrap">
              <span className="text-[10px] text-neutral-400 block uppercase tracking-wider font-semibold">
                Live Total
              </span>
              <PriceTag amount={totalPerWeek} size="md" periodLabel="/wk" />
            </div>

            <div className="hidden lg:flex items-center">
              <Button
                variant="primary"
                size="md"
                disabled={!isRentable}
                onClick={onReviewAndRent}
                className="shadow-sm whitespace-nowrap rounded-full px-5"
              >
                <span>Review & Rent</span>
                <ArrowRightIcon size={14} />
              </Button>
            </div>
          </>
        )}
      </div>
    </header>
  );
};
