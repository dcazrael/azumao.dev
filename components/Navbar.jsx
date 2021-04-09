import Link from 'next/link';
import { useEffect } from 'react';
import { DarkModeToggle } from 'tailwind-darkmode-toggle';
import Logo from '../assets/images/azumao_logo.svg';
import useScrollPosition from './hooks/useScrollPosition';
import Socials from './Socials';

const Navbar = () => {
  const scrollPos = useScrollPosition();

  useEffect(() => {
    const navbar = document.querySelector('.navbar');
    if (scrollPos > 20) {
      navbar.classList.add('bg-purple-700', 'border-b', 'border-white');
    } else {
      navbar.classList.remove('border-b', 'border-white', 'bg-purple-700');
    }
  }, [scrollPos]);

  return (
    <div className='sticky top-0 z-50 w-full -mb-20 transition-all navbar'>
      <div className='container flex items-center justify-between py-4 mx-auto text-lg text-indigo-100'>
        <Logo className='w-auto h-10 text-indigo-100 fill-current' />
        <nav className='flex items-center ml-auto mr-10 space-x-4'>
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
        <Socials />
        <DarkModeToggle className='w-10 h-10 ml-8 text-gray-800 text-indigo-100 cursor-pointer' />
      </div>
    </div>
  );
};

export default Navbar;
