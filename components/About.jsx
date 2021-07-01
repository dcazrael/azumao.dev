import Collab from '../assets/images/undraw_Live_collaboration.svg';

const About = () => {
  return (
    <div className='container flex flex-col items-center px-4 pt-8 pb-20 mx-auto space-y-8 text-gray-800 transition-colors duration-500 md:px-12 lg:space-y-0 lg:space-x-32 lg:flex-row dark:text-gray-300'>
      <div className='w-full text-lg lg:w-1/2'>
        <h2 className='text-3xl italic font-medium font-expletus' id='about'>
          Talk to me about your next project
        </h2>
        <p className='mt-6'>
          While most of my experience is in Frontend Development, I have
          experience in developing backend applications as well.
        </p>

        <p className='mt-6'>
          Applications I build focus on clear code structure and
          maintainability.
        </p>

        <p className='mt-6'>
          The tech stack I’m most familiar with is the jamStack, however I have
          build applications in Python (Django) and PHP as well.
        </p>

        <p className='mt-6'>
          Whenever the possibility comes up, I like to work with React or
          Next.js.
        </p>

        <p className='mt-6'>
          My previous work included building desktop applications for
          automation, so if you have a workflow you like to get optimized, give
          me a shout.
        </p>

        <p className='mt-6'>
          Most of all, I like to build things, be it simple applications, games
          or complex solutions.
        </p>

        <p className='mt-6'>
          Connect with me on{' '}
          <a
            className='font-bold text-purple-700 transition-colors duration-500 dark:text-indigo-400 hover:underline '
            href='https://www.linkedin.com/in/michael-sachdev/'
            target='_blank'
            rel='norefer'
          >
            LinkedIn
          </a>{' '}
          and{' '}
          <a
            className='font-bold text-purple-700 transition-colors duration-500 dark:text-indigo-400 hover:underline '
            href='https://github.com/dcazrael'
            target='_blank'
            rel='norefer'
          >
            Github
          </a>
          .<br />
          <em>Let's build something amazing!</em>
        </p>
      </div>
      <div className='w-4/5 lg:w-1/2'>
        <figure>
          <Collab className='w-full' />
        </figure>
      </div>
    </div>
  );
};

export default About;
