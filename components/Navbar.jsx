import Link from 'next/link';
import { useEffect, useState } from 'react';
import { DarkModeToggle } from 'tailwind-darkmode-toggle';
import Logo from '../assets/images/azumao_logo.svg';
import Hamburger from '../assets/images/hamburger.svg';
import useScrollPosition from './hooks/useScrollPosition';
import Socials from './Socials';

const Navbar = () => {
  const scrollPos = useScrollPosition();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    if (scrollPos > 20) {
      setHasScrolled(() => true);
    } else {
      setHasScrolled(() => false);
    }
  }, [scrollPos]);

  return (
    <div
      className={`sticky top-0 z-50 w-full px-4 -mb-20 transition-all md:px-12 ${
        (hasScrolled || mobileMenuOpen) && 'bg-purple-700'
      }`}
    >
      <div className='container flex items-center justify-between py-4 mx-auto text-lg text-indigo-100'>
        <Link href='https://azumao.dev'>
          <a>
            <Logo className='w-auto h-10 text-indigo-100 pointer-events-none fill-current' />
          </a>
        </Link>
        <nav className='items-center hidden ml-auto mr-10 space-x-4 md:flex'>
          <Link href='#home'>
            <a className='capitalize'>home</a>
          </Link>
          <Link href='#portfolio'>
            <a className='capitalize'>portfolio</a>
          </Link>
          <Link href='#about'>
            <a className='capitalize'>about</a>
          </Link>
          <Link href='#contact'>
            <a className='capitalize'>contact</a>
          </Link>
        </nav>
        <Socials className='justify-between hidden space-x-4 sm:flex' />
        <Hamburger
          className='w-6 h-6 text-indigo-100 fill-current md:hidden'
          onClick={() => setMobileMenuOpen(() => !mobileMenuOpen)}
        />
        <div
          className={`absolute inset-x-0 ${
            mobileMenuOpen ? 'block' : 'hidden'
          } py-4 mt-2 bg-purple-700 top-16 md:hidden`}
        >
          <nav className='flex flex-col items-center'>
            <Link href='#home'>
              <a className='capitalize'>home</a>
            </Link>
            <Link href='#portfolio'>
              <a className='capitalize'>portfolio</a>
            </Link>
            <Link href='#about'>
              <a className='capitalize'>about</a>
            </Link>
            <Link href='#contact'>
              <a className='capitalize'>contact</a>
            </Link>
          </nav>
          <Socials className='flex justify-center mt-2 space-x-4' />
        </div>
        <DarkModeToggle className='w-8 h-8 ml-4 text-indigo-100 cursor-pointer lg:ml-8' />
      </div>
    </div>
  );
};

export default Navbar;
