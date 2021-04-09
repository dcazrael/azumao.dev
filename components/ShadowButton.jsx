const ShadowButton = ({ link, github }) => {
  const isGH = github;
  return (
    <>
      <a
        href={link}
        target='_blank'
        rel='noreferrer'
        className={`relative px-4 py-2 text-base text-gray-800 transition-colors duration-500 hover:text-indigo-100 ${
          isGH
            ? 'bg-blue-500 hover:bg-blue-600'
            : 'bg-purple-500 hover:bg-purple-600'
        } bg-opacity-75 white-shadow`}
      >
        <span className='relative top-0.5'>
          View {isGH ? 'on Github' : 'live'}
        </span>
      </a>
    </>
  );
};

export default ShadowButton;
