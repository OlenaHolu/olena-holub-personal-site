// components/Navbar.tsx
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';

export default function Navbar() {
  const { t, lang } = useTranslation('common');
  const router = useRouter();

  return (
    <nav className="bg-pink-500 text-white p-4 flex justify-between">
      <div className="space-x-4">
        <Link href="/" locale={lang}>{t('nav.home')}</Link>
        <Link href="/projects" locale={lang}>{t('nav.projects')}</Link>
        <Link href="/contact" locale={lang}>{t('nav.contact')}</Link>
      </div>
      <div className="space-x-2 text-sm">
        <Link href={router.asPath} locale="en">EN</Link>
        <Link href={router.asPath} locale="es">ES</Link>
      </div>
    </nav>
  );
}
