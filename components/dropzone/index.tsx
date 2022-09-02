// @ts-nocheck
import React from 'react';
import { useDropzone } from 'react-dropzone';

const MAX_SIZE = 104857600; // 100MB
const MAX_FILES = 1;

interface DropzoneType {
  onChange: any;
  children?: JSX.Element | JSX.Element[];
  //   onChange: (files: File[]) => void;
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
    <section className='h-80 transition bg-gray-100 cursor-pointer hover:bg-gray-200 rounded-3xl'>
      <div {...getRootProps({ className: 'flex-center h-full' })}>
        <input {...getInputProps()} />
        <div className='dropzone__elements'>{children}</div>
      </div>
    </section>
  );
};

export default Dropzone;
