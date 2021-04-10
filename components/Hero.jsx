import LinkButton from './LinkButton';

const Hero = () => {
  return (
    <div
      className='container flex px-4 pt-24 mx-auto lg:pt-32 md:px-12'
      id='home'
    >
      <div className='w-full text-indigo-100 md:w-auto md:ml-auto'>
        <div className='text-4xl text-shadow-md md:text-6xl font-expletus'>
          Let's build your
        </div>
        <div className='text-4xl text-shadow-md md:text-6xl font-expletus'>
          amazing project
        </div>
        <div className='flex justify-between mt-6'>
          <LinkButton
            bgColor='bg-purple-700'
            className='text-lg sm:text-xl'
            href='#contact'
          >
            Contact me
          </LinkButton>
          <LinkButton
            borderColor='border-purple-700'
            className='text-lg sm:text-xl'
            href='#portfolio'
          >
            Portfolio
          </LinkButton>
        </div>
      </div>
    </div>
  );
};

export default Hero;
