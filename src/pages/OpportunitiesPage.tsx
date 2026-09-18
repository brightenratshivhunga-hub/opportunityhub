import { useMemo } from 'react';
import { SearchX } from 'lucide-react';
import type { Category } from '@/types';
import { CATEGORIES } from '@/types';
import SearchBar from '@/components/SearchBar';
import CategoryFilter from '@/components/CategoryFilter';
import OpportunityCard from '@/components/OpportunityCard';

interface OpportunitiesPageProps {
  opportunities: import('@/types').Opportunity[];
  search: string;
  onSearch: (value: string) => void;
  category: Category | 'All';
  onCategory: (c: Category | 'All') => void;
  savedIds: string[];
  onToggleSave: (id: string) => void;
  onView: (id: string) => void;
}

const filterOptions: (Category | 'All')[] = ['All', ...CATEGORIES];

export default function OpportunitiesPage({
  opportunities,
  search,
  onSearch,
  category,
  onCategory,
  savedIds,
  onToggleSave,
  onView,
}: OpportunitiesPageProps) {
  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return opportunities.filter((o) => {
      const matchesCategory = category === 'All' || o.category === category;
      const matchesSearch =
        !q ||
        o.title.toLowerCase().includes(q) ||
        o.organisation.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [opportunities, search, category]);

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
      <div className="mb-6">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          Opportunities
        </h1>
        <p className="mt-1 text-sm text-slate-500">
          Browse {opportunities.length} sample opportunities. Search by name or
          filter by category.
        </p>
      </div>

      <div className="space-y-4">
        <SearchBar value={search} onChange={onSearch} />
        <CategoryFilter
          categories={filterOptions}
          current={category}
          onChange={onCategory}
        />
      </div>

      <p className="mt-5 text-sm text-slate-500">
        Showing <span className="font-semibold text-slate-700">{filtered.length}</span>{' '}
        {filtered.length === 1 ? 'result' : 'results'}
      </p>

      {filtered.length > 0 ? (
        <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((opp) => (
            <OpportunityCard
              key={opp.id}
              opportunity={opp}
              saved={savedIds.includes(opp.id)}
              onToggleSave={onToggleSave}
              onView={onView}
            />
          ))}
        </div>
      ) : (
        <div className="mt-12 flex flex-col items-center justify-center text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-100 text-slate-400">
            <SearchX className="h-8 w-8" />
          </div>
          <h3 className="mt-4 text-base font-semibold text-slate-900">
            No opportunities found
          </h3>
          <p className="mt-1 text-sm text-slate-500">
            Try a different search term or category.
          </p>
        </div>
      )}
    </div>
  );
}
