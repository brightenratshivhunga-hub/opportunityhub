import { Bookmark, MapPin, CalendarClock } from 'lucide-react';
import type { Opportunity } from '@/types';

interface OpportunityCardProps {
  opportunity: Opportunity;
  saved: boolean;
  onToggleSave: (id: string) => void;
  onView: (id: string) => void;
}

function formatDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString('en-ZA', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}

const categoryStyles: Record<string, string> = {
  Bursaries: 'bg-emerald-50 text-emerald-700 ring-emerald-200',
  Internships: 'bg-amber-50 text-amber-700 ring-amber-200',
  Learnerships: 'bg-violet-50 text-violet-700 ring-violet-200',
  'Graduate Programmes': 'bg-blue-50 text-blue-700 ring-blue-200',
  'Free Courses': 'bg-rose-50 text-rose-700 ring-rose-200',
};

export default function OpportunityCard({
  opportunity,
  saved,
  onToggleSave,
  onView,
}: OpportunityCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md">
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-3 flex items-center justify-between gap-3">
          <span
            className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ring-1 ${
              categoryStyles[opportunity.category] ??
              'bg-slate-50 text-slate-700 ring-slate-200'
            }`}
          >
            {opportunity.category}
          </span>
          <button
            onClick={() => onToggleSave(opportunity.id)}
            className={`flex h-9 w-9 items-center justify-center rounded-full transition-colors ${
              saved
                ? 'bg-blue-50 text-blue-600'
                : 'text-slate-400 hover:bg-slate-100 hover:text-slate-600'
            }`}
            aria-label={saved ? 'Remove bookmark' : 'Save opportunity'}
          >
            <Bookmark className="h-5 w-5" fill={saved ? 'currentColor' : 'none'} />
          </button>
        </div>

        <h3 className="mb-1 text-base font-semibold leading-snug text-slate-900">
          {opportunity.title}
        </h3>
        <p className="mb-3 text-sm text-slate-500">{opportunity.organisation}</p>

        <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-slate-600">
          {opportunity.shortDescription}
        </p>

        <div className="mt-auto space-y-2 border-t border-slate-100 pt-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <MapPin className="h-3.5 w-3.5 text-slate-400" />
            <span className="truncate">{opportunity.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <CalendarClock className="h-3.5 w-3.5 text-slate-400" />
            <span>Closes {formatDate(opportunity.closingDate)}</span>
          </div>
        </div>
      </div>

      <div className="px-5 pb-5">
        <button
          onClick={() => onView(opportunity.id)}
          className="w-full rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800 group-hover:bg-blue-600 group-hover:shadow-sm group-hover:shadow-blue-600/20"
        >
          View Details
        </button>
      </div>
    </article>
  );
}
