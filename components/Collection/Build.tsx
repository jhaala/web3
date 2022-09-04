import React from 'react';
import { MdImageSearch } from 'react-icons/md';
import { BsCloudUpload, BsFillImageFill } from 'react-icons/bs';

import Card from 'components/card';
import Button from 'components/button';
import PopupModal from 'components/modal';
import Dropzone from 'components/dropzone';
import ImageCropper from 'components/crop';
import useBuildCollection from 'hooks/useBuildCollection';

const BuildCollection = () => {
  const {
    crop,
    show,
    imgSrc,
    imgRef,
    completedCrop,
    previewCanvasRef,
    acceptedTypeNames,
    setShow,
    setCrop,
    onImageLoad,
    onSelectFile,
    setCompletedCrop,
  } = useBuildCollection();
  return (
    <div className='my-10'>
      <Card className='mx-2 sm:mx-10 md:mx-40'>
        <div className='relative flex-center'>
          {completedCrop ? (
            <span className='flex-center relative group w-2/4'>
              <canvas ref={previewCanvasRef} className='rounded-2xl w-full' />
              <div className='absolute divide-x divide-white bottom-0 flex-center rounded-2xl w-full h-0 bg-gray-900  opacity-0 group-hover:h-10 md:group-hover:h-16 group-hover:opacity-75 duration-200'>
                <div className='w-1/2'>
                  <div className='flex-center flex-col hover:cursor-pointer text-white hover:text-white/60' onClick={() => setShow(true)}>
                    <BsFillImageFill className='text-center text-xs sm:text-md' />
                    <span className='text-xs text-center'>Preview</span>
                  </div>
                </div>
                <div className='w-1/2'>
                  <div className='flex-center flex-col hover:cursor-pointer text-white hover:text-white/60' onClick={() => setShow(true)}>
                    <MdImageSearch className='text-center text-xs sm:text-md' />
                    <span className='text-xs text-center'>Crop</span>
                  </div>
                </div>
              </div>
            </span>
          ) : (
            <Dropzone onChange={onSelectFile}>
              <BsCloudUpload size={25} className='mx-auto mb-3' />
              <div className='px-3 text-center'>
                <strong>Drag</strong> and <strong>Drop</strong> File <br />
                or <strong>browse media on your device</strong>
                <p className='mt-3'>{acceptedTypeNames.join().replaceAll(',', ', ')} Max. Size 100MB</p>
              </div>
            </Dropzone>
          )}
          <div>
            <ImageCropper
              crop={crop}
              imgSrc={imgSrc}
              imgRef={imgRef}
              setCrop={setCrop}
              onImageLoad={onImageLoad}
              setCompletedCrop={setCompletedCrop}
              className='w-10 absolute -bottom-1 right-0 lg:right-10 xl:right-20'
              disabled
            />
          </div>
        </div>
        <div className='mx-5 md:mx-20 lg:mx-40'>
          <Button full onClick={() => setShow(true)}>
            Submit
          </Button>
        </div>
      </Card>
      {/* <BuildCollection /> */}
      <PopupModal show={show} title={'Crop Image'} closeBtn onClose={() => setShow(false)} large>
        <ImageCropper
          crop={crop}
          imgSrc={imgSrc}
          imgRef={imgRef}
          setCrop={setCrop}
          onImageLoad={onImageLoad}
          setCompletedCrop={setCompletedCrop}
          style={{ width: '600px' }}
          className='flex-center'
        />
      </PopupModal>
    </div>
  );
};

export default BuildCollection;
