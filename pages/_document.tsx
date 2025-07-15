import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    const locale = ctx.locale || 'en';
    return { ...initialProps, locale };
  }

  render() {
    const lang = (this.props as any).locale || 'en';

    return (
      <Html lang={lang}>
        <Head />
        <body className="antialiased bg-white text-gray-800">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
