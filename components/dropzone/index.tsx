import React from 'react';
import { useDropzone } from 'react-dropzone';

import { MAX_FILES, MAX_SIZE } from 'constants/CollectionConstants';

interface DropzoneType {
  children: JSX.Element[];
  onChange: (fileList: File[]) => Promise<void>;
}

const Dropzone: React.FC<DropzoneType> = ({ onChange, children }) => {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    accept: { 'image/jpeg': ['.jpeg', '.png'] },
    maxSize: MAX_SIZE,
    maxFiles: MAX_FILES,
  });

  React.useEffect(() => {
    if (acceptedFiles && acceptedFiles.length > 0) {
      onChange(acceptedFiles);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [acceptedFiles]);

  return (
    <section className='h-80 transition bg-gray-100 cursor-pointer hover:bg-gray-200 rounded-3xl w-full'>
      <div {...getRootProps({ className: 'flex-center h-full' })}>
        <input {...getInputProps()} />
        <div className='dropzone__elements'>{children}</div>
      </div>
    </section>
  );
};

export default Dropzone;
