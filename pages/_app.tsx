import type { AppProps } from 'next/app';
import '../styles/globals.css';
import { useRouter } from 'next/router';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function MyApp({ Component, pageProps }: AppProps) {
  const { locale } = useRouter();

  return (
    <>
      <Navbar locale={locale!} />
      <main className="min-h-screen p-6">
        <Component {...pageProps} />
      </main>
      <Footer locale={locale!} />
    </>
  );
}