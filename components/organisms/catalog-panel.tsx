import { FC, useState, useMemo } from 'react';
import { ItemCategory, WorkspaceItem, WorkspaceSetup } from '@/types/workspace';
import { CATEGORY_TABS, CATALOG_ITEMS } from '@/data/catalog';
import { CatalogCard } from '@/components/molecules/catalog-card';
import {
  ChairIcon,
  DeskIcon,
  ExtrasIcon,
  LampIcon,
  MonitorIcon,
  PlantIcon,
  VillaIcon
} from '@/components/atoms/icons';
import { useDebounce } from '@/hooks/use-debounce';

export interface CatalogPanelProps {
  activeCategory: ItemCategory;
  setup: WorkspaceSetup;
  onSelectCategory: (category: ItemCategory) => void;
  onSelectItem: (item: WorkspaceItem) => void;
}

export const CatalogPanel: FC<CatalogPanelProps> = ({
  activeCategory,
  setup,
  onSelectCategory,
  onSelectItem
}) => {
  const [searchInput, setSearchInput] = useState<string>('');
  const debouncedSearch = useDebounce(searchInput, 300);

  const filteredItems = useMemo(() => {
    return CATALOG_ITEMS.filter((item) => {
      const matchesCategory = item.category === activeCategory;
      if (!matchesCategory) return false;

      if (!debouncedSearch.trim()) return true;

      const query = debouncedSearch.toLowerCase();
      return (
        item.name.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        item.tag.toLowerCase().includes(query)
      );
    });
  }, [activeCategory, debouncedSearch]);

  const isItemSelected = (item: WorkspaceItem): boolean => {
    if (item.category === 'desks') return setup.desk?.id === item.id;
    if (item.category === 'chairs') return setup.chair?.id === item.id;
    if (item.category === 'monitors')
      return setup.monitors.some((m) => m.id === item.id);
    if (item.category === 'lamps') return setup.lamp?.id === item.id;
    if (item.category === 'plants') return setup.plant?.id === item.id;
    if (item.category === 'extras')
      return setup.extras.some((extra) => extra.id === item.id);
    if (item.category === 'lifestyle')
      return setup.lifestyle.some((life) => life.id === item.id);
    return false;
  };

  const getCategoryIcon = (category: ItemCategory): React.ReactNode => {
    const iconMap: Record<ItemCategory, React.ReactNode> = {
      desks: <DeskIcon size={16} />,
      chairs: <ChairIcon size={16} />,
      monitors: <MonitorIcon size={16} />,
      lamps: <LampIcon size={16} />,
      plants: <PlantIcon size={16} />,
      extras: <ExtrasIcon size={16} />,
      lifestyle: <VillaIcon size={16} />
    };
    return iconMap[category];
  };

  return (
    <aside className="w-full lg:w-[340px] xl:w-[360px] bg-white border-r border-neutral-200 flex flex-col h-full overflow-hidden">
      <div className="p-4 border-b border-neutral-200 space-y-3 bg-white/95 backdrop-blur-xs">
        <div className="flex items-center justify-between">
          <h2 className="text-xs font-bold text-neutral-900 uppercase tracking-wider">
            Equipment Catalog
          </h2>
          <span className="text-[11px] text-neutral-500 font-medium">
            {filteredItems.length} options
          </span>
        </div>

        <div className="relative">
          <input
            type="text"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="Search items or tags..."
            className="w-full bg-neutral-50 border border-neutral-200 focus:border-black rounded-full px-3.5 py-2 text-xs text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-black/10 transition-colors"
          />
          {searchInput && (
            <button
              type="button"
              onClick={() => setSearchInput('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-neutral-400 hover:text-black"
            >
              Clear
            </button>
          )}
        </div>

        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
          {CATEGORY_TABS.map((tab) => {
            const isActive = activeCategory === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => onSelectCategory(tab.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-150 cursor-pointer ${
                  isActive
                    ? 'bg-black text-white shadow-xs'
                    : 'bg-neutral-50 text-neutral-700 border border-neutral-200 hover:border-neutral-400'
                }`}
              >
                {getCategoryIcon(tab.id)}
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex-1 min-h-0 overflow-y-auto p-3.5 pb-24 lg:pb-3.5 space-y-2.5 overscroll-contain bg-white">
        {filteredItems.length === 0 ? (
          <div className="p-8 text-center text-xs text-neutral-500 bg-neutral-50 rounded-2xl border border-dashed border-neutral-200">
            No equipment found matching criteria.
          </div>
        ) : (
          filteredItems.map((item) => (
            <CatalogCard
              key={item.id}
              item={item}
              isSelected={isItemSelected(item)}
              onSelect={onSelectItem}
            />
          ))
        )}
      </div>
    </aside>
  );
};
