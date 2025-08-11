'use client';

import Link from 'next/link';
import { useRouter } from 'next/router';

const locales = [
  { code: 'en', label: '🇬🇧 EN' },
  { code: 'es', label: '🇪🇸 ES' },
  { code: 'ru', label: '🇷🇺 RU' },
  { code: 'uk', label: '🇺🇦 UK' }
];

export default function LanguageSwitcher() {
  const router = useRouter();
  const { pathname, asPath, query, locale } = router;

  return (
    <nav aria-label="Language selector" className="flex gap-2 items-center justify-center text-sm mt-4">
      {locales.map(({ code, label }) => {
        const isActive = locale === code;
        return (
          <Link
            key={code}
            href={{ pathname, query }}
            as={asPath}
            locale={code}
            scroll={false}
            aria-current={isActive ? 'page' : undefined}
            aria-label={`Switch language to ${code.toUpperCase()}`}
            className={`px-2 py-1 rounded transition ${
              isActive
                ? 'bg-yellow-400 text-white font-bold cursor-default'
                : 'text-gray-600 hover:text-black'
            }`}
            onClick={e => {
              if (isActive) e.preventDefault(); // evita recarga innecesaria
            }}
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
