import React from 'react';
import { MdImageSearch } from 'react-icons/md';
import { BsCloudUpload, BsFillImageFill } from 'react-icons/bs';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

import Card from 'components/card';
import Button from 'components/button';
import Heading from 'components/heading';
import PopupModal from 'components/modal';
import Dropzone from 'components/dropzone';
import ImageCropper from 'components/crop';
import useBuildCollection from 'hooks/useBuildCollection';
import { BuildCollectionFields } from 'constants/BuildCollectionFieldsConstants';

export interface BuildCollectionInputType {
  name: string;
  slug: string;
  description: string;
  keywords: string;
}

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

  const { control, handleSubmit } = useForm<BuildCollectionInputType>();

  const onSubmit: SubmitHandler<BuildCollectionInputType> = data => console.log(data);

  return (
    <div className='my-10'>
      <Card className='mx-2 sm:mx-10 md:mx-20 lg:mx-52 xl:mx-72'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Heading text='Create a Nft Collection' />
          <div className='text-xs text-gray-500 mb-4 mt-8'>
            <span className='text-red'>*</span> Required fields
          </div>
          <React.Fragment>
            {BuildCollectionFields?.map(item => {
              const Field = item.inputField;
              return (
                <div key={`${item.name}_collectionField`}>
                  <Heading text={item.title} type='subheading' />
                  {item?.rules?.required ? <span className='text-red'>*</span> : null}
                  <Controller
                    name={item.name as keyof BuildCollectionInputType}
                    control={control}
                    defaultValue=''
                    rules={item.rules}
                    render={({ field: { name, value, onChange }, fieldState: { error } }) => (
                      <Field
                        type='text'
                        placeholder={item.placeholder}
                        name={name}
                        value={value}
                        onChange={onChange}
                        error={error?.message}
                        // disabled={loading} TODO: Later API integartion
                      />
                    )}
                  />
                </div>
              );
            })}
          </React.Fragment>
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
          <div className='mx-5 md:mx-20 lg:mx-40 flex justify-end'>
            <Button className='min-w-min w-1/4' type='submit'>
              Create
            </Button>
          </div>
        </form>
      </Card>
      <PopupModal show={show} title={isCropAllow ? 'Preview Image' : 'Crop Image'} closeBtn onClose={() => setShow(false)} large>
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
