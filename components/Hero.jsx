import LinkButton from './LinkButton';

const Hero = () => {
  return (
    <div className='container flex pt-32 mx-auto' id='home'>
      <div className='ml-auto text-indigo-100'>
        <div className='text-6xl font-expletus'>Let's build your</div>
        <div className='text-6xl font-expletus'>amazing project</div>
        <div className='flex justify-between mt-6'>
          <LinkButton
            bgColor='bg-purple-700'
            className='text-2xl font-semibold'
            href='#contact'
          >
            Contact me
          </LinkButton>
          <LinkButton
            borderColor='border-purple-700'
            className='text-2xl font-semibold'
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
