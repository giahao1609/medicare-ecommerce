import React from 'react';
import { CATEGORIES } from '../data/medicalData';
import { 
  LayoutGrid, 
  Activity, 
  FlaskConical, 
  HeartPulse, 
  Cpu, 
  Boxes,
  X
} from 'lucide-react';

interface CategoryFilterProps {
  selectedCategory: string;
  onSelectCategory: (id: string) => void;
  searchQuery: string;
  onClearSearch: () => void;
  totalProductsCount: number;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onClearSearch,
  totalProductsCount
}) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Activity':
        return <Activity className="w-4 h-4" />;
      case 'FlaskConical':
        return <FlaskConical className="w-4 h-4" />;
      case 'HeartPulse':
        return <HeartPulse className="w-4 h-4" />;
      case 'Cpu':
        return <Cpu className="w-4 h-4" />;
      case 'Boxes':
        return <Boxes className="w-4 h-4" />;
      case 'LayoutGrid':
      default:
        return <LayoutGrid className="w-4 h-4" />;
    }
  };

  return (
    <div className="space-y-4 mb-6">
      {/* Category Pills Bar (Responsive Horizontal Scroll on mobile) */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
        {CATEGORIES.map((cat) => {
          const isActive = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all shrink-0 ${
                isActive
                  ? 'bg-slate-900 text-white shadow-md shadow-slate-900/10'
                  : 'bg-white text-slate-700 border border-slate-200 hover:border-sky-300 hover:bg-sky-50/50'
              }`}
            >
              <span className={isActive ? 'text-sky-400' : 'text-slate-500'}>
                {getIcon(cat.iconName)}
              </span>
              <span>{cat.name}</span>
            </button>
          );
        })}
      </div>

      {/* Active Filter or Search Feedback Bar */}
      {searchQuery && (
        <div className="flex items-center justify-between bg-sky-50 border border-sky-200 rounded-xl px-4 py-2 text-xs sm:text-sm">
          <div className="flex items-center gap-2 text-slate-700">
            <span>Kết quả tìm kiếm cho:</span>
            <strong className="text-sky-800 font-bold">&quot;{searchQuery}&quot;</strong>
            <span className="text-slate-500 text-xs">({totalProductsCount} sản phẩm phù hợp)</span>
          </div>
          <button
            onClick={onClearSearch}
            className="flex items-center gap-1 text-sky-700 hover:text-sky-900 font-medium"
          >
            <span>Xóa tìm kiếm</span>
            <X className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
};
