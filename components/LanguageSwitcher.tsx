'use client';

import Link from 'next/link';
import { useRouter } from 'next/router';

const locales = [
  { code: 'en', label: '🇬🇧 EN' },
  { code: 'es', label: '🇪🇸 ES' },
  { code: 'ru', label: '🇷🇺 RU' },
  { code: 'uk', label: '🇺🇦 UK' },
];

export default function LanguageSwitcher() {
  const router = useRouter();
  const { pathname, asPath, query, locale } = router;

  return (
    <div className="flex gap-2 items-center justify-center text-sm mt-4">
      {locales.map(({ code, label }) => (
        <Link
          key={code}
          href={{ pathname, query }}
          as={asPath}
          locale={code}
          scroll={false}
          className={`px-2 py-1 rounded ${
            locale === code
              ? 'bg-yellow-400 text-white font-bold'
              : 'text-gray-600 hover:text-black'
          } transition`}
        >
          {label}
        </Link>
      ))}
    </div>
  );
}
