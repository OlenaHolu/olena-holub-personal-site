import Head from 'next/head';
import useTranslation from 'next-translate/useTranslation';

export default function Projects() {
  const { t } = useTranslation('common');

  return (
    <>
      <Head>
        <title>{t('projectsTitle')}</title>
        <meta name="description" content={t('projectsDescription')} />
      </Head>
      <h2>{t('nav.projects')}</h2>
    </>
  );
}
