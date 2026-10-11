'use client';

import { useState, useMemo, useCallback } from 'react';
import {
  BuilderScreen,
  CustomerCheckoutDetails,
  DeliveryArea,
  ItemCategory,
  PresetType,
  RentalDuration,
  StageLightingMode,
  StageVisualMode,
  WorkspaceItem,
  WorkspaceSetup
} from '@/types/workspace';
import {
  calculateSetupScore,
  calculateWorkspacePricing,
  getAllSelectedItems,
  isSetupRentable
} from '@/utils/pricing';
import { PRESET_DEFINITIONS } from '@/data/presets';
import { CATALOG_ITEMS } from '@/data/catalog';
import { sanitizePhoneNumber } from '@/utils/phone';

const INITIAL_SETUP: WorkspaceSetup = {
  desk: null,
  chair: null,
  monitors: [],
  lamp: null,
  plant: null,
  extras: [],
  lifestyle: []
};

const INITIAL_CUSTOMER_DETAILS: CustomerCheckoutDetails = {
  fullName: '',
  email: '',
  whatsapp: '',
  villaAddress: '',
  startDate: '',
  specialRequests: ''
};

export function useWorkspaceBuilder() {
  const [setup, setSetup] = useState<WorkspaceSetup>(INITIAL_SETUP);
  const [activeCategory, setActiveCategory] = useState<ItemCategory>('chairs');
  const [duration, setDuration] = useState<RentalDuration>('1_month');
  const [deliveryArea, setDeliveryArea] = useState<DeliveryArea>('canggu');
  const [screen, setScreen] = useState<BuilderScreen>('builder');
  const [lightingMode, setLightingMode] = useState<StageLightingMode>('day');
  const [visualMode, setVisualMode] = useState<StageVisualMode>('3d');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [customerDetails, setCustomerDetails] =
    useState<CustomerCheckoutDetails>(INITIAL_CUSTOMER_DETAILS);

  const selectItem = useCallback((item: WorkspaceItem) => {
    setSetup((prev) => {
      if (item.category === 'desks') {
        return {
          ...prev,
          desk: prev.desk?.id === item.id ? null : item
        };
      }

      if (item.category === 'chairs') {
        return {
          ...prev,
          chair: prev.chair?.id === item.id ? null : item
        };
      }

      if (item.category === 'monitors') {
        const isSelected = prev.monitors.some((m) => m.id === item.id);
        if (isSelected) {
          return {
            ...prev,
            monitors: prev.monitors.filter((m) => m.id !== item.id)
          };
        }
        if (prev.monitors.length >= 3) {
          return prev;
        }
        return {
          ...prev,
          monitors: [...prev.monitors, item]
        };
      }

      if (item.category === 'lamps') {
        return {
          ...prev,
          lamp: prev.lamp?.id === item.id ? null : item
        };
      }

      if (item.category === 'plants') {
        return {
          ...prev,
          plant: prev.plant?.id === item.id ? null : item
        };
      }

      if (item.category === 'extras') {
        const isSelected = prev.extras.some((extra) => extra.id === item.id);
        if (isSelected) {
          return {
            ...prev,
            extras: prev.extras.filter((extra) => extra.id !== item.id)
          };
        }
        return {
          ...prev,
          extras: [...prev.extras, item]
        };
      }

      if (item.category === 'lifestyle') {
        const isSelected = prev.lifestyle.some((life) => life.id === item.id);
        if (isSelected) {
          return {
            ...prev,
            lifestyle: prev.lifestyle.filter((life) => life.id !== item.id)
          };
        }
        return {
          ...prev,
          lifestyle: [...prev.lifestyle, item]
        };
      }

      return prev;
    });
  }, []);

  const removeItem = useCallback((itemId: string) => {
    setSetup((prev) => {
      if (prev.desk?.id === itemId) return { ...prev, desk: null };
      if (prev.chair?.id === itemId) return { ...prev, chair: null };
      if (prev.lamp?.id === itemId) return { ...prev, lamp: null };
      if (prev.plant?.id === itemId) return { ...prev, plant: null };

      return {
        ...prev,
        monitors: prev.monitors.filter((m) => m.id !== itemId),
        extras: prev.extras.filter((extra) => extra.id !== itemId),
        lifestyle: prev.lifestyle.filter((life) => life.id !== itemId)
      };
    });
  }, []);

  const clearSetup = useCallback(() => {
    setSetup(INITIAL_SETUP);
  }, []);

  const dropItemById = useCallback(
    (itemId: string) => {
      const foundItem = CATALOG_ITEMS.find((item) => item.id === itemId);
      if (foundItem) {
        selectItem(foundItem);
      }
    },
    [selectItem]
  );

  const applyPreset = useCallback((presetId: PresetType) => {
    const preset = PRESET_DEFINITIONS.find((p) => p.id === presetId);
    if (preset) {
      setSetup(preset.buildSetup());
    }
  }, []);

  const toggleLighting = useCallback(() => {
    setLightingMode((prev) => (prev === 'day' ? 'night' : 'day'));
  }, []);

  const updateCustomerField = useCallback(
    (field: keyof CustomerCheckoutDetails, value: string) => {
      const sanitized = field === 'whatsapp' ? sanitizePhoneNumber(value) : value;
      setCustomerDetails((prev) => ({
        ...prev,
        [field]: sanitized
      }));
    },
    []
  );

  const selectedItems = useMemo(() => getAllSelectedItems(setup), [setup]);

  const pricing = useMemo(
    () => calculateWorkspacePricing(setup, duration, deliveryArea),
    [setup, duration, deliveryArea]
  );

  const scores = useMemo(() => calculateSetupScore(setup), [setup]);

  const isRentable = useMemo(() => isSetupRentable(setup), [setup]);

  const resetToNewBuild = useCallback(() => {
    setSetup(INITIAL_SETUP);
    setCustomerDetails(INITIAL_CUSTOMER_DETAILS);
    setScreen('builder');
  }, []);

  return {
    setup,
    activeCategory,
    duration,
    deliveryArea,
    screen,
    lightingMode,
    searchQuery,
    customerDetails,
    selectedItems,
    pricing,
    scores,
    isRentable,
    setActiveCategory,
    setDuration,
    setDeliveryArea,
    setScreen,
    setSearchQuery,
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
  };
}
