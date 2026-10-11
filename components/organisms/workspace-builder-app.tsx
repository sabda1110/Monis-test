'use client';

import { FC } from 'react';
import { useWorkspaceBuilder } from '@/hooks/use-workspace-builder';
import { TopBar } from '@/components/organisms/top-bar';
import { CatalogPanel } from '@/components/organisms/catalog-panel';
import { WorkspaceStage } from '@/components/organisms/workspace-stage';
import { SetupSummaryPanel } from '@/components/organisms/setup-summary-panel';
import { CheckoutView } from '@/components/organisms/checkout-view';
import { SuccessView } from '@/components/organisms/success-view';
import { WorkspaceBuilderLayout } from '@/components/templates/workspace-builder-layout';
import { formatCurrencyIDR } from '@/utils/pricing';
import { DELIVERY_AREAS } from '@/data/catalog';

export const WorkspaceBuilderApp: FC = () => {
  const {
    setup,
    activeCategory,
    duration,
    deliveryArea,
    screen,
    lightingMode,
    customerDetails,
    selectedItems,
    pricing,
    scores,
    isRentable,
    setActiveCategory,
    setDuration,
    setDeliveryArea,
    setScreen,
    selectItem,
    dropItemById,
    removeItem,
    clearSetup,
    applyPreset,
    toggleLighting,
    visualMode,
    setVisualMode,
    updateCustomerField,
    resetToNewBuild
  } = useWorkspaceBuilder();

  const currentStep =
    screen === 'checkout'
      ? 4
      : setup.desk === null
      ? 1
      : setup.chair === null
      ? 2
      : 3;

  const currentDeliveryOption =
    DELIVERY_AREAS.find((area) => area.id === deliveryArea) ?? DELIVERY_AREAS[0];

  const handleStepNavigation = (step: number) => {
    if (step === 1) {
      setScreen('builder');
      setActiveCategory('desks');
    } else if (step === 2) {
      setScreen('builder');
      setActiveCategory('chairs');
    } else if (step === 3) {
      setScreen('builder');
      setActiveCategory('monitors');
    } else if (step === 4 && isRentable) {
      setScreen('checkout');
    }
  };

  if (screen === 'checkout') {
    return (
      <div className="min-h-screen bg-white font-sans">
        <TopBar
          currentStep={4}
          totalPerWeek={pricing.itemsSubtotalPerWeek}
          isRentable={isRentable}
          onReviewAndRent={() => {}}
          onStepClick={handleStepNavigation}
        />
        <CheckoutView
          setup={setup}
          selectedItems={selectedItems}
          pricing={pricing}
          lightingMode={lightingMode}
          customerDetails={customerDetails}
          deliveryAreaLabel={currentDeliveryOption.label}
          onUpdateField={updateCustomerField}
          onBackToBuilder={() => setScreen('builder')}
          onConfirmRental={() => setScreen('success')}
        />
      </div>
    );
  }

  if (screen === 'success') {
    return (
      <div className="min-h-screen bg-white font-sans">
        <TopBar
          currentStep={5}
          totalPerWeek={pricing.itemsSubtotalPerWeek}
          isRentable={isRentable}
          onReviewAndRent={() => {}}
          isSuccessScreen
          onNewBuild={resetToNewBuild}
        />
        <SuccessView
          setup={setup}
          selectedItems={selectedItems}
          pricing={pricing}
          lightingMode={lightingMode}
          customerDetails={customerDetails}
          deliveryAreaLabel={currentDeliveryOption.label}
          onReset={resetToNewBuild}
        />
      </div>
    );
  }

  return (
    <WorkspaceBuilderLayout
      topBar={
        <TopBar
          currentStep={currentStep}
          totalPerWeek={pricing.itemsSubtotalPerWeek}
          isRentable={isRentable}
          onReviewAndRent={() => setScreen('checkout')}
          onStepClick={handleStepNavigation}
        />
      }
      catalogPanel={
        <CatalogPanel
          activeCategory={activeCategory}
          setup={setup}
          onSelectCategory={setActiveCategory}
          onSelectItem={selectItem}
        />
      }
      stage={
        <WorkspaceStage
          setup={setup}
          lightingMode={lightingMode}
          visualMode={visualMode}
          isRentable={isRentable}
          onToggleLighting={toggleLighting}
          onToggleVisualMode={setVisualMode}
          onApplyPreset={applyPreset}
          onNavigateToCategory={(category) => setActiveCategory(category)}
          onSelectItem={selectItem}
          onRemoveItem={removeItem}
          onDropItem={dropItemById}
          onReviewAndRent={() => setScreen('checkout')}
        />
      }
      summaryPanel={
        <SetupSummaryPanel
          selectedItems={selectedItems}
          pricing={pricing}
          score={scores}
          duration={duration}
          deliveryArea={deliveryArea}
          isRentable={isRentable}
          onRemoveItem={removeItem}
          onClearSetup={clearSetup}
          onSelectDuration={setDuration}
          onSelectArea={setDeliveryArea}
          onReviewAndRent={() => setScreen('checkout')}
        />
      }
      isRentable={isRentable}
      totalPerWeekLabel={formatCurrencyIDR(pricing.itemsSubtotalPerWeek)}
      selectedItemsCount={selectedItems.length}
      onReviewAndRent={() => setScreen('checkout')}
    />
  );
};
