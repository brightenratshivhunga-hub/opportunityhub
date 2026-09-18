import { useEffect, useMemo, useState } from 'react';
import type { Category } from '@/types';
import { opportunities as allOpportunities } from '@/data/opportunities';
import { useSavedOpportunities } from '@/hooks/useSavedOpportunities';
import Navbar, { type PageKey } from '@/components/Navbar';
import OpportunityDetails from '@/components/OpportunityDetails';
import HomePage from '@/pages/HomePage';
import OpportunitiesPage from '@/pages/OpportunitiesPage';
import SavedPage from '@/pages/SavedPage';

export default function App() {
  const [page, setPage] = useState<PageKey>('home');
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState<Category | 'All'>('All');
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const { savedIds, toggleSave, isSaved } = useSavedOpportunities();

  const featured = useMemo(
    () => allOpportunities.filter((o) => o.featured),
    []
  );

  const saved = useMemo(
    () => allOpportunities.filter((o) => savedIds.includes(o.id)),
    [savedIds]
  );

  const selected = useMemo(
    () => allOpportunities.find((o) => o.id === selectedId) ?? null,
    [selectedId]
  );

  // Lock body scroll when modal open
  useEffect(() => {
    if (selected) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selected]);

  const handleNavigate = (p: PageKey) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleView = (id: string) => {
    setSelectedId(id);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar
        current={page}
        onNavigate={handleNavigate}
        savedCount={savedIds.length}
      />

      <main>
        {page === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onSearch={(v) => {
              setSearch(v);
              handleNavigate('opportunities');
            }}
            searchValue={search}
            featured={featured}
            savedIds={savedIds}
            onToggleSave={toggleSave}
            onView={handleView}
          />
        )}

        {page === 'opportunities' && (
          <OpportunitiesPage
            opportunities={allOpportunities}
            search={search}
            onSearch={setSearch}
            category={category}
            onCategory={setCategory}
            savedIds={savedIds}
            onToggleSave={toggleSave}
            onView={handleView}
          />
        )}

        {page === 'saved' && (
          <SavedPage
            saved={saved}
            savedIds={savedIds}
            onToggleSave={toggleSave}
            onView={handleView}
            onBrowse={() => handleNavigate('opportunities')}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-4 w-4"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <rect x="3" y="3" width="7" height="7" rx="1.5" />
                  <rect x="14" y="3" width="7" height="7" rx="1.5" />
                  <rect x="3" y="14" width="7" height="7" rx="1.5" />
                  <rect x="14" y="14" width="7" height="7" rx="1.5" />
                </svg>
              </span>
              <span className="text-sm font-bold text-slate-900">
                Opportunity<span className="text-blue-600">Hub</span>
              </span>
            </div>
            <p className="text-xs text-slate-400">
              Demo MVP · Sample data for presentation purposes
            </p>
          </div>
        </div>
      </footer>

      {/* Details modal */}
      {selected && (
        <OpportunityDetails
          opportunity={selected}
          saved={isSaved(selected.id)}
          onToggleSave={toggleSave}
          onClose={() => setSelectedId(null)}
        />
      )}
    </div>
  );
}
