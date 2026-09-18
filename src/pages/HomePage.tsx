import { ArrowRight, Search, Bookmark, Filter, MousePointerClick } from 'lucide-react';
import type { Opportunity } from '@/types';
import SearchBar from '@/components/SearchBar';
import OpportunityCard from '@/components/OpportunityCard';

interface HomePageProps {
  onNavigate: (page: 'home' | 'opportunities' | 'saved') => void;
  onSearch: (value: string) => void;
  searchValue: string;
  featured: Opportunity[];
  savedIds: string[];
  onToggleSave: (id: string) => void;
  onView: (id: string) => void;
}

const categories = [
  { label: 'Bursaries', desc: 'Funding for your studies' },
  { label: 'Internships', desc: 'Gain workplace experience' },
  { label: 'Learnerships', desc: 'Earn while you learn' },
  { label: 'Graduate Programmes', desc: 'Launch your career' },
  { label: 'Free Courses', desc: 'Build new skills online' },
];

const steps = [
  {
    icon: Search,
    title: 'Search',
    desc: 'Find opportunities by name or category in seconds.',
  },
  {
    icon: Filter,
    title: 'Filter',
    desc: 'Narrow down by bursaries, internships, courses and more.',
  },
  {
    icon: Bookmark,
    title: 'Save',
    desc: 'Bookmark opportunities to revisit them later.',
  },
];

export default function HomePage({
  onNavigate,
  onSearch,
  searchValue,
  featured,
  savedIds,
  onToggleSave,
  onView,
}: HomePageProps) {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-white to-white">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-100/60 blur-3xl" />
        <div className="absolute -left-24 top-32 h-64 w-64 rounded-full bg-sky-100/50 blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center rounded-full bg-blue-100 px-4 py-1.5 text-xs font-semibold text-blue-700">
              Bursaries · Internships · Learnerships · Courses
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl">
              Find Your Next Opportunity
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
              Discover bursaries, internships, learnerships, graduate programmes
              and free courses in one place. Search, filter and save
              opportunities that match your goals.
            </p>

            <div className="mx-auto mt-8 max-w-xl">
              <SearchBar value={searchValue} onChange={onSearch} />
            </div>

            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {categories.map((c) => (
                <button
                  key={c.label}
                  onClick={() => onNavigate('opportunities')}
                  className="rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-700 ring-1 ring-slate-200 transition-all hover:bg-blue-50 hover:text-blue-700 hover:ring-blue-200"
                >
                  {c.label}
                </button>
              ))}
            </div>

            <button
              onClick={() => onNavigate('opportunities')}
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm shadow-blue-600/20 transition-all hover:bg-blue-700 hover:shadow-md"
            >
              Explore Opportunities
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="mb-6 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              Featured Opportunities
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Hand-picked opportunities to get you started.
            </p>
          </div>
          <button
            onClick={() => onNavigate('opportunities')}
            className="hidden items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-700 sm:flex"
          >
            View all
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((opp) => (
            <OpportunityCard
              key={opp.id}
              opportunity={opp}
              saved={savedIds.includes(opp.id)}
              onToggleSave={onToggleSave}
              onView={onView}
            />
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              How It Works
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Three simple steps to your next opportunity.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {steps.map((s, i) => (
              <div
                key={s.title}
                className="relative rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm"
              >
                <span className="absolute right-5 top-5 text-3xl font-bold text-slate-100">
                  {i + 1}
                </span>
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-slate-900">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl bg-slate-900 px-6 py-12 text-center sm:px-12">
          <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-blue-600/20 blur-3xl" />
          <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-blue-500/20 blur-3xl" />
          <div className="relative">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Ready to find your next opportunity?
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm text-slate-300">
              Browse the full list of opportunities and save the ones that
              interest you.
            </p>
            <button
              onClick={() => onNavigate('opportunities')}
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-100"
            >
              <MousePointerClick className="h-4 w-4" />
              Explore Opportunities
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
