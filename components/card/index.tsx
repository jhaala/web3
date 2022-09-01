import classnames from 'classnames/bind';

interface CardType {
  className?: string;
  noShadow?: boolean;
  children?: JSX.Element | JSX.Element[];
}

const Card: React.FC<CardType> = ({ className = '', noShadow = false, children }) => (
  <div
    className={classnames(`p-4 sm:p-6 md:p-10 bg-white rounded-3xl ${className}`, {
      'shadow-2xl': !noShadow,
    })}
  >
    {children}
  </div>
);

export default Card;
