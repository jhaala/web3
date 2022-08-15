import React, { useState } from 'react';

type Props = ({
  message: string,
  opened: boolean
});

const MultipleActionNotification = ({ message, opened }: Props) => {
  const [isOpen, setOpen] = useState(opened);

  return (
    <div className="mx-auto flex justify-center sm:justify-end h-full">
      <div role="alert" className={`${isOpen ? 'z-20 sm:mr-6 xl:w-5/12 mx-auto absolute left-0 sm:left-auto right-0 sm:w-6/12 md:w-3/5 justify-between w-11/12 bg-white dark:bg-gray-800 shadow-lg rounded flex sm:flex-row flex-col transition duration-150 ease-in-out block' : 'hidden'}`}>
        <div className="sm:px-6 p-2 flex mt-4 sm:mt-0 ml-4 sm:ml-0 items-center justify-center bg-green-700 sm:rounded-tl sm:rounded-bl w-12 h-12 sm:h-auto sm:w-auto text-white">
          <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/coloured_multiple_with_separator-svg1.svg" alt="" />
        </div>
        <div className="flex flex-col justify-center xl:-ml-4 pl-4 xl:pl-1 sm:w-3/5 pt-4 sm:pb-4 pb-2">
          <h1 className="text-lg text-gray-800 dark:text-gray-100 font-semibold pb-1">
            Action Completed
          </h1>
          <p className="text-sm text-gray-600 dark:text-gray-400 font-normal">
            {message}
          </p>
        </div>
        <div className="flex sm:flex-col sm:justify-center sm:border-l dark:border-gray-700 items-center border-gray-300 sm:w-1/6 pl-4 sm:pl-0">
          <a href="#" className="sm:pt-4 pb-4 sm:border-b dark:border-gray-700 border-gray-300 sm:w-full flex sm:justify-center">
            <span className="sm:text-sm text-xs text-green-700 font-bold mr-4 sm:mr-0 cursor-pointer">
              View
            </span>
          </a>
          <a href="#" className="sm:pt-4 pb-4 flex sm:justify-center w-full cursor-pointer" onClick={() => setOpen(false)}>
            <span className="sm:text-sm text-xs text-gray-600 dark:text-gray-400 cursor-pointer">
              Dismiss
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};
export default MultipleActionNotification;
