import useTranslation from 'next-translate/useTranslation';

export default function Footer() {
  const { t } = useTranslation('common');

  return (
    <footer className="bg-gray-100 text-center text-sm text-gray-600 py-4">
      {t('footer')}
    </footer>
  );
}
