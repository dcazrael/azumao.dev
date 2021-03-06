import Projects from './Projects';

const Portfolio = () => {
  return (
    <div className='container px-4 py-20 mx-auto text-gray-800 md:px-12 dark:text-gray-300'>
      <div className='text-lg'>
        <h2
          className='text-3xl italic font-medium font-expletus'
          id='portfolio'
        >
          Portfolio
        </h2>
      </div>
      <Projects />
    </div>
  );
};

export default Portfolio;
