import React from 'react';
import { BsCloudUpload } from 'react-icons/bs';

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
        <div className='relative'>
          {completedCrop ? (
            <div className='group relative'>
              <canvas ref={previewCanvasRef} className='rounded-2xl mx-auto w-2/4' />
            </div>
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
        <div>
          {completedCrop ? (
            <div className='flex gap-4 sm:gap-10 mx-5 md:mx-20 lg:mx-40 '>
              <Button full onClick={() => setShow(true)}>
                Preview Image
              </Button>
              <Button full onClick={() => setShow(true)}>
                Crop Image
              </Button>
            </div>
          ) : null}
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
