import { Bookmark } from 'lucide-react';
import type { Opportunity } from '@/types';
import OpportunityCard from '@/components/OpportunityCard';

interface SavedPageProps {
  saved: Opportunity[];
  savedIds: string[];
  onToggleSave: (id: string) => void;
  onView: (id: string) => void;
  onBrowse: () => void;
}

export default function SavedPage({
  saved,
  savedIds,
  onToggleSave,
  onView,
  onBrowse,
}: SavedPageProps) {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
      <div className="mb-6">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          Saved Opportunities
        </h1>
        <p className="mt-1 text-sm text-slate-500">
          Your bookmarked opportunities, saved on this device.
        </p>
      </div>

      {saved.length > 0 ? (
        <>
          <p className="mb-4 text-sm text-slate-500">
            <span className="font-semibold text-slate-700">{saved.length}</span>{' '}
            saved {saved.length === 1 ? 'opportunity' : 'opportunities'}
          </p>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {saved.map((opp) => (
              <OpportunityCard
                key={opp.id}
                opportunity={opp}
                saved={savedIds.includes(opp.id)}
                onToggleSave={onToggleSave}
                onView={onView}
              />
            ))}
          </div>
        </>
      ) : (
        <div className="mt-12 flex flex-col items-center justify-center text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-100 text-slate-400">
            <Bookmark className="h-8 w-8" />
          </div>
          <h3 className="mt-4 text-base font-semibold text-slate-900">
            No saved opportunities yet
          </h3>
          <p className="mt-1 max-w-xs text-sm text-slate-500">
            Tap the bookmark icon on any opportunity to save it here for later.
          </p>
          <button
            onClick={onBrowse}
            className="mt-5 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-blue-600/20 transition-colors hover:bg-blue-700"
          >
            Browse Opportunities
          </button>
        </div>
      )}
    </div>
  );
}
