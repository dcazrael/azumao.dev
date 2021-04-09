const LinkButton = ({
  children,
  borderColor,
  bgColor,
  className,
  href = null,
}) => {
  return (
    <div className={`z-10 relative ${className}`}>
      <a
        className={`group relative w-full h-full inline-flex box-border transition-colors duration-500 items-center px-8 pt-3 pb-1 font-bold text-center text-white ${
          !bgColor
            ? `${borderColor} border-2 hover:bg-purple-700 hover:text-indigo-100`
            : `${bgColor} hover:bg-indigo-100 hover:text-purple-700 hover:border-purple-700 `
        } outline-none cursor-pointer  bg-none focus:outline-none`}
        href={href}
      >
        <span className='relative -top-0.5 z-20 w-full block'>{children}</span>
        <span
          aria-hidden
          className={`absolute w-full h-full pt-3 pb-1 box-border transition-colors duration-500 ${
            !bgColor
              ? 'border-indigo-100 border-2'
              : 'bg-indigo-100 group-hover:bg-purple-700'
          } -z-1 top-1 left-1`}
        />
      </a>
    </div>
  );
};

export default LinkButton;
