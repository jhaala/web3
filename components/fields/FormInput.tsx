import * as React from 'react';
import FormError from 'components/fields/FormError';
import classNames from 'classnames/bind';

interface FormInputType extends React.ComponentProps<'input'> {
  name?: string;
  error?: string;
  className?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const FormInput: React.FC<FormInputType> = ({ name, value, placeholder, type, error, className = '', onChange, ...rest }) => {
  const [isFocus, setIsFocus] = React.useState(false);

  return (
    <div className='my-3'>
      <div
        className={classNames('gap-4 px-4 text-gray-900 ring-1 ring-gray-800/20 rounded-2xl flex-center bg-slate-100', {
          'shadow-[0_0_0_0.05rem_rgba(31,41,55,0.2)]': isFocus,
        })}
      >
        <input
          name={name}
          type={type}
          className={`relative focus:outline-none ring-0 block py-4 w-full bg-slate-100 placeholder-gray-400 rounded-2xl appearance-none sm:text-sm ${className}`}
          placeholder={placeholder}
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={onChange}
          {...rest}
        />
      </div>
      <FormError error={error} />
    </div>
  );
};

export default FormInput;
