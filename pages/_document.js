import Document, { Head, Html, Main, NextScript } from 'next/document';
import { ThemeScriptTag } from 'tailwind-darkmode-toggle';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang='en'>
        <Head>
          <link rel='preconnect' href='https://fonts.gstatic.com' />
          <link
            href='https://fonts.googleapis.com/css2?family=Expletus+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500&family=Montserrat:wght@400;500;600;700&display=swap'
            rel='stylesheet'
          />

          <meta charSet='UTF-8' />
          <ThemeScriptTag />
        </Head>
        <body className='transition-colors duration-500 bg-gray-300 dark:bg-gray-800'>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
