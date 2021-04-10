import { useState } from 'react';
import ContactUs from '../assets/images/undraw_contact_us.svg';

const Contact = () => {
  const [state, setState] = useState({ name: '', email: '', message: '' });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value,
    });
  };
  const handlePress = () => {
    fetch('/api/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: state.name,
        email: state.email,
        message: state.message,
      }),
    });
  };
  return (
    <div className='container flex items-center py-20 mx-auto space-x-32 text-gray-800 transition-colors duration-500 dark:text-gray-300'>
      <div className='w-1/2'>
        <figure>
          <ContactUs className='w-full' />
        </figure>
      </div>
      <div className='w-1/2 text-lg'>
        <h2 className='text-3xl italic font-medium font-expletus' id='contact'>
          Contact
        </h2>
        <p className='my-6'>
          Get in touch with me, weather you want to network, talk about a
          project or simply say hi!
        </p>
        <p className='my-6'>
          Find me on{' '}
          <a
            className='font-bold text-purple-700 transition-colors duration-500 dark:text-indigo-400 hover:underline'
            href='https://www.linkedin.com/in/michael-sachdev/'
            target='_blank'
            rel='norefer'
          >
            LinkedIn
          </a>{' '}
          and{' '}
          <a
            className='font-bold text-purple-700 transition-colors duration-500 dark:text-indigo-400 hover:underline'
            href='https://github.com/dcazrael'
            target='_blank'
            rel='norefer'
          >
            Github
          </a>{' '}
          or send me an email.
        </p>
        <div className='relative mb-4'>
          <label htmlFor='name' className='text-sm leading-7'>
            Name
          </label>
          <input
            type='text'
            id='name'
            name='name'
            onChange={handleChange}
            className='w-full px-3 py-1 text-base leading-8 text-gray-800 transition-colors duration-500 ease-in-out bg-white border border-gray-300 outline-none focus:border-purple-700 focus:ring-2 focus:ring-indigo-200'
          />
        </div>
        <div className='relative mb-4'>
          <label htmlFor='email' className='text-sm leading-7'>
            Email
          </label>
          <input
            type='email'
            id='email'
            name='email'
            onChange={handleChange}
            className='w-full px-3 py-1 text-base leading-8 text-gray-800 transition-colors duration-500 ease-in-out bg-white border border-gray-300 outline-none focus:border-purple-700 focus:ring-2 focus:ring-indigo-200'
          />
        </div>
        <div className='relative mb-4'>
          <label htmlFor='message' className='text-sm leading-7'>
            Message
          </label>
          <textarea
            id='message'
            name='message'
            onChange={handleChange}
            className='w-full h-32 px-3 py-1 text-base leading-6 text-gray-800 transition-colors duration-500 ease-in-out bg-white border border-gray-300 outline-none resize-none focus:border-purple-700 focus:ring-2 focus:ring-indigo-200'
          ></textarea>
        </div>
        <button
          onClick={handlePress}
          className='box-border relative inline-flex items-center w-full h-full px-8 pt-3 pb-1 font-bold text-center text-white transition-colors duration-500 bg-purple-700 outline-none cursor-pointer group hover:bg-indigo-100 hover:text-purple-700 hover:border-purple-700 bg-none focus:outline-none'
        >
          <span className='relative -top-0.5 z-20 w-full block'>
            Connect with me
          </span>
          <span
            aria-hidden
            className='box-border absolute w-full h-full pt-3 pb-1 transition-colors duration-500 bg-indigo-100 group-hover:bg-purple-700 -z-1 top-1 left-1'
          />
        </button>
      </div>
    </div>
  );
};

export default Contact;
