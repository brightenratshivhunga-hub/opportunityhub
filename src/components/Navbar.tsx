import { Bookmark, Home, LayoutGrid, Menu, X } from 'lucide-react';
import { useState } from 'react';

export type PageKey = 'home' | 'opportunities' | 'saved';

interface NavbarProps {
  current: PageKey;
  onNavigate: (page: PageKey) => void;
  savedCount: number;
}

const links: { key: PageKey; label: string; icon: typeof Home }[] = [
  { key: 'home', label: 'Home', icon: Home },
  { key: 'opportunities', label: 'Opportunities', icon: LayoutGrid },
  { key: 'saved', label: 'Saved', icon: Bookmark },
];

export default function Navbar({ current, onNavigate, savedCount }: NavbarProps) {
  const [open, setOpen] = useState(false);

  const handleNav = (page: PageKey) => {
    onNavigate(page);
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <button
          onClick={() => handleNav('home')}
          className="flex items-center gap-2 transition-opacity hover:opacity-80"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-white shadow-sm">
            <LayoutGrid className="h-5 w-5" strokeWidth={2.5} />
          </span>
          <span className="text-lg font-bold tracking-tight text-slate-900">
            Opportunity<span className="text-blue-600">Hub</span>
          </span>
        </button>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 sm:flex">
          {links.map(({ key, label, icon: Icon }) => {
            const active = current === key;
            return (
              <button
                key={key}
                onClick={() => handleNav(key)}
                className={`relative flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                  active
                    ? 'bg-blue-50 text-blue-700'
                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                <Icon className="h-4 w-4" />
                {label}
                {key === 'saved' && savedCount > 0 && (
                  <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-blue-600 px-1.5 text-xs font-semibold text-white">
                    {savedCount}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-700 hover:bg-slate-100 sm:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-slate-200 bg-white sm:hidden">
          <div className="space-y-1 px-4 py-3">
            {links.map(({ key, label, icon: Icon }) => {
              const active = current === key;
              return (
                <button
                  key={key}
                  onClick={() => handleNav(key)}
                  className={`flex w-full items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                    active
                      ? 'bg-blue-50 text-blue-700'
                      : 'text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  {label}
                  {key === 'saved' && savedCount > 0 && (
                    <span className="ml-auto flex h-5 min-w-5 items-center justify-center rounded-full bg-blue-600 px-1.5 text-xs font-semibold text-white">
                      {savedCount}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
