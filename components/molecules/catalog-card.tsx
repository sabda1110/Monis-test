import { FC, useState } from 'react';
import { WorkspaceItem } from '@/types/workspace';
import { Badge } from '@/components/atoms/badge';
import { CheckIcon } from '@/components/atoms/icons';
import { formatCurrencyIDR } from '@/utils/pricing';
import { StageDeskIllustration } from '@/components/molecules/stage-desk-illustrations';
import { StageChairIllustration } from '@/components/molecules/stage-chair-illustrations';
import {
  StageDeskAccessoriesIllustration,
  StageLampIllustration,
  StageMonitorIllustration,
  StagePlantIllustration
} from '@/components/molecules/stage-accessory-illustrations';
import { StageLifestyleIllustration } from '@/components/molecules/stage-lifestyle-illustrations';

export interface CatalogCardProps {
  item: WorkspaceItem;
  isSelected: boolean;
  onSelect: (item: WorkspaceItem) => void;
}

export const CatalogCard: FC<CatalogCardProps> = ({
  item,
  isSelected,
  onSelect
}) => {
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const borderStyle = isSelected
    ? 'border-2 border-black bg-neutral-50/50 shadow-xs'
    : 'border border-neutral-200 hover:border-neutral-900 bg-white';

  const draggingStyle = isDragging
    ? 'opacity-40 scale-95 border-dashed border-black'
    : '';

  const renderIllustration = () => {
    if (item.category === 'desks') {
      return (
        <div className="w-full h-20 flex items-center justify-center p-2">
          <StageDeskIllustration id={item.id} className="max-h-16" />
        </div>
      );
    }
    if (item.category === 'chairs') {
      return (
        <div className="w-full h-20 flex items-center justify-center p-2">
          <StageChairIllustration id={item.id} className="max-h-16" />
        </div>
      );
    }
    if (item.category === 'monitors') {
      return (
        <div className="w-full h-20 flex items-center justify-center p-2">
          <StageMonitorIllustration id={item.id} className="max-h-16" />
        </div>
      );
    }
    if (item.category === 'lamps') {
      return (
        <div className="w-full h-20 flex items-center justify-center p-2">
          <StageLampIllustration id={item.id} className="max-h-16" />
        </div>
      );
    }
    if (item.category === 'plants') {
      return (
        <div className="w-full h-20 flex items-center justify-center p-2">
          <StagePlantIllustration id={item.id} className="max-h-16" />
        </div>
      );
    }
    if (item.category === 'lifestyle') {
      return (
        <div className="w-full h-20 flex items-center justify-center p-2">
          <StageLifestyleIllustration id={item.id} className="max-h-16" />
        </div>
      );
    }

    return (
      <div className="w-full h-20 flex items-center justify-center p-2">
        <StageDeskAccessoriesIllustration
          hasKeyboard={item.id === 'extra-mech-keyboard'}
          hasMouse={item.id === 'extra-ergo-mouse'}
          hasStand={item.id === 'extra-laptop-stand'}
          hasHeadphones={item.id === 'extra-headphones'}
          className="max-h-16"
        />
      </div>
    );
  };

  return (
    <div
      draggable
      onDragStart={(event) => {
        setIsDragging(true);
        event.dataTransfer.setData('text/plain', item.id);
        event.dataTransfer.effectAllowed = 'copy';
      }}
      onDragEnd={() => setIsDragging(false)}
      onClick={() => onSelect(item)}
      className={`group relative text-left w-full rounded-2xl border p-3 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md cursor-grab active:cursor-grabbing flex flex-col justify-between max-h-[220px] ${borderStyle} ${draggingStyle}`}
    >
      <div className="flex items-start justify-between gap-2 mb-1.5">
        <div className="flex items-center gap-1.5">
          <Badge variant={isSelected ? 'dark' : 'neutral'} size="sm">
            {item.tag}
          </Badge>
          <span className="text-[9px] uppercase tracking-wider text-neutral-400 font-bold group-hover:text-black">
            Drag
          </span>
        </div>
        <span
          className={`w-5 h-5 rounded-full flex items-center justify-center transition-all ${
            isSelected
              ? 'bg-black text-white'
              : 'border border-neutral-300 text-transparent group-hover:border-neutral-500'
          }`}
        >
          <CheckIcon size={12} />
        </span>
      </div>

      <div className="bg-neutral-50 border border-neutral-100 rounded-xl overflow-hidden mb-2.5 flex items-center justify-center">
        {renderIllustration()}
      </div>

      <div>
        <h4 className="text-sm font-semibold text-neutral-900 line-clamp-1 mb-0.5">
          {item.name}
        </h4>
        <p className="text-xs text-neutral-500 line-clamp-1 mb-2">
          {item.description}
        </p>
        <div className="flex items-baseline justify-between pt-1 border-t border-neutral-100">
          <span className="text-xs font-bold text-neutral-900">
            {formatCurrencyIDR(item.pricePerWeek)}
          </span>
          <span className="text-[10px] text-neutral-500 font-medium">/week</span>
        </div>
      </div>
    </div>
  );
};
