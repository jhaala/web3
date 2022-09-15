import { ImCross } from 'react-icons/im';

const FormError: React.FC<{ error?: React.ReactNode }> = ({ error }) => {
  if (!error) return null;

  return (
    <div className='flex items-center gap-1 mt-1 ml-2 text-xs text-red'>
      <div>
        <ImCross />
      </div>
      <p>{error}</p>
    </div>
  );
};

export default FormError;
