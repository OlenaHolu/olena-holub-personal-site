import Head from 'next/head';
import useTranslation from 'next-translate/useTranslation';

export default function Contact() {
  const { t } = useTranslation('common');

  return (
    <>
      <Head>
        <title>{t('contactTitle')}</title>
        <meta name="description" content={t('contactDescription')} />
      </Head>
      <h2>{t('nav.contact')}</h2>
    </>
  );
}
