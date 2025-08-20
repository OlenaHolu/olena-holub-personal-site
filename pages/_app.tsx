import Layout from '../components/Layout';
import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';
import '@/styles/globals.css';

export default function MyApp({ Component, pageProps, router }: AppProps) {
  const isHome = router.pathname === '/';

  const getLayout =
    (Component as any).getLayout ||
    ((page: React.ReactNode) => (isHome ? page : <Layout>{page}</Layout>));

  return getLayout(
    <>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  );
}
