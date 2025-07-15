import Head from 'next/head';
import useTranslation from 'next-translate/useTranslation';

export default function Home() {
  const { t } = useTranslation('common');

  return (
    <>
      <Head>
        <title>{t('title')}</title>
        <meta name="description" content={t('description')} />
      </Head>
      <div>
        <h1 className="text-2xl font-bold text-pink-600">{t('intro')}</h1>
      </div>
    </>
  );
}
