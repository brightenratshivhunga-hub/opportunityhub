import type { Category } from '@/types';

interface CategoryFilterProps {
  categories: (Category | 'All')[];
  current: Category | 'All';
  onChange: (category: Category | 'All') => void;
}

export default function CategoryFilter({
  categories,
  current,
  onChange,
}: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((cat) => {
        const active = current === cat;
        return (
          <button
            key={cat}
            onClick={() => onChange(cat)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
              active
                ? 'bg-blue-600 text-white shadow-sm shadow-blue-600/20'
                : 'bg-white text-slate-600 ring-1 ring-slate-200 hover:bg-slate-50 hover:text-slate-900'
            }`}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
}
