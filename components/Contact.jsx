import { useState } from 'react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import ContactUs from '../assets/images/undraw_contact_us.svg';

const Contact = () => {
  const [emailSent, setEmailSent] = useState(false);

  const [token, setToken] = useState('');
  const { executeRecaptcha } = useGoogleReCaptcha();

  const sendContactRequest = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const message = event.target.message.value;
    if (!executeRecaptcha) {
      return;
    }

    const result = await executeRecaptcha('contact');

    setToken(result);

    fetch('/api/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: email,
        message: message,
      }),
    }).then((res) => {
      setEmailSent(res.ok);
      setTimeout(() => {
        setEmailSent(false);
      }, 5000);
    });
  };
  return (
    <div className='container flex flex-col items-center px-4 py-20 mx-auto space-y-8 text-gray-800 transition-colors duration-500 md:px-12 lg:space-y-0 lg:space-x-32 lg:flex-row dark:text-gray-300'>
      <div className='relative w-full lg:w-1/2'>
        {emailSent && (
          <div className='absolute top-0 w-full px-8 py-2 font-bold text-center text-white transition-colors duration-500 bg-purple-700'>
            Email sent
          </div>
        )}
        <figure>
          <ContactUs className='w-full' />
        </figure>
      </div>
      <div className='w-full text-lg lg:w-1/2'>
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
        <form onSubmit={sendContactRequest}>
          <div className='relative mb-4'>
            <label htmlFor='email' className='text-sm leading-7'>
              Email
            </label>
            <input
              type='email'
              id='email'
              name='email'
              required
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
              required
              className='w-full h-32 px-3 py-1 text-base leading-6 text-gray-800 transition-colors duration-500 ease-in-out bg-white border border-gray-300 outline-none resize-none focus:border-purple-700 focus:ring-2 focus:ring-indigo-200'
            ></textarea>
          </div>
          <button className='box-border relative inline-flex items-center w-full h-full px-4 pt-3 pb-1 font-semibold text-center text-white transition-colors duration-500 bg-purple-700 outline-none cursor-pointer sm:px-8 lg:font-bold group hover:bg-indigo-100 hover:text-purple-700 hover:border-purple-700 bg-none focus:outline-none'>
            <span className='relative -top-0.5 z-20 w-full block'>
              Connect with me
            </span>
            <span
              aria-hidden
              className='box-border absolute w-full h-full pt-3 pb-1 transition-colors duration-500 bg-indigo-100 group-hover:bg-purple-700 -z-1 top-1 left-1'
            />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
