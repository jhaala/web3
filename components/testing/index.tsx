import React, { useRef, useState } from 'react';
import { BsCloudUpload } from 'react-icons/bs';
import ReactCrop, { centerCrop, makeAspectCrop, Crop, PixelCrop } from 'react-image-crop';

import Card from 'components/card';
import Dropzone from 'components/dropzone';
import ImageCropper from 'components/crop';
import { useDebounceEffect } from 'components/crop/useDebounceEffect';
import { canvasPreview } from 'components/crop/canvasPreview';

// This is to demonstate how to make and center a % aspect crop
// which is a bit trickier so we use some helper functions.
function centerAspectCrop(mediaWidth: number, mediaHeight: number, aspect: number) {
  console.log(mediaWidth);
  console.log(mediaHeight);
  console.log(aspect);

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

const BuildCollectionTesting = () => {
  const [imgSrc, setImgSrc] = useState('');
  const previewCanvasRef = useRef<HTMLCanvasElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const [crop, setCrop] = useState<Crop>();
  const [completedCrop, setCompletedCrop] = useState<PixelCrop>();
  const aspect = 1 / 1;
  const [fileUrl, setFileUrl] = useState('');
  const [selectedFile, setSelectedFile] = useState<File>();
  const acceptedTypeNames = ['JPG', 'PNG'];

  const newFile = async (fileList: File[]) => {
    setSelectedFile(fileList[0]);
    const assetUrl = URL.createObjectURL(fileList[0]);
    setFileUrl(assetUrl);
  };

  function onSelectFile(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files.length > 0) {
      setCrop(undefined); // Makes crop preview update between images.
      const reader = new FileReader();
      reader.addEventListener('load', () => setImgSrc(reader?.result?.toString() || ''));
      reader.readAsDataURL(e.target.files[0]);
    }
  }

  function onImageLoad(e: React.SyntheticEvent<HTMLImageElement>) {
    if (aspect) {
      const { width, height } = e.currentTarget;
      setCrop(centerAspectCrop(width, height, aspect));
    }
  }

  useDebounceEffect(
    async () => {
      if (completedCrop?.width && completedCrop?.height && imgRef.current && previewCanvasRef.current) {
        // We use canvasPreview as it's much faster than imgPreview.
        canvasPreview(imgRef.current, previewCanvasRef.current, completedCrop);
      }
    },
    100,
    [completedCrop],
  );

  console.log({ completedCrop });

  return (
    <div className='mt-40'>
      <Card className='mx-2 sm:mx-10 md:mx-40'>
        {completedCrop ? (
          <canvas
            ref={previewCanvasRef}
            style={{
              border: '1px solid black',
              objectFit: 'contain',
              width: completedCrop?.width,
              height: completedCrop?.height,
            }}
          />
        ) : (
          <Dropzone onChange={newFile}>
            <BsCloudUpload size={25} className='mx-auto mb-3' />
            <div className='px-3 text-center'>
              <strong>Drag</strong> and <strong>Drop</strong> File <br />
              or <strong>browse media on your device</strong>
              <p className='mt-3'>{acceptedTypeNames.join().replaceAll(',', ', ')} Max. Size 100MB</p>
            </div>
          </Dropzone>
        )}
        <ImageCropper
          crop={crop}
          imgSrc={imgSrc}
          completedCrop={completedCrop}
          imgRef={imgRef}
          previewCanvasRef={previewCanvasRef}
          setCrop={setCrop}
          onImageLoad={onImageLoad}
          onSelectFile={onSelectFile}
          setCompletedCrop={setCompletedCrop}
        />
      </Card>
      {/* <BuildCollection /> */}
    </div>
  );
};

export default BuildCollectionTesting;
