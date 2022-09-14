import React from 'react';
import { MdImageSearch } from 'react-icons/md';
import { BsCloudUpload, BsFillImageFill } from 'react-icons/bs';

import Card from 'components/card';
import Button from 'components/button';
import Heading from 'components/heading';
import PopupModal from 'components/modal';
import Dropzone from 'components/dropzone';
import ImageCropper from 'components/crop';
import FormInput from 'components/fields/FormInput';
import useBuildCollection from 'hooks/useBuildCollection';
import FormTextarea from 'components/fields/FormTextArea';

const BuildCollection = () => {
  const {
    crop,
    show,
    imgSrc,
    imgRef,
    isCropAllow,
    completedCrop,
    previewCanvasRef,
    acceptedTypeNames,
    setShow,
    setCrop,
    onImageLoad,
    onSelectFile,
    setCompletedCrop,
    onAllowCropModal,
  } = useBuildCollection();
  return (
    <div className='my-10'>
      <Card className='mx-2 sm:mx-10 md:mx-20 lg:mx-52 xl:mx-72'>
        <Heading text='Create a Nft Collection' />
        <div className='text-sm text-gray-500 mb-2 mt-8'>
          <span className='text-red'>*</span> Required fields
        </div>
        <div>
          <Heading text='Name' type='subheading' />
          <span className='text-red'> *</span>
          <FormInput />
        </div>
        <div>
          <Heading text='Slug' type='subheading' />
          <span className='text-red'> *</span>
          <FormInput />
        </div>
        <div>
          <Heading text='Description' type='subheading' />
          <span className='text-red'> *</span>
          <FormTextarea />
        </div>
        <div>
          <Heading text='Keywords' type='subheading' />
          <span className='text-red'> *</span>
          <FormInput />
        </div>
        <div>
          <Heading text='Upload Asset' type='subheading' />
          <div className='relative flex-center mt-3'>
            {completedCrop ? (
              <span className='flex-center relative group w-2/4'>
                <canvas ref={previewCanvasRef} className='rounded-2xl w-full' />
                <div className='absolute divide-x divide-white bottom-0 flex-center rounded-b-2xl w-full h-0 bg-gray-900  opacity-0 group-hover:h-10 lg:group-hover:h-16 group-hover:opacity-75 duration-200'>
                  <div className='w-1/2'>
                    <div
                      className='flex-center flex-col hover:cursor-pointer text-white hover:text-white/60'
                      onClick={() => onAllowCropModal(false)}
                    >
                      <BsFillImageFill className='text-center text-xs' />
                      <span className='text-xs text-center'>Preview</span>
                    </div>
                  </div>
                  <div className='w-1/2'>
                    <div
                      className='flex-center flex-col hover:cursor-pointer text-white hover:text-white/60'
                      onClick={() => onAllowCropModal(true)}
                    >
                      <MdImageSearch className='text-center text-xs' />
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
        </div>
        <div className='mx-5 md:mx-20 lg:mx-40'>
          <Button full onClick={() => setShow(true)}>
            Submit
          </Button>
        </div>
      </Card>
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
          disabled={isCropAllow}
        />
      </PopupModal>
    </div>
  );
};

export default BuildCollection;
