import classnames from 'classnames/bind';

interface HeadingType {
  text: string;
  type?: 'title' | 'heading' | 'subheading' | 'base';
  className?: string;
}

const Heading: React.FC<HeadingType> = ({ text, type = 'title', className = '' }) => {
  return (
    <span
      className={classnames(`font-semibold ${className}`, {
        'text-4xl': type === 'title',
        'text-2xl': type === 'heading',
        'text-lg': type === 'subheading',
        'text-base': type === 'base',
      })}
    >
      {text}
    </span>
  );
};

export default Heading;
