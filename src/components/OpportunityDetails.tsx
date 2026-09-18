import { useState } from 'react';
import { Bookmark, CalendarClock, CheckCircle2, ExternalLink, MapPin, PartyPopper, X } from 'lucide-react';
import type { Opportunity } from '@/types';

interface OpportunityDetailsProps {
  opportunity: Opportunity;
  saved: boolean;
  onToggleSave: (id: string) => void;
  onClose: () => void;
}

function formatDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString('en-ZA', {
    day: 'numeric',
    month: 'long',
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

export default function OpportunityDetails({
  opportunity,
  saved,
  onToggleSave,
  onClose,
}: OpportunityDetailsProps) {
  const [applied, setApplied] = useState(false);

  const applyUrl = `https://www.google.com/search?q=${encodeURIComponent(
    `${opportunity.organisation} ${opportunity.title} application`
  )}`;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-slate-900/50 backdrop-blur-sm sm:items-center">
      <div
        className="absolute inset-0"
        onClick={onClose}
        aria-hidden
      />
      <div className="relative max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-t-3xl bg-white shadow-2xl sm:rounded-3xl">
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-slate-100 bg-white/95 px-6 py-5 backdrop-blur">
          <div className="flex-1">
            <span
              className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ring-1 ${
                categoryStyles[opportunity.category] ??
                'bg-slate-50 text-slate-700 ring-slate-200'
              }`}
            >
              {opportunity.category}
            </span>
            <h2 className="mt-2 text-xl font-bold leading-tight text-slate-900">
              {opportunity.title}
            </h2>
            <p className="text-sm text-slate-500">{opportunity.organisation}</p>
          </div>
          <button
            onClick={onClose}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-700"
            aria-label="Close details"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Body */}
        <div className="space-y-6 px-6 py-6">
          {/* Quick facts */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div className="flex items-center gap-3 rounded-xl bg-slate-50 px-4 py-3">
              <MapPin className="h-5 w-5 text-blue-600" />
              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                  Location
                </p>
                <p className="text-sm font-semibold text-slate-800">
                  {opportunity.location}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-slate-50 px-4 py-3">
              <CalendarClock className="h-5 w-5 text-blue-600" />
              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                  Closing date
                </p>
                <p className="text-sm font-semibold text-slate-800">
                  {formatDate(opportunity.closingDate)}
                </p>
              </div>
            </div>
          </div>

          {/* Description */}
          <section>
            <h3 className="mb-2 text-sm font-bold uppercase tracking-wide text-slate-400">
              About this opportunity
            </h3>
            <p className="text-sm leading-relaxed text-slate-700">
              {opportunity.description}
            </p>
          </section>

          {/* Requirements */}
          <section>
            <h3 className="mb-3 text-sm font-bold uppercase tracking-wide text-slate-400">
              Requirements
            </h3>
            <ul className="space-y-2">
              {opportunity.requirements.map((req) => (
                <li
                  key={req}
                  className="flex items-start gap-3 text-sm text-slate-700"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Benefits */}
          <section>
            <h3 className="mb-3 text-sm font-bold uppercase tracking-wide text-slate-400">
              Benefits
            </h3>
            <ul className="space-y-2">
              {opportunity.benefits.map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-3 text-sm text-slate-700"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-500" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Footer actions */}
        <div className="sticky bottom-0 flex gap-3 border-t border-slate-100 bg-white/95 px-6 py-4 backdrop-blur">
          <button
            onClick={() => onToggleSave(opportunity.id)}
            className={`flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold transition-colors ${
              saved
                ? 'bg-blue-50 text-blue-700 ring-1 ring-blue-200'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <Bookmark className="h-4 w-4" fill={saved ? 'currentColor' : 'none'} />
            {saved ? 'Saved' : 'Save'}
          </button>
          {applied ? (
            <div className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-700 ring-1 ring-emerald-200">
              <PartyPopper className="h-4 w-4" />
              Application started
            </div>
          ) : (
            <a
              href={applyUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setApplied(true)}
              className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-sm shadow-blue-600/20 transition-colors hover:bg-blue-700"
            >
              Apply Now
              <ExternalLink className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
