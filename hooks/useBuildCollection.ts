import React, { useRef, useState } from 'react';
import { Crop, PixelCrop } from 'react-image-crop';

import { canvasPreview } from 'utils/canvasPreview';
import { useDebounceEffect } from 'hooks/useDebounceEffect';
import { centerAspectCrop, checkImageDimension } from 'utils/helper';

const useBuildCollection = () => {
  const [show, setShow] = useState(false);
  const [crop, setCrop] = useState<Crop>();
  const [imgSrc, setImgSrc] = useState('');
  const [isCropAllow, setIsCropAllow] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File>();
  const [completedCrop, setCompletedCrop] = useState<PixelCrop>();

  const imgRef = useRef<HTMLImageElement>(null);
  const previewCanvasRef = useRef<HTMLCanvasElement>(null);

  const aspect = 1;
  const acceptedTypeNames = ['JPG', 'PNG'];

  const onAllowCropModal = (isCrop: boolean) => {
    setShow(true);
    setIsCropAllow(!isCrop);
  };

  const onSelectFile = async (fileList: File[]) => {
    try {
      const assetUrl = URL.createObjectURL(fileList[0]);
      //   await resizeImageDimension(assetUrl, 300, (uri: string) => {
      //     console.log({ uri });
      //   });
      await checkImageDimension(assetUrl, (dimensionCheck: boolean) => {
        // if both dimension width and height is greater then 1200
        if (dimensionCheck) {
          setCrop(undefined); // Makes crop preview update between images.
          setSelectedFile(fileList[0]);
          setImgSrc(assetUrl);
        }
      });
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

  return {
    crop,
    show,
    imgRef,
    imgSrc,
    isCropAllow,
    selectedFile,
    completedCrop,
    previewCanvasRef,
    acceptedTypeNames,
    setShow,
    setCrop,
    onImageLoad,
    onSelectFile,
    onAllowCropModal,
    setCompletedCrop,
    checkImageDimension,
  };
};

export default useBuildCollection;
