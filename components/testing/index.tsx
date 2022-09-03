import { BsCloudUpload } from 'react-icons/bs';
import React, { useRef, useState } from 'react';
import { centerCrop, makeAspectCrop, Crop, PixelCrop } from 'react-image-crop';

import Card from 'components/card';
import Button from 'components/button';
import PopupModal from 'components/modal';
import Dropzone from 'components/dropzone';
import ImageCropper from 'components/crop';
import { useDebounceEffect } from 'hooks/useDebounceEffect';
import { canvasPreview } from 'utils/canvasPreview';
import { toBlob } from 'utils/imagePreview';

function centerAspectCrop(mediaWidth: number, mediaHeight: number, aspect: number) {
  return centerCrop(
    makeAspectCrop(
      {
        unit: '%',
        width: 100,
      },
      aspect,
      mediaWidth,
      mediaHeight,
    ),
    mediaWidth,
    mediaHeight,
  );
}

const resizeImage = (assetUrl: string, size: number) => {
  try {
    const img = document.createElement('img');
    img.onload = function () {
      const canvas = document.createElement('canvas');
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext('2d');
      // @ts-ignore
      ctx.drawImage(img, 0, 0, size, size);
      const dataurl = canvas.toDataURL();
      // const blobUrl = canvas.toBlob(blob => {
      //   if (blob) {
      //     console.log(blob);
      //     const url = URL.createObjectURL(blob);
      //     console.log({ url });
      //     // URL.revokeObjectURL(url);
      //   }
      // });
      // console.log({ blobUrl });
      console.log({ dataurl });
    };
    // const assetUrl = URL.createObjectURL(imageFile);
    img.src = assetUrl;
  } catch (error) {
    console.log('resizeImage', error);
  }
};

const BuildCollectionTesting = () => {
  const [show, setShow] = useState(false);
  const [crop, setCrop] = useState<Crop>();
  const [imgSrc, setImgSrc] = useState('');
  const [selectedFile, setSelectedFile] = useState<File>();
  const [completedCrop, setCompletedCrop] = useState<PixelCrop>();

  const imgRef = useRef<HTMLImageElement>(null);
  const previewCanvasRef = useRef<HTMLCanvasElement>(null);
  const aspect = 1;

  const acceptedTypeNames = ['JPG', 'PNG'];

  const checkImageDimension = async (assetUrl: string, fileList: File) => {
    const img = new Image();
    img.src = assetUrl;
    img.onload = () => {
      if (img.width < 1200 || img.height < 1200) {
        alert(`Invalid dimension: A larger dimension photo is needed minimum of 1200*1200 dimension`);
      } else {
        setCrop(undefined); // Makes crop preview update between images.
        setSelectedFile(fileList);
        setImgSrc(assetUrl);
      }
    };
  };

  const onSelectFile = async (fileList: File[]) => {
    try {
      const assetUrl = URL.createObjectURL(fileList[0]);
      checkImageDimension(assetUrl, fileList[0]);
      // resizeImage(assetUrl);
    } catch (error) {
      console.log('onSelectFile', error);
    }
  };

  const onImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    if (aspect) {
      const { width, height } = e.currentTarget;
      setCrop(centerAspectCrop(width, height, aspect));
    }
  };

  useDebounceEffect(
    async () => {
      if (completedCrop?.width && completedCrop?.height && imgRef.current && previewCanvasRef.current) {
        canvasPreview(imgRef.current, previewCanvasRef.current, completedCrop);
      }
    },
    100,
    [completedCrop],
  );

  return (
    <div className='my-10'>
      <Card className='mx-2 sm:mx-10 md:mx-40'>
        <div className='relative'>
          {completedCrop ? (
            <canvas ref={previewCanvasRef} className='rounded-2xl mx-auto w-2/3 hover:bg-sky-700' />
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

export default BuildCollectionTesting;
