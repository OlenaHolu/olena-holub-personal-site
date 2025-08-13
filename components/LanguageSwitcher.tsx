'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Languages, ChevronDown } from 'lucide-react';

type Mode = 'icon' | 'full';

const locales = [
  { code: 'en', label: 'EN', flag: '🇬🇧' },
  { code: 'es', label: 'ES', flag: '🇪🇸' },
  { code: 'ru', label: 'RU', flag: '🇷🇺' },
  { code: 'uk', label: 'UK', flag: '🇺🇦' }
];

export default function LanguageSwitcher({
  mode = 'full',
  dropdownUp = false,
}: {
  mode?: Mode;
  dropdownUp?: boolean;
}) {
  const router = useRouter();
  const { pathname, asPath, query, locale } = router;
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (!ref.current) return;
      if (!ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, []);

  const current = locales.find(l => l.code === locale) ?? locales[0];

  return (
    <div ref={ref} className="relative">
      {/* Trigger */}
      {mode === 'icon' ? (
        <button
          aria-label="Change language"
          onClick={() => setOpen(o => !o)}
          className="p-2 rounded-full hover:bg-yellow-500 transition active:scale-95"
        >
          <Languages size={18} className="text-black" />
        </button>
      ) : (
        <button
          onClick={() => setOpen(o => !o)}
          className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/90 hover:bg-white shadow-sm transition"
        >
          <span className="text-lg">{current.flag}</span>
          <span className="text-sm font-semibold text-gray-800">{current.label}</span>
          <ChevronDown size={16} className={`transition-transform ${open ? 'rotate-180' : ''}`} />
        </button>
      )}

      {/* Dropdown */}
      {open && (
        <div
          className={`absolute z-50 min-w-36 rounded-lg border bg-white shadow-lg ${
            dropdownUp ? 'bottom-12 right-0' : 'top-12 right-0'
          }`}
        >
          {locales.map(l => (
            <Link
              key={l.code}
              href={{ pathname, query }}
              as={asPath}
              locale={l.code}
              scroll={false}
              className={`flex items-center gap-3 px-3 py-2 text-sm hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg ${
                l.code === locale ? 'bg-yellow-50 text-yellow-700 font-semibold' : 'text-gray-700'
              }`}
              onClick={() => setOpen(false)}
            >
              <span className="text-lg">{l.flag}</span>
              <span>{l.label}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
