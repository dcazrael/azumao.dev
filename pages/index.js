import Head from 'next/head';
import ClipPath from '../assets/images/ClipPath.svg';
import About from '../components/About';
import Contact from '../components/Contact';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Portfolio from '../components/Portfolio';

export default function Home() {
  return (
    <div className='font-montserrat'>
      <Head>
        <title>Azumao.dev - Let's buld something amazing!</title>
        <link rel='icon' href='/favicon.png' />
      </Head>
      <Navbar />
      <header className='w-full xl:bg-cover bg-hero-backdrop min-h-110 xl:min-h-120'>
        <Hero />
      </header>

      <main className='w-full'>
        <About />
        <div className='transition-colors duration-500 bg-indigo-400 dark:bg-indigo-900 '>
          <Portfolio />
        </div>
        <Contact />
      </main>

      <footer className='container p-8 mx-auto'>
        <p className='text-center text-gray-800 transition-colors duration-500 dark:text-gray-300 '>
          <a
            className='font-medium transition-colors duration-500 hover:text-purple-700 dark:hover:text-indigo-400 '
            href='https://github.com/dcazrael'
            target='_blank'
            rel='norefer'
          >
            &copy; Michael Sachdev
          </a>
        </p>
      </footer>

      <ClipPath className='w-0 h-0' />
    </div>
  );
}
