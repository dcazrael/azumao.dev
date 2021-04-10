import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import { ThemeProvider } from 'tailwind-darkmode-toggle';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
    >
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </GoogleReCaptchaProvider>
  );
}

export default MyApp;
