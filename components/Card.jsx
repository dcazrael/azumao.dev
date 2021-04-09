import ShadowButton from './ShadowButton';

const Card = ({ children, title, image, github, link, tech, api }) => {
  return (
    <div className='flex flex-col transition-colors duration-500 bg-indigo-100 shadow-lg dark:bg-gray-800 rounded-br-3xl'>
      <div className='relative flex flex-col w-full h-56'>
        <figure className='absolute inset-0 z-10'>
          <img
            src={`/images/${image}.png`}
            className='object-cover w-full h-full'
            alt={title}
          />
        </figure>
        <div className='relative z-20 flex-grow p-8 text-indigo-100 transition-opacity duration-500 bg-black opacity-0 bg-opacity-70 hover:opacity-100'>
          {children}
        </div>
        <div className='absolute inset-x-0 z-30 flex justify-between px-8 bottom-4 justify-self-end'>
          <ShadowButton link={`https://github.com/dcazrael/${github}`} github />
          {link && <ShadowButton link={link} />}
        </div>
      </div>
      <div className='flex flex-col justify-between flex-grow p-8'>
        <h4 className='text-2xl'>{title}</h4>
        {api.length > 0 && (
          <div className='flex mt-6 space-x-2'>
            <p>API:</p>
            <p>{api.map((a) => `${a}, `)}</p>
          </div>
        )}
        <div>
          <p className='mt-6'>Tech:</p>
          <div className='flex justify-around mt-2'>
            {tech.map((name) => {
              return (
                <figure key={name}>
                  <img
                    src={`/images/icons/${name}.svg`}
                    alt={name}
                    title={name}
                    className='w-auto h-12'
                  />
                </figure>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
