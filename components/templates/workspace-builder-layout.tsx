'use client';

import { FC, ReactNode, useState } from 'react';

export interface WorkspaceBuilderLayoutProps {
  topBar: ReactNode;
  catalogPanel: ReactNode;
  stage: ReactNode;
  summaryPanel: ReactNode;
  isRentable: boolean;
  totalPerWeekLabel: string;
  onReviewAndRent: () => void;
  selectedItemsCount?: number;
}

export const WorkspaceBuilderLayout: FC<WorkspaceBuilderLayoutProps> = ({
  topBar,
  catalogPanel,
  stage,
  summaryPanel,
  isRentable,
  totalPerWeekLabel,
  onReviewAndRent,
  selectedItemsCount = 0
}) => {
  const [mobileTab, setMobileTab] = useState<'stage' | 'catalog' | 'summary'>('stage');

  return (
    <div className="h-screen max-h-screen bg-white flex flex-col font-sans text-neutral-900 overflow-hidden">
      {topBar}

      <div className="lg:hidden flex items-center justify-around border-b border-neutral-200 bg-white sticky top-16 z-20">
        <button
          type="button"
          onClick={() => setMobileTab('stage')}
          className={`flex-1 py-2.5 text-xs font-bold text-center border-b-2 transition-colors cursor-pointer ${
            mobileTab === 'stage'
              ? 'border-black text-black'
              : 'border-transparent text-neutral-500'
          }`}
        >
          Stage
        </button>
        <button
          type="button"
          onClick={() => setMobileTab('catalog')}
          className={`flex-1 py-2.5 text-xs font-bold text-center border-b-2 transition-colors cursor-pointer ${
            mobileTab === 'catalog'
              ? 'border-black text-black'
              : 'border-transparent text-neutral-500'
          }`}
        >
          Catalog
        </button>
        <button
          type="button"
          onClick={() => setMobileTab('summary')}
          className={`flex-1 py-2.5 text-xs font-bold text-center border-b-2 transition-colors cursor-pointer flex items-center justify-center gap-1.5 ${
            mobileTab === 'summary'
              ? 'border-black text-black'
              : 'border-transparent text-neutral-500'
          }`}
        >
          <span>Your Setup</span>
          {selectedItemsCount > 0 && (
            <span
              className={`px-1.5 py-0.2 rounded-full text-[10px] font-bold ${
                mobileTab === 'summary'
                  ? 'bg-black text-white'
                  : 'bg-neutral-100 text-neutral-600'
              }`}
            >
              {selectedItemsCount}
            </span>
          )}
        </button>
      </div>

      <main className="flex-1 min-h-0 flex flex-col lg:flex-row max-w-[1600px] w-full mx-auto overflow-hidden">
        <div className={`lg:block shrink-0 h-full ${mobileTab === 'catalog' ? 'block h-[calc(100vh-8rem)]' : 'hidden'}`}>
          {catalogPanel}
        </div>

        <div className={`flex-1 min-h-0 flex flex-col min-w-0 overflow-y-auto h-full overscroll-contain ${mobileTab === 'stage' ? 'flex pb-24 lg:pb-0' : 'hidden lg:flex'}`}>
          <div className="flex-1 min-h-0 flex flex-col">
            {stage}
          </div>
        </div>

        <div className={`lg:block shrink-0 h-full ${mobileTab === 'summary' ? 'block h-[calc(100vh-8rem)]' : 'hidden'}`}>
          {summaryPanel}
        </div>
      </main>

      <div className="lg:hidden fixed bottom-0 inset-x-0 bg-white border-t border-neutral-200 p-3 flex items-center justify-between z-30 shadow-lg">
        <div>
          <span className="text-[10px] text-neutral-500 block uppercase font-bold">
            Total per week
          </span>
          <span className="text-sm font-extrabold text-neutral-900">
            {totalPerWeekLabel}
          </span>
        </div>
        <button
          type="button"
          disabled={!isRentable}
          onClick={onReviewAndRent}
          className="bg-black hover:bg-neutral-800 text-white text-xs font-bold px-5 py-2.5 rounded-full disabled:opacity-50 cursor-pointer shadow-sm transition-colors"
        >
          Review & Rent
        </button>
      </div>
    </div>
  );
};
